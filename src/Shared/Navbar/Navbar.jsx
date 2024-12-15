import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../../../public/white.png";
import searchIcon from "../../../public/navbar/whiteSearch.png";
import blankUser from "../../../public/navbar/blackUser.png";
import profileArrow from "../../../public/navbar/profileArrow.png";
import cart from "../../../public/navbar/cart.png";
import "./navbar.css";
import { useProfile } from "../../ProfileProvider/ProfileProvider";
import NavProfileClick from "../Popups/NavProfileClick/NavProfileClick";
import axios from "axios";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);
  const [cartCount, setcartCount] = useState(0);
  const [dropDown, setDropDown] = useState(false);
  const { profile } = useProfile();
  console.log(profile);

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

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

  const location = useLocation(); 
  const isAuthPage = [
    "/auth/login",
    "/contact",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/register/otp",
    "/auth/forgotPass/emailRecap",
    "/auth/forgotPass/verify-otp",
    "/auth/forgotPass/confirmPass",
  ].includes(location.pathname);
  if (isAuthPage) return null;

  useEffect(() => {
    const fetchProfileCart = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        if (!token) {
          console.error("Token not found in localStorage.");
          return;
        }

        const response = await axios.get(
          "http://www.localhost:3000/cart/profile-cart",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in the Authorization header
            },
          }
        );

        console.log("Profile cart data:", response.data); // Log the response data
        setcartCount(response.data.cart.length);
      } catch (error) {
        console.error(
          "Error fetching profile cart:",
          error.response?.data || error.message
        );
      }
    };

    fetchProfileCart();
  }, []);

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
            <Link
              to="/"
              className="flex bg-gray-100 py-5 w-full flex-col px-10 gap-1 items-center"
            >
              <p className="font-extrabold">Home</p>
            </Link>
            <Link
              to="/collections"
              className="flex py-5 w-full flex-col px-10 gap-1 items-center"
            >
              <p className="font-light">Collections</p>
            </Link>
            <Link
              to="/about"
              className="flex gap-1 flex-nowrap py-5 flex-col px-10 flex-1 w-full items-center"
            >
              <p className="w-full text-nowrap font-light">About us</p>
            </Link>
            <Link
              to="/contact"
              className="flex gap-1 flex-nowrap py-5 flex-col px-10 flex-1 w-full items-center"
            >
              <p className="w-full text-nowrap font-light">Contact us</p>
            </Link>
          </div>

          <div className="flex items-center gap-8 relative">
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
                  className={`absolute -top-[1.2rem] rounded-lg right-8 bg-gray-100  border font-light border-indigo-200 outline-none px-3 h-10 transition-all duration-500 ease-in-out search-animation`}
                  autoFocus
                />
              )}
            </div>

            <div className="relative">
              <img
                src={cart}
                loading="lazy"
                className="block cursor-pointer"
                width={24}
                alt="Cart"
              />
              {cartCount > 0 && (
                <>
                  {" "}
                  <p className="absolute -top-2 -right-2 text-sm bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </p>
                </>
              )}
            </div>
            <div className="relative cursor-pointer w-9 h-9">
              <div onClick={handleDropdown}>
                <img
                  src={profile?.profilePhoto || blankUser}
                  loading="lazy"
                  className="block border w-9 h-9 rounded-full object-cover object-top"
                  width={34}
                  alt="Profile"
                />
                <div className="absolute -bottom-2 border rounded-full  p-1 z-[99999] -right-1 bg-white">
                  <img src={profileArrow} className=" " width={10} alt="" />
                </div>
              </div>
              {dropDown && (
                <>
                  <NavProfileClick
                    profile={profile}
                    blankUser={blankUser}
                    handleDropdown={handleDropdown}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
