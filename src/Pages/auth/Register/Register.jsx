


import gif from "../../../../public/auth/register/register.gif";
import email from "../../../../public/auth/login/mail.png";
import user from "../../../../public/auth/register/user.png";
import check from "../../../../public/auth/register/check.png";
import select from "../../../../public/auth/register/select.png";
import pass from "../../../../public/auth/login/pass.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
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
                className="w-full h-10 px-9 placeholder:text-sm font-light rounded-lg focus:outline-none  border border-gray-500"
                name=""
                id=""
                placeholder="Enter you Name"
              />
              <img
                src={user}
                className="absolute top-2.5 left-2"
                width={17}
                alt=""
              />
            </div>{" "}
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
            <div className="relative w-full">
              <input
                type="password"
                className="w-full h-10 pr-4 pl-14 placeholder:text-sm font-light rounded-lg focus:outline-none border border-gray-500"
                name=""
                id=""
                placeholder="Confirm you Password"
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
            </div>{" "}
            <div className="w-full border border-gray-500 rounded-lg p-2.5 cursor-pointer flex items-center justify-start">
<div className="flex  items-center gap-2">
  <img src={select} width={20} loading="lazy" alt="" />
  <p className="text-sm text-gray-400">Select photo</p>
</div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-indigo-900 px-10 py-2.5  rounded-lg hover:bg-indigo-800"
            >
              Verify
            </button>{" "}
          </div>
         
        </form>

        <div>
          <p className="text-sm">
            Don&apos;t have any account?{" "}
            <Link
              to="/auth/login"
              className="font-bold text-blue-900 cursor-pointer underline"
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


// Register

// name
// email
// password
// confirm password
// photo
// recaptcha