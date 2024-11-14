import photo from "../../../public/contact/contact.jpg"
import attach from "../../../public/contact/attach.png"
import youtube from "../../../public/contact/youtube.png"
import facebook from "../../../public/contact/facebook.png"
import insta from "../../../public/contact/insta.png"
import { useProfile } from "../../ProfileProvider/ProfileProvider"
import cross from "../../../public/profile/cross.png";
import { useNavigate } from "react-router-dom"

const Contact = () => {
    const {profile}= useProfile();
    const navogate = useNavigate()
  return (
    <div className="h-full bg-indigo-50 relative w-full">
      <img onClick={() => navogate(-1)} src={cross} className="absolute cursor-pointer top-8 right-8 w-5" loading="lazy" alt="" />
      <div className="grid grid-cols-5 w-full items-center">
        <img
          src={photo}
          loading="lazy"
          className="w-full h-full lg:h-screen object-cover col-span-2"
          alt=""
        />
        <div className="col-span-3">
          <p className="text-3xl font-bold text-gray-500 text-center">
            Contact Us
          </p>
          <p className="text-center mt-1 font-light text-sm text-gray-600">
            We’re Here to Help, Reach Out Anytime
          </p>
          <div className="mt-4 w-36 mx-auto h-[1px] bg-gray-300"></div>
          <div className="mt-6 flex flex-col justify-center w-full items-center gap-4">
            <div className="flex w-[40%] mx-auto flex-col items-start gap-1">
              <p className="text-sm font-light text-gray-600">Name</p>
              <p className="bg-white font-bold text-gray-400 shadow-sm shadow-gray-200 rounded-lg w-full p-2">
                {profile?.name}
              </p>
            </div>
            <div className="flex w-[40%] mx-auto flex-col items-start gap-1">
              <p className="text-sm font-light text-gray-600">Email</p>
              <p className="bg-white font-bold text-gray-400 shadow-sm shadow-gray-200 rounded-lg w-full p-2">
                {profile?.email}
              </p>
            </div>
            <div className="flex w-[40%] mx-auto flex-col items-start gap-1">
              <p className="text-sm font-light text-gray-600">Phone</p>
              <p className="bg-white font-bold text-gray-400 shadow-sm shadow-gray-200 rounded-lg w-full p-2">
                {profile?.phone}
              </p>
            </div>
            <div className="flex w-[40%] mx-auto flex-col items-start gap-1">
              <p className="text-sm font-light text-gray-600">
                Contact Message
              </p>
              <textarea
                name=""
                
                className="w-full resize-none h-36 bg-white font-bold text-gray-400 shadow-sm shadow-gray-200 rounded-lg p-2 focus:outline-none"
                id=""
              ></textarea>
            </div>
            <div className="flex w-[40%] mx-auto flex-col items-start gap-1">
              <p className="text-sm font-light text-gray-600">
                Attachment(optional)
              </p>
              <p className="bg-white w-full flex items-center justify-center font-bold text-gray-400 rounded-lg  p-2">
                <img src={attach} className="w-3" loading="lazy" alt="" />
              </p>
            </div>
          </div>
          <div className="mt-4 w-36 mx-auto h-[1px] bg-gray-300"></div>
          <div className="mt-6">
            <p className="text-xl font-bold text-gray-500 text-center">
             Find us on
            </p>
            <div className="mt-6 flex items-center justify-center gap-5">
                <img src={facebook} loading="lazy" className="w-8" alt="" />
                <img src={insta} loading="lazy" className="w-8" alt="" />
                <img src={youtube} loading="lazy" className="w-8" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact