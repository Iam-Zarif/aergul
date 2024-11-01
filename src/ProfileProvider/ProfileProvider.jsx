/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { local } from "../Api/LocalApi";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState(null);

  const fetchProfile = async () => {
    setProfileLoading(true);
    setProfileError(null);

    try {
      const response = await axios.get(`${local}/user/profile`, {
        withCredentials: true,
      });
      setProfile(response?.data?.user);
      console.log("Fetched profile:", response?.data?.user);

      const currentPathname = window.location.pathname;

      if (
        response?.data?.user &&
        (currentPathname === "/auth/login" ||
          currentPathname === "/auth/register")
      ) {
        window.location.href = "/";
      }
    } catch (err) {
      setProfileError(err.response?.data?.message || "Failed to fetch profile");
      console.error("Error fetching profile:", err);
    } finally {
      setProfileLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const value = {
    profile,
    profileLoading,
    profileError,
    refetchProfile: fetchProfile,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
