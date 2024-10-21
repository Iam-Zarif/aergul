import logo from "../../../public/aergul.webp"
import search from "../../../public/navbar/search.png"
import profile from "../../../public/navbar/profile.webp"
import cart from "../../../public/navbar/cart.png"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="w-full shadow-sm naav shadow-gray-900 ">
      <div className=" 2xl:max-w-[95rem] w-full xl:max-w-[80rem] px-6 mx-auto ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
           
              <img className="bg-white rounded-lg w-10 object" src={logo} width={50} loading="lazy" alt="" />
         
            <div className=" md:w-[25rem] relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="border w-full px-9 rounded-lg text-[15px] font-light border-gray-300 h-10 focus:outline-none"
                name=""
                id=""
              />
              <img
                src={search}
                width={15}
                className="absolute top-[13px] left-3"
                alt=""
              />
            </div>{" "}
          </div>

          <div className="flex  items-center  text-white">
            <div className="flex w-full flex-col py-6 px-8  gap-1 items-center">
              <p className="text-[15px]  font-extrabold">Home</p>
            </div>
            <div className="flex w-full flex-col py-6 px-8 gap-1 items-center">
              <p className="text-[15px] font-light ">Collections</p>
            </div>
            <div className="flex gap-1 flex-nowrap flex-col py-6 px-8 flex-1 w-full items-center">
              <p className="text-[15px] w-full text-nowrap font-light ">About us</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={cart}
              loading="lazy"
              className="block"
              width={20}
              alt=""
            />
            <img
              src={profile}
              loading="lazy"
              className="block border rounded-full object-cover object-top"
              width={34}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar