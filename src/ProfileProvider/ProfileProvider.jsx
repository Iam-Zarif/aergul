/* eslint-disable react/prop-types */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";
import { local } from "../Api/LocalApi";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState(null);

  const publicRoutes = useMemo(
    () => [
      "/auth/login",
      "/auth/register",
      "/auth/register-otp",
      "/auth/reset-password-email",
      "/auth/reset-password-otp",
      "/auth/reset-password-setPassword",
    ],
    []
  );

const fetchProfile = useCallback(async () => {
  setProfileLoading(true);
  setProfileError(null);

  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${local}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    const user = response?.data?.user;
    setProfile(user);

    const currentPathname = window.location.pathname;
    if (user && publicRoutes.includes(currentPathname)) {
      window.location.href = "/";
    } else if (!user && !publicRoutes.includes(currentPathname)) {
      window.location.href = "/auth/login";
    }
  } catch (err) {
    setProfileError(err.response?.data?.message || "Failed to fetch profile");
    const currentPathname = window.location.pathname;
    if (!publicRoutes.includes(currentPathname)) {
      window.location.href = "/auth/login";
    }
  } finally {
    setProfileLoading(false);
  }
}, [publicRoutes]);


  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const value = useMemo(
    () => ({
      profile,
      profileLoading,
      profileError,
      setProfile,
      refetchProfile: fetchProfile,
    }),
    [profile, profileLoading, profileError, fetchProfile]
  );

  if (profileLoading) {
    return (
      <div className="h-screen w-full flex items-start justify-center bg-gray-100">
        <div className="mt-10 flex space-x-2 animate-bounce">
          <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
          <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
          <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

// Add display name to avoid ESLint warning
const ProfileInfoComponent = React.memo(({ profile }) => {
  return <div>{profile?.name}</div>;
});

ProfileInfoComponent.displayName = "ProfileInfo"; // Adding display name

export const ProfileInfo = ProfileInfoComponent;
