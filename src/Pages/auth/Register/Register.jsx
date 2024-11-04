import { useContext, useState } from "react";
import gif from "../../../../public/auth/register/register.gif";
import email from "../../../../public/auth/login/mail.png";
import user from "../../../../public/auth/register/user.png";
import edit from "../../../../public/auth/register/edit.png";
import cancel from "../../../../public/auth/register/cancel.png";
import check from "../../../../public/auth/register/check.png";
import cross from "../../../../public/auth/register/cross.png";
import select from "../../../../public/auth/register/select.png";
import pass from "../../../../public/auth/login/pass.png";
import google from "../../../../public/auth/login/google.png";
import facebook from "../../../../public/auth/login/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { local } from "../../../Api/LocalApi";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success messages

  const handleFacebook = () => {
    facebookSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => console.error(err));
  };
  const handleGoogle = async () => {
    try {
      const res = await googleSignIn();
      const user = res.user;

      const userData = {
        name: user.displayName, // Name from Google
        email: user.email, // Email from Google
        photo: user.photoURL, // Profile photo from Google
        password: "", // Password is not required for Google sign-in
      };

      // Call your register API with the user data
      const response = await axios.post(
        `${local}/auth/google/register`,
        userData
      );
      console.log(response)
      localStorage.setItem("token", response.data.token);
      sessionStorage.setItem("token", response.data.token);
      Cookies.set("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      // Handle the response
      if (response.status === 201) {
        setSuccessMessage("Account created successfully!");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      } else if (response.status === 429) {
        setErrorMessage("Too many requests. Please try again later.");
      }
    } catch (error) {
      // Handle the error response
      if (error.response) {
        if (error.response.status === 429) {
          setErrorMessage("Too many requests. Please try again later.");
        } else {
          setErrorMessage("Registration failed! Please try again.");
        }
      } else {
        setErrorMessage("Registration failed! Please try again.");
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setSelectedFile(file);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    let uploadedImageUrl = null;
    if (selectedFile) {
      uploadedImageUrl = await uploadImageToCloudinary(selectedFile);
    }

    const userData = {
      name,
      email: emailValue,
      password,
      photo: uploadedImageUrl,
    };

    try {
      const response = await axios.post(`${local}/auth/register`, userData);
      console.log(response);
      if (response.status === 201) {
       

        setSuccessMessage("Verifying...");
        
        setTimeout(() => {
          navigate("/auth/register/otp", {
            state: {
              maskedEmail: response.data.email,
              email:userData.email,
              otp: response.data.otp,
            },
          });
        }, 2000);

      } else if (response.status === 400) {
        setErrorMessage("Email already exists!");
      } else if (response.status === 429) {
        setErrorMessage("Too many requests. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Registration failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div className="relative">
      <img src={gif} loading="lazy" width={100} alt="" className="mx-auto" />
      <p className="text-center font-bold text-2xl">Register</p>
      <p className="text-center text-gray-400">
        Explore the world with the best fabrics
      </p>

      <div className="flex w-full mt-8 flex-col items-center gap-4">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Enter your Name"
                required
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
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Enter your email"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Enter your Password"
                required
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-10 pr-4 pl-14 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
                placeholder="Confirm your Password"
                required
              />
              <img
                src={pass}
                className="absolute top-2.5 left-2"
                width={18}
                alt=""
              />
              {passwordsMatch ? (
                <img
                  src={check}
                  className="absolute z-[9999] top-2.5 left-8"
                  width={18}
                  alt="Match"
                />
              ) : (
                <img
                  src={cross}
                  className="absolute z-[9999] top-2.5 left-8"
                  width={18}
                  alt="Not Match"
                />
              )}
            </div>
            <div
              className="w-full border border-gray-400 rounded-lg p-2.5 cursor-pointer flex items-center relative justify-start"
              onClick={() => document.getElementById("fileInput").click()}
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
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                      className="cursor-pointer"
                    />
                    <img
                      src={cancel}
                      className="mt-[2px] cursor-pointer"
                      width={18}
                      loading="lazy"
                      alt="Remove"
                      onClick={() => setPreview(null)}
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

            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />

            <button
              type="submit"
              className={`w-full text-sm text-white h-10 rounded-lg  ${
                loading
                  ? "bg-indigo-900"
                  : successMessage
                  ? "bg-green-600"
                  : errorMessage
                  ? "bg-red-600"
                  : "bg-indigo-900"
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 mx-auto border-gray-200 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                successMessage || errorMessage || "Create an Account"
              )}
            </button>
          </div>
          <div className="flex items-center w-full gap-1">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <p className="text-sm text-gray-400">OR</p>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex items-center gap-4 mt-4 justify-center w-full ">
            {" "}
            <div
              onClick={handleGoogle}
              className="rounded-full bg-gradient-to-r  shadow-sm shadow-white border justify-center cursor-pointer text-sm  flex items-center gap-2"
            >
              <img src={google} width={28} loading="lazy" alt="" />
            </div>
            <div
              onClick={handleFacebook}
              className="rounded-full bg-gradient-to-r  shadow-sm shadow-white border justify-center cursor-pointer text-sm  flex items-center gap-2 "
            >
              <img src={facebook} width={32} loading="lazy" alt="" />
            </div>
          </div>
        </form>

        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-indigo-900 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
