
import gif from "../../../../public/auth/login/login.gif";
import email from "../../../../public/auth/login/mail.png";
import pass from "../../../../public/auth/login/pass.png";
import google from "../../../../public/auth/login/google.png";
import facebook from "../../../../public/auth/login/facebook.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <img src={gif} loading="lazy" width={100} alt="" className="mx-auto" />
      <p className="text-center font-bold text-2xl">Login</p>
      <p className="text-center text-gray-400 ">
        Dive into the world with best fabrics
      </p>

      <div className="flex w-full mt-8 flex-col items-center gap-4">
        <form className="w-full flex flex-col items-center ">
          <div className="flex w-full flex-col items-center gap-3">
            <div className="relative w-full">
              <input
                type="email"
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-500"
                name=""
                id=""
                placeholder="Enter you email"
              />
              <img
                src={email}
                className="absolute top-2.5 left-2"
                width={18}
                alt=""
              />
            </div>{" "}
            <div className="w-full">
              <div className="relative w-full">
                <input
                  type="password"
                  className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-500"
                  name=""
                  id=""
                  placeholder="Enter you Password"
                />
                <img
                  src={pass}
                  className="absolute top-2.5 left-2"
                  width={18}
                  alt=""
                />
              </div>{" "}
              <Link
                to="/forgot-password"
                className="text-sm mt-1 ml-1 font-light hover:underline transition-all duration-500"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-indigo-900 px-10 py-2.5  rounded-lg hover:bg-indigo-800"
            >
              Login
            </button>{" "}
          </div>
          <div className="flex mt-1 justify-start mr-auto items-center gap-2">
            <input type="checkbox" name="" id="" />
            <p className="text-sm">Remmeber me</p>
          </div>
        </form>
        <div className=" flex items-center w-full gap-1">
          <div className="w-full h-[1px] bg-gray-400"></div>
          <p className="text-sm text-gray-400">OR</p>
          <div className="w-full h-[1px] bg-gray-400"></div>
        </div>
        <div className="rounded-full border justify-center cursor-pointer text-sm border-gray-400 px-4 py-1.5 flex items-center gap-2 w-full">
          <img src={google} width={16} loading="lazy" alt="" />
          <p>Login with Google</p>
        </div>
        <div className="rounded-full border justify-center cursor-pointer text-sm border-gray-400 px-4 py-1.5 flex items-center gap-2 w-full">
          <img src={facebook} width={18} loading="lazy" alt="" />
          <p>Login with facebook</p>
        </div>
        <div>
          <p className="text-sm">
            Don&apos;t have any account?{" "}
            <Link
              to="/auth/register"
              className="font-bold text-blue-900 cursor-pointer underline"
            >
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
