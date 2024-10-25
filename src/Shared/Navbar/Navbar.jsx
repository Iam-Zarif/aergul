import  { useState, useEffect, useRef } from "react";
import logo from "../../../public/white.png";
import searchIcon from "../../../public/navbar/whiteSearch.png";
import profile from "../../../public/navbar/profile.webp";
import cart from "../../../public/navbar/cart.png";
import "./navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setShowSearch(true);
  };

  // Close search input when clicking outside
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

  return (
    <div className="w-full shadow-sm naav shadow-gray-900">
      <div className="2xl:max-w-[95rem] w-full xl:max-w-[80rem] px-6 mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <img
                className="rounded-lg object"
                src={logo}
                width={75}
                loading="lazy"
                alt="Logo"
              />
              <p className="text-white -ml-2 font-sans font-extrabold text-xl">
                ergul
              </p>
            </div>
          </div>

          <div className=" hidden lg:flex text-[16px] items-center text-white">
            <div className="flex w-full flex-col  px-8 gap-1 items-center">
              <p className=" font-extrabold">Home</p>
            </div>
            <div className="flex w-full flex-col  px-8 gap-1 items-center">
              <p className=" font-light">Collections</p>
            </div>
            <div className="flex gap-1 flex-nowrap flex-col  px-8 flex-1 w-full items-center">
              <p className=" w-full text-nowrap font-light">
                About us
              </p>
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
                  width={19}
                  alt="Search"
                  onClick={toggleSearch}
                />
              )}
              {showSearch && (
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className={`absolute -top-[1.2rem] rounded-lg right-8 bg-gray-800 text-white border-b font-light border-gray-600 outline-none px-3 h-10 transition-all duration-500 ease-in-out search-animation`}
                  autoFocus
                />
              )}
            </div>

            <img
              src={cart}
              loading="lazy"
              className="block cursor-pointer"
              width={20}
              alt="Cart"
            />
            <img
              src={profile}
              loading="lazy"
              className="block border rounded-full object-cover object-top"
              width={34}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
