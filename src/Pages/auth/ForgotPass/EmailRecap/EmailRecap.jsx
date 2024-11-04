import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Email from "../../../../../public/auth/login/mail.png"; // Email icon
import { local } from "../../../../Api/LocalApi";
import back from "../../../../../public/common/back.png";

const EmailRecap = () => {
  const [emailValue, setEmailValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(`${local}/auth/forgotPass/emailFind`, {
        email: emailValue,
      });
      console.log(response);
      if (response.status === 200) {
        setSuccessMessage("OTP sent");
        setTimeout(() => {
          navigate("/auth/forgotPass/verify-otp", {
            state: {
              maskedEmail: response.data.email,
              email: emailValue,
              otp: response.data.otp,
            },
          });
        }, 2000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <Link to="/auth/login">
        <img
          src={back}
          width={20}
          loading="lazy"
          className="absolute cursor-pointer top-0 left-0"
          alt="back"
        />
      </Link>
      <img src="" loading="lazy" width={100} alt="" className="mx-auto" />
      <p className="text-center font-bold text-2xl">Forgot Password</p>
      <p className="text-center text-gray-400">
        Please enter your email to receive the OTP
      </p>

      <form className="mt-8 flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="relative w-full mb-4">
          <input
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
            placeholder="Enter your email"
            required
          />
          <img
            src={Email}
            className="absolute top-2.5 left-2"
            width={18}
            alt=""
          />
        </div>

        <button
          type="submit"
          className={`w-full text-white px-10 py-2.5 rounded-lg ${
            loading
              ? "opacity-50v bg-indigo-900 cursor-not-allowed"
              : successMessage
              ? "bg-green-700 hover:bg-green-600"
              : errorMessage
              ? "bg-red-700 hover:bg-red-600"
              : "bg-indigo-900 hover:bg-indigo-800"
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-2  mx-auto border-gray-200 border-t-transparent rounded-full animate-spin"></div>
          ) : successMessage ? (
            successMessage
          ) : errorMessage ? (
            errorMessage
          ) : (
            "Send OTP"
          )}
        </button>
      </form>
    </div>
  );
};

export default EmailRecap;
