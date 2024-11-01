import  { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { local } from "../Api/LocalApi";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${local}/user/profile`, {
        withCredentials: true,
      });
      setProfile(response?.data?.user); // Set profile data
      console.log("Fetched profile:", response?.data?.user); // Log the data for verification
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch profile");
      console.error("Error fetching profile:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const value = {
    profile,
    loading,
    error,
    refetchProfile: fetchProfile,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
