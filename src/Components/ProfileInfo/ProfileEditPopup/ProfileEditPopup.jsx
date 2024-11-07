import { useState } from "react";
import cross from "../../../../public/profile/cross.png";
import { useProfile } from "../../../ProfileProvider/ProfileProvider";
import axios from "axios";
import blankUser from "../../../../public/navbar/blackUser.png";
import { Link } from "react-router-dom";

const ProfileEditPopup = () => {
  const { profile, setProfile } = useProfile();
  const [updateMessage, setUpdateMessage] = useState("Update");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [isError, setIsError] = useState(false); // Track error state

  const [formData, setFormData] = useState({
    name: profile?.name || "",
    email: profile?.email || "",
    phone: profile?.phone || "",
    dateOfBirth: profile?.dateOfBirth || "",
    address: {
      house: profile?.address?.house || "",
      postalCode: profile?.address?.postalCode || "",
      street: profile?.address?.street || "",
      city: profile?.address?.city || "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [addressField]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdateProfile = async () => {
    try {
      setUpdateMessage("Updating...");
      setIsLoading(true); // Show the loading spinner
      setIsError(false); // Reset error state
      const response = await axios.put(
        "http://localhost:3000/user/profileEdit",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setProfile(response.data.user); // Assuming response has `user`
      setUpdateMessage("Success!");
      setIsLoading(false); // Hide the loading spinner
      setTimeout(() => setUpdateMessage("Update"), 2000); // Reset message after 2 seconds
    } catch (error) {
      setIsLoading(false); // Hide the loading spinner
      setIsError(true); // Set error state
      setUpdateMessage("Failed");
      console.error(error);
      setTimeout(() => setUpdateMessage("Update"), 2000); // Reset message after 2 seconds
    }
  };

  return (
    <div className="mt-20 pb-20 flex items-center justify-center">
      <div className="bg-white border shadow-lg max-w-[600px] w-full p-6 rounded-xl relative text-center">
        <Link to="/profileInfo">
          <img
            src={cross}
            className="absolute top-5 right-5 cursor-pointer w-4"
            loading="lazy"
            alt=""
          />
        </Link>
        <p className="text-2xl font-bold">Edit</p>
        <p className="text-sm text-gray-500">
          Update your information to help us <br /> provide best service
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <img
            src={profile?.profilePhoto || blankUser}
            loading="lazy"
            className="block border w-52 h-52 rounded-full object-cover object-top"
            alt=""
          />
          <div className="w-full bg-gray-200 h-[1px]"></div>

          {/* Profile Fields */}
          <div className="flex flex-col text-sm w-full items-start gap-3">
            {/* Name */}
            <div className="w-full items-start flex flex-col gap-1">
              <p className="font-semibold">Name</p>
              <div className="w-full flex items-center gap-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border focus:outline-none rounded-lg font-light"
                />
              </div>
            </div>

            {/* Email */}
            <div className="w-full items-start flex flex-col gap-1">
              <p className="font-semibold">Email</p>
              <div className="w-full flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border focus:outline-none rounded-lg font-light"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="w-full items-start flex flex-col gap-1">
              <p className="font-semibold">Phone</p>
              <div className="w-full flex items-center gap-2">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border focus:outline-none rounded-lg font-light"
                />
              </div>
            </div>

            {/* Birth Date */}
            <div className="w-full items-start flex flex-col gap-1">
              <p className="font-semibold">Birth Date</p>
              <div className="w-full flex items-center gap-2">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full p-2 border focus:outline-none rounded-lg font-light"
                />
              </div>
            </div>

            {/* Address */}
            <div className="w-full items-start flex flex-col gap-1">
              <p className="font-semibold">Address</p>
              <div className="w-full flex items-start gap-2">
                <div className="flex flex-col items-start gap-2 w-full">
                  <input
                    type="text"
                    name="address.house"
                    placeholder="House No."
                    value={formData.address.house}
                    onChange={handleInputChange}
                    className="w-full p-2 border focus:outline-none rounded-lg font-light"
                  />
                  <input
                    type="text"
                    name="address.postalCode"
                    placeholder="Postal Code"
                    value={formData.address.postalCode}
                    onChange={handleInputChange}
                    className="w-full p-2 border focus:outline-none rounded-lg font-light"
                  />
                  <input
                    type="text"
                    name="address.street"
                    placeholder="Street Name"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    className="w-full p-2 border focus:outline-none rounded-lg font-light"
                  />
                  <input
                    type="text"
                    name="address.city"
                    placeholder="City"
                    value={formData.address.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border focus:outline-none rounded-lg font-light"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex mt-6 items-center text-sm gap-4 justify-end w-full">
            <button className="w-24 py-1.5 bg-red-100 border border-red-600 rounded-lg text-red-600">
              Cancel
            </button>
            <button
              onClick={handleUpdateProfile}
              className={`w-24 py-1.5 ${
                isError
                  ? "bg-red-600 text-white"
                  : "bg-green-100 text-green-600"
              } border border-${isError ? "red" : "green"}-600 rounded-lg`}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-4 border-t-4 border-transparent border-t-white rounded-full animate-spin mx-auto"></div>
              ) : (
                updateMessage
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPopup;
