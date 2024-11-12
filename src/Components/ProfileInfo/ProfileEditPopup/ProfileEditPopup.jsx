import { useState } from "react";
import cross from "../../../../public/profile/cross.png";
import { useProfile } from "../../../ProfileProvider/ProfileProvider";
import axios from "axios";
import blankUser from "../../../../public/navbar/blackUser.png";
import { Link } from "react-router-dom";
import edit from "../../../../public/profile/edit.png";

const ProfileEditPopup = () => {
  const { profile, setProfile } = useProfile();
  const [updateMessage, setUpdateMessage] = useState("Update");
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
    profilePhoto: profile?.profilePhoto || "",
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

 const handleFileChange = async (event) => {
   const file = event.target.files[0];
   if (file) {
     const previewUrl = URL.createObjectURL(file);
     setPreview(previewUrl);
     setIsLoading(true); // Set loading state to true when the file is selected

     try {
       const uploadedImageUrl = await uploadImageToCloudinary(file);
       setFormData({
         ...formData,
         profilePhoto: uploadedImageUrl, // Update the profile photo URL in formData
       });
       await handleUpdateProfile(uploadedImageUrl); // Call the update profile function after upload
     } catch (error) {
       setIsLoading(false); // Stop the loading state in case of an error
       console.error("Error uploading image:", error);
     }
   }
 };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dr5jpj9qs/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleUpdateProfile = async (uploadedImageUrl) => {
    try {
      setUpdateMessage("Updating...");
      setIsLoading(true);
      setIsError(false);

      const updatedProfileData = {
        ...formData,
        profilePhoto: uploadedImageUrl,
      };
      const response = await axios.put(
        "http://localhost:3000/user/profileEdit",
        updatedProfileData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
     if(response.status === 201){
       setProfile(response.data.user);
      setUpdateMessage("Success!");
      setIsLoading(false);
      setTimeout(() => setUpdateMessage("Update"), 2000);
      setIsLoading(false);
     }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setUpdateMessage("Failed");
      console.error(error);
      setTimeout(() => setUpdateMessage("Update"), 2000);
    }
  };

  return (
    <div className="mt-20 pb-20 flex items-center justify-center">
      <div className="bg-white border shadow-lg max-w-[600px] w-full p-6 rounded-xl relative text-center">
        {
          isError && (
            <p className="mt-4 text-center text-xs font-light text-red-600">
             {isError}
            </p>
          )
        }
        <Link to="/profileInfo">
          <img
            src={cross}
            className="absolute top-5 right-5 cursor-pointer w-4"
            loading="lazy"
            alt="Close"
          />
        </Link>
        <p className="text-2xl font-bold">Edit</p>
        <p className="text-sm text-gray-500">
          Update your information to help us provide the best service.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="relative w-52 h-52">
            <div className="relative w-52 h-52">
              {/* Conditionally display loader if the file is uploading */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full z-10">
                  <div className="w-8 h-8 border-4 border-t-4 border-gray-100 border-solid rounded-full animate-spin"></div>
                </div>
              )}

              <img
                src={preview || formData.profilePhoto || blankUser}
                loading="lazy"
                className="block border w-full h-full rounded-full object-cover object-top"
                alt="Profile"
              />

              {/* Input for file change */}
              <label className="w-8 border absolute right-5 bg-gray-100 border-gray-300 rounded-xl p-2 bottom-4 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <img src={edit} loading="lazy" alt="Edit" />
              </label>
            </div>
          </div>
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
            <button
              className="w-24 py-1.5 px-4 bg-gray-200 text-gray-500 rounded-xl"
              onClick={() => {}}
            >
              Cancel
            </button>
            <button
              className={`${
                isLoading ? "bg-gray-300" : "bg-green-600"
              } w-24 py-1.5 px-4 text-white rounded-xl`}
              disabled={isLoading}
              onClick={() => handleUpdateProfile(formData.profilePhoto)}
            >
              {updateMessage}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPopup;
