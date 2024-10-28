import { useEffect, useRef, useState } from "react";

const RegisterOtp = () => {
  const inputs = useRef([]);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [isTimeOut, setIsTimeOut] = useState(false);

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

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-center font-bold text-2xl">Enter your OTP</p>
      <p className="text-sm text-center text-gray-500">
        Enter OTP sent to abc*******.com
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
      <button className="text-sm w-full bg-indigo-900 text-white py-2 rounded-lg">
        Verify
      </button>
    </div>
  );
};

export default RegisterOtp;
