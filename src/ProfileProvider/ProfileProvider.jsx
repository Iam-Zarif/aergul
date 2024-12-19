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
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState(null);

  const fetchProfile = useCallback(async () => {
    setProfileLoading(true);
    setProfileError(null);

    if (!token) {
      setProfileError("No token found. Please login.");
      setProfileLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${local}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
console.log(response)
      const user = response?.data?.user;
      setProfile(user);
    } catch (err) {
      setProfileError(err.response?.data?.message || "Failed to fetch profile");
    } finally {
      setProfileLoading(false);
    }
  }, [token]);

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

const ProfileInfoComponent = React.memo(({ profile }) => {
  return <div>{profile?.name}</div>;
});

ProfileInfoComponent.displayName = "ProfileInfo";

export const ProfileInfo = ProfileInfoComponent;
