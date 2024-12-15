import { useContext, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import gif from "../../../../public/auth/login/login.gif";
import email from "../../../../public/auth/login/mail.png";
import pass from "../../../../public/auth/login/pass.png";
import google from "../../../../public/auth/login/google.png";
import facebook from "../../../../public/auth/login/facebook.png";
import Cookies from "js-cookie";
import { local } from "../../../Api/LocalApi";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { googleSignIn, facebookSignIn } = useContext(AuthContext);

  const handleFacebook = () => {
    facebookSignIn()
      // .then((res) => {
      //   setTimeout(() => {
      //     navigate("/");
      //   }, 2000);
      // })
      // .catch((err) => {});
  };

  const handleGoogle = async () => {
    try {
      const res = await googleSignIn();
      const userData = {
        email: res.user.email,
        password: "",
      };
      const response = await axios.post(`${local}/auth/google/login`, userData);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        sessionStorage.setItem("token", response.data.token);
        Cookies.set("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        setSuccessMessage("Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrorMessage("Email not found");
        } else {
          setErrorMessage(error.response.data.message || "Login failed");
        }
      }
    }
  };

 const handleLogin = async (e) => {
   e.preventDefault();
   setLoading(true);
   setErrorMessage("");
   setSuccessMessage("");
   try {
     const response = await axios.post(`${local}/auth/login`, {
       email: emailValue,
       password: passwordValue,
       rememberMe: rememberMe, // Include rememberMe here
     }, {
       withCredentials: true,
     });
  
     console.log(response)
     if (response.status === 201) {
       localStorage.setItem("token", response.data.token);
       sessionStorage.setItem("token", response.data.token);
       Cookies.set("token", response.data.token, {
         expires: rememberMe ? 7 : undefined,
       }); // Set expiration based on rememberMe
       axios.defaults.headers.common[
         "Authorization"
       ] = `Bearer ${response.data.token}`;
       setSuccessMessage("Redirecting...");
       setTimeout(() => {
      window.location.href = "/";
       }, 2000);
     } else {
       setErrorMessage(response.data.message || "Login failed");
     }
   } catch (error) {
     setErrorMessage(error.response?.data?.message || "Server error");
   } finally {
     setLoading(false);
   }
 };


  return (
    <div>
      <img src={gif} loading="lazy" width={100} alt="" className="mx-auto" />
      <p className="text-center font-bold text-2xl">Login</p>
      <p className="text-center text-gray-400">
        Dive into the world with best fabrics
      </p>
      <div className="flex w-full mt-8 flex-col items-center gap-4">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleLogin}
        >
          <div className="flex w-full flex-col items-center gap-3">
            <div className="relative w-full">
              <input
                type="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
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
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
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
            <Link
              to="/auth/forgotPass/emailRecap"
              className="text-sm mt-1 ml-1 font-light hover:underline transition-all duration-500"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className={`w-full text-white text-sm ${
                errorMessage
                  ? "bg-red-600 hover:bg-red-500"
                  : successMessage
                  ? "bg-green-700 hover:bg-green-600"
                  : "bg-indigo-900 hover:bg-indigo-800"
              } px-10 py-2.5 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 mx-auto border-gray-200 border-t-transparent rounded-full animate-spin"></div>
              ) : errorMessage ? (
                "Error: " + errorMessage
              ) : successMessage ? (
                successMessage
              ) : (
                "Login"
              )}
            </button>
          </div>
          <div className="flex mt-1 ml-1 justify-start mr-auto items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p className="text-sm">Remember me</p>
          </div>
        </form>
        <div className="flex items-center w-full gap-1">
          <div className="w-full h-[1px] bg-gray-400"></div>
          <p className="text-sm text-gray-400">OR</p>
          <div className="w-full h-[1px] bg-gray-400"></div>
        </div>
        <div className="flex items-center gap-4 justify-center w-full">
          <div
            onClick={handleGoogle}
            className="rounded-full bg-gradient-to-r shadow-sm shadow-white border justify-center cursor-pointer text-sm flex items-center gap-2"
          >
            <img src={google} width={28} loading="lazy" alt="" />
          </div>
          <div
            onClick={handleFacebook}
            className="rounded-full bg-gradient-to-r shadow-sm shadow-white border justify-center cursor-pointer text-sm flex items-center gap-2"
          >
            <img src={facebook} width={32} loading="lazy" alt="" />
          </div>
        </div>
        <div>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/auth/register"
              className="font-bold text-blue-900 cursor-pointer underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
