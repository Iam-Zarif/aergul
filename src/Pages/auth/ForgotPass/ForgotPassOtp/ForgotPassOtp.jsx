import { useEffect, useRef, useState } from "react";
import back from "../../../../../public/common/back.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ForgotPassOtp = () => {
  const inputs = useRef([]);
  const [timer, setTimer] = useState(120);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { email, otp, maskedEmail } = location.state || {};

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsTimeOut(true);
    }
  }, [timer]);

  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => {
        navigate("/auth/forgotPass/confirmPass", {
          state: { email, otp },
        });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVerified, navigate, email, otp]);

  const renderOtpInputs = () =>
    Array.from({ length: 5 }, (_, index) => (
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

  const handleVerify = () => {
    const enteredOtpNumber = Number(enteredOtp);
    if (enteredOtpNumber === Number(otp)) {
      setIsVerified(true);
    } else {
      setEnteredOtp("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && enteredOtp.length === 5) {
      handleVerify();
    }
  };

  return (
    <div className="flex relative flex-col items-center gap-8">
      <Link to="/auth/forgotPass/emailRecap">
        <img
          src={back}
          width={20}
          loading="lazy"
          className="absolute cursor-pointer top-0 left-0"
          alt="back"
        />
      </Link>
      <p className="text-center font-bold text-2xl">Enter your OTP</p>
      <p className="text-sm text-center text-gray-500">
        Enter the OTP sent to {maskedEmail}
      </p>
      <div className="flex flex-col items-end gap-1" onKeyDown={handleKeyDown}>
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
        onClick={handleVerify}
        className={`text-sm w-full py-2 rounded-lg ${
          enteredOtp.length === 5 && enteredOtp !== otp.toString()
            ? "bg-red-700"
            : isVerified
            ? "bg-green-700"
            : "bg-indigo-900"
        } text-white`}
      >
        {isVerified
          ? "OTP verified successfully!"
          : enteredOtp.length === 5 && enteredOtp !== otp.toString()
          ? "Invalid OTP. Please try again."
          : "Verify"}
      </button>
    </div>
  );
};

export default ForgotPassOtp;
