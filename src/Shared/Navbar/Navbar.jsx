import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../../../public/white.png";
import searchIcon from "../../../public/navbar/whiteSearch.png";
import Profile from "../../../public/navbar/profile.webp";
import profileArrow from "../../../public/navbar/profileArrow.png";
import cart from "../../../public/navbar/cart.png";
import "./navbar.css";
import { useProfile } from "../../ProfileProvider/ProfileProvider";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation(); 
  const { profile } = useProfile();
  console.log("Profile got",profile)

  const toggleSearch = () => {
    setShowSearch(true);
  };

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);


  const isAuthPage = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/register/otp",
  ].includes(location.pathname);

  // Don't render the Navbar if on the login page
  if (isAuthPage) return null;

  return (
    <div className="w-full fixed top-0 z-[99999] shadow-sm bg-white shadow-gray-300">
      <div className="2xl:max-w-[95rem] w-full xl:max-w-[80rem] px-6 mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <img
                className="rounded-lg bg-indigo-950 object"
                src={logo}
                width={60}
                loading="lazy"
                alt="Logo"
              />
              <p className=" ml-1 font-sans font-extrabold text-xl">ergul</p>
            </div>
          </div>

          <div className="hidden lg:flex text-[14px] items-center ">
            <div className="flex w-full flex-col px-10 gap-1 items-center">
              <p className="font-extrabold">Home</p>
            </div>
            <div className="flex w-full flex-col px-10 gap-1 items-center">
              <p className="font-light">Collections</p>
            </div>
            <div className="flex gap-1 flex-nowrap flex-col px-10 flex-1 w-full items-center">
              <p className="w-full text-nowrap font-light">About us</p>
            </div>
            <div className="flex gap-1 flex-nowrap flex-col px-10 flex-1 w-full items-center">
              <p className="w-full text-nowrap font-light">Contact us</p>
            </div>
          </div>

          <div className="flex items-center gap-8 relative">
            {/* Search Icon and Transition Input */}
            <div className="relative">
              {!showSearch && (
                <img
                  src={searchIcon}
                  loading="lazy"
                  className="block cursor-pointer"
                  width={20}
                  alt="Search"
                  onClick={toggleSearch}
                />
              )}
              {showSearch && (
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className={`absolute -top-[1.2rem] rounded-lg right-8 bg-gray-800  border-b font-light border-gray-600 outline-none px-3 h-10 transition-all duration-500 ease-in-out search-animation`}
                  autoFocus
                />
              )}
            </div>

            <img
              src={cart}
              loading="lazy"
              className="block cursor-pointer"
              width={24}
              alt="Cart"
            />
            <div className="relative cursor-pointer w-9 h-9">
              <Link to="/auth/login">
                <img
                  src={Profile}
                  loading="lazy"
                  className="block border w-full h-full rounded-full object-cover object-top"
                  width={34}
                  alt="Profile"
                />
              </Link>
              <div className="absolute -bottom-2 border rounded-full  p-1 z-[99999] -right-1 bg-white">
                <img src={profileArrow} className=" " width={10} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
