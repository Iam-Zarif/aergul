import { useState } from "react";
import gif from "../../../../public/auth/register/register.gif";
import email from "../../../../public/auth/login/mail.png";
import user from "../../../../public/auth/register/user.png";
import edit from "../../../../public/auth/register/edit.png";
import cancel from "../../../../public/auth/register/cancel.png";
import check from "../../../../public/auth/register/check.png";
import select from "../../../../public/auth/register/select.png";
import pass from "../../../../public/auth/login/pass.png";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [preview, setPreview] = useState(null);
const navigate = useNavigate();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      console.log("Selected file:", file);
    }
  };

  const handleDivClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleEditClick = () => {
    handleDivClick(); // Trigger the file input to select a new image
  };

  const handleRemoveClick = (event) => {
    event.stopPropagation(); // Prevents opening the file selector
    setPreview(null); // Clear the preview
  };

  return (
    <div className="relative">
     
      <img src={gif} loading="lazy" width={100} alt="" className="mx-auto" />
      <p className="text-center font-bold text-2xl">Register</p>
      <p className="text-center text-gray-400 ">
        Explore the world with best fabrics
      </p>

      <div className="flex w-full mt-8 flex-col items-center gap-4">
        <form className="w-full flex flex-col items-center ">
          <div className="flex w-full flex-col items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Enter your Name"
              />
              <img
                src={user}
                className="absolute top-2.5 left-2"
                width={17}
                alt=""
              />
            </div>
            <div className="relative w-full">
              <input
                type="email"
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Enter your email"
              />
              <img
                src={email}
                className="absolute top-2.5 left-2"
                width={18}
                alt=""
              />
            </div>
            <div className="relative w-full">
              <input
                type="password"
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Enter your Password"
              />
              <img
                src={pass}
                className="absolute top-2.5 left-2"
                width={18}
                alt=""
              />
            </div>
            <div className="relative w-full">
              <input
                type="password"
                className="w-full h-10 pr-4 pl-14 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Confirm your Password"
              />
              <img
                src={pass}
                className="absolute top-2.5 left-2"
                width={18}
                alt=""
              />
              <img
                src={check}
                className="absolute z-[9999] top-2.5 left-8"
                width={18}
                alt=""
              />
            </div>
            <div
              className="w-full border border-gray-400 rounded-lg p-2.5 cursor-pointer flex items-center relative justify-start"
              onClick={handleDivClick}
            >
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={select} width={20} loading="lazy" alt="" />
                  <p className="text-sm text-gray-400">Select photo</p>
                </div>
                {preview && (
                  <div className="flex items-center gap-4">
                    <img
                      src={edit}
                      width={17}
                      loading="lazy"
                      alt="Edit"
                      onClick={handleEditClick}
                      className="cursor-pointer"
                    />
                    <img
                      src={cancel}
                      className="mt-[2px] cursor-pointer"
                      width={18}
                      loading="lazy"
                      alt="Remove"
                      onClick={handleRemoveClick}
                    />
                  </div>
                )}
              </div>
            </div>

            {preview && (
              <div className="w-full border border-gray-400 py-4 rounded-lg flex justify-center ">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-16 h-16 rounded-full border object-cover"
                />
              </div>
            )}

            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            {/* Submit Button */}
            <button
              onClick={() => navigate("/auth/register/otp")}
              type="submit"
              className="w-full text-white bg-indigo-900 px-10 py-2.5 rounded-lg hover:bg-indigo-800"
            >
              Verify
            </button>
          </div>
        </form>

        <div>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/auth/login"
              className="font-bold text-blue-900 cursor-pointer underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
