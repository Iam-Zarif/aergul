/* eslint-disable react/prop-types */

import settings from "../../../../public/navbar/settings.png";
import themes from "../../../../public/navbar/theme.png";
import feedback from "../../../../public/navbar/feedback.png";
import logout from "../../../../public/navbar/logout.png";
import axios from "axios";
import Cookies from "js-cookie";
import { local } from "../../../Api/LocalApi";
const NavProfileClick = ({ profile, blankUser }) => {

    const handleLogout = async () =>{
       try{
         const response  = await axios.post( `${local}/auth/logout`,{})
         console.log(response);
         localStorage.removeItem("token");
         sessionStorage.removeItem("token");
         Cookies.remove("token");
         window.location.reload();
       }
       catch(error){
         console.log(error)
       }
    }
  console.log(profile);
  return (
    <div className="bg-white rounded-xl md:h-auto h-screen  w-screen md:w-64 md:absolute right-0 top-14 shadow-sm shadow-indigo-200 z-[9999] pb-3">
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-100 duration-300 transition-all">
          <img
            src={profile?.profilePhoto || blankUser}
            loading="lazy"
            className="block border w-8 h-8 rounded-full object-cover object-top"
            width={34}
            alt="Profile"
          />
          <p className="text-sm">{profile?.name}</p>
        </div>
        <div className="h-[1px] w-full bg-indigo-200"></div>
        <div className="flex w-full mt-2  items-center gap-2 px-5 py-3 cursor-pointer hover:bg-gray-100 duration-300 transition-all">
          <img
            src={settings}
            loading="lazy"
            className="block  w-5 rounded-full object-cover object-top"
            width={34}
            alt="Profile"
          />
          <p className="text-sm">Settings & Privacy</p>
        </div>
        <div className="flex w-full   items-center gap-2 px-5 py-3 cursor-pointer hover:bg-gray-100 duration-300 transition-all">
          <img
            src={themes}
            loading="lazy"
            className="block  w-6 rounded-full object-cover object-top"
            width={34}
            alt="Profile"
          />
          <p className="text-sm">Display and Accesibility</p>
        </div>
        <div className="flex w-full   items-center gap-2 px-6 py-3 cursor-pointer hover:bg-gray-100 duration-300 transition-all">
          <img
            src={feedback}
            loading="lazy"
            className="block  w-5 object-cover object-top"
            width={34}
            alt="Profile"
          />
          <p className="text-sm">Give Feedback</p>
        </div>
        <div onClick={handleLogout} className="flex w-full  items-center gap-2 px-6 py-3 cursor-pointer hover:bg-gray-100 duration-300 transition-all">
          <img
            src={logout}
            loading="lazy"
            className="block  w-5 object-cover object-top"
            width={34}
            alt="Profile"
          />
          <p className="text-sm text-red-600">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavProfileClick