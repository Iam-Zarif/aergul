import threeDot from "../../../../public/profile/threeDot.png";


const ProfileCart = () => {
  return (
    <div>
      <div className="flex mt-3 items-center justify-between w-full ">
        <p className="text-sm">
          <span className="font-bold text-gray-500">Total Items :</span> 12
        </p>
      </div>
      <div className="flex relative items-start gap-6 pb-5 bg-white shadow-sm shadow-gray-300 border rounded-xl  mt-3">
        <div className="w-full">
          <div className="grid font-extrabold text-gray-100 bg-indigo-950 rounded-t-xl text-sm w-full grid-cols-12 p-4">
            <p className="col-span-3 w-full">Item ID</p>
            <p className="col-span-4 w-full ">Item</p>
            <p className="col-span-2 w-full ">Quantity</p>
            <p className="col-span-2 w-full ">Price</p>
          </div>
        <div className="w-full bg-gray-200 h-[1px]"></div>
        <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
          <div className="col-span-3 w-full flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <p>
              <span className="font-bold">ID</span>-24623
            </p>
          </div>
          <div className="col-span-4 w-full ">
            <div className="flex items-start gap-2">
              <img
                src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
                className="w-12 h-12 rounded-lg object-cover"
                alt=""
              />
              <div className="flex flex-col gap-1 items-start">
                {" "}
                <p className="font-bold">Pakistani Salwar suit</p>
                <div className="flex items-center gap-1">
                  <p className="font-bold"> Color:</p>{" "}
                  <div className="w-3 h-3 rounded-full bg-indigo-800"></div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-center mx-auto gap-1 w-full ">
            <p className="text-gray-600 text-center">24</p>
          </div>
          <div className="col-span-2 w-full flex items-center gap-3">
            <span className="font-bold">BDT</span> 1,200
          </div>
          <img
            src={threeDot}
            className="w-5 cursor-pointer hover:rotate-90 transition-all duration-500"
            loading="lazy"
            alt=""
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCart;
