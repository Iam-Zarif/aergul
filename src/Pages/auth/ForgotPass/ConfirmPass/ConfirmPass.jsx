import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../../../../../public/common/back.png";
import { local } from "../../../../Api/LocalApi";

const ConfirmPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { email, otp } = location.state || {};

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${local}/auth/forgotPass/resetPassword`,
        {
          email,
          otp,
          newPassword: password,
        }
      );

      if (response.status === 200) {
        setSuccess("Password reset successfully.");
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      } else {
        setError(response.data.message || "Failed to reset password.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <Link to="/auth/forgotPass/verify-otp">
        <img
          src={back}
          width={20}
          loading="lazy"
          className="absolute cursor-pointer top-0 left-0"
          alt="back"
        />
      </Link>

      <h2 className="text-2xl font-bold text-center mb-6">
        Confirm Your Password
      </h2>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-medium mb-2">
          New Password
        </label>
        <input
          type="password"
          className="w-full h-10 px-3 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 text-sm font-medium mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          className="w-full h-10 px-3 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-400"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-2 rounded-lg text-white font-medium shadow-md transition duration-300 ${
          loading
            ? "opacity-50 bg-indigo-900 cursor-not-allowed"
            : success
            ? "bg-green-700 hover:bg-green-600"
            : error
            ? "bg-red-700 hover:bg-red-600"
            : "bg-indigo-900 hover:bg-indigo-800"
        }`}
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-gray-200 border-t-transparent rounded-full animate-spin mx-auto"></div>
        ) : success ? (
          success
        ) : error ? (
          error
        ) : (
          "Confirm Password"
        )}
      </button>
    </div>
  );
};

export default ConfirmPass;
