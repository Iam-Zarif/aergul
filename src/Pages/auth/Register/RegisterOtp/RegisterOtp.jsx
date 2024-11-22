import { useEffect, useRef, useState } from "react";
import axios from "axios";
import back from "../../../../../public/common/back.png";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { local } from "../../../../Api/LocalApi";

const RegisterOtp = () => {
  const inputs = useRef([]);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { email, otp, maskedEmail } = location.state || {};
  console.log("email:", email, "otp:", otp, "maskedEmail:", maskedEmail);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsTimeOut(true);
    }
  }, [timer]);

  const renderOtpInputs = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <input
        key={index}
        type="text"
        className="h-14 w-14 focus:outline-none px-2 text-3xl text-center rounded-xl border border-gray-400 mx-1"
        maxLength={1}
        onChange={(e) => handleChange(e, index)}
        onFocus={(e) => e.target.select()}
        ref={(el) => (inputs.current[index] = el)}
      />
    ));
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = enteredOtp.split("");
      newOtp[index] = value;
      setEnteredOtp(newOtp.join(""));
      if (index < 4) {
        inputs.current[index + 1].focus();
      }
    } else if (value === "") {
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const onVerify = async () => {
    setSuccessMessage("");
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${local}/auth/register-verify-otp`,
        {
          email: email,
          otp: enteredOtp,
        }
      );

      localStorage.setItem("token", response.data.token);
      sessionStorage.setItem("token", response.data.token);
      Cookies.set("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      console.log("Verification Response:", response.data);

      if (response.status === 201) {
        setSuccessMessage("Account Created Successfully!");
        setTimeout(() => {
          window.location.href = "/"; // Redirect to home
        }, 3000);
      }
    } catch (error) {
      console.error(
        "Verification Error:",
        error.response?.data || error.message
      );
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage("Invalid OTP! Please try again.");
        } else if (error.response.status === 429) {
          setErrorMessage("Too many requests. Please try again later.");
        } else {
          setErrorMessage("Verification failed! Please try again.");
        }
      } else {
        setErrorMessage("Verification failed! Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex relative flex-col items-center gap-8">
      <Link to="/auth/register">
        <img
          src={back}
          width={20}
          loading="lazy"
          className="absolute cursor-pointer top-0 left-0"
          alt=""
        />
      </Link>
      <p className="text-center font-bold text-2xl">Enter your OTP</p>
      <p className="text-sm text-center text-gray-500">
        Enter OTP sent to {maskedEmail}
      </p>
      <div className="flex flex-col items-end gap-1">
        <div className="flex w-full justify-center">{renderOtpInputs()}</div>
        <p
          className={`text-sm font-light ${
            isTimeOut ? "text-red-700" : "text-gray-500"
          }`}
        >
          {formatTime(timer)}
        </p>
      </div>
      <p className="text-xs font-light text-center text-gray-500">
        Didn&apos;t receive OTP? <span className="text-indigo-600">resend</span>
      </p>
      <button
        onClick={onVerify}
        className={`text-sm w-full py-2 rounded-lg ${
          isLoading
            ? "bg-gray-600"
            : successMessage
            ? "bg-green-700"
            : errorMessage
            ? "bg-red-700"
            : "bg-indigo-900"
        } text-white`}
        disabled={isLoading}
      >
        {isLoading
          ? "Verifying..."
          : successMessage || errorMessage || "Verify"}
      </button>

    </div>
  );
};

export default RegisterOtp;
