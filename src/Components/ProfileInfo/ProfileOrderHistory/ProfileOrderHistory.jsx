import purchased from "../../../../public/profile/purchased.png";
import threeDot from "../../../../public/profile/threeDot.png";
import loading from "../../../../public/profile/loading.png";
import canceled from "../../../../public/profile/canceled.png";
import arrow from "../../../../public/profile/leftArrow.png";

const ProfileOrderHistory = () => {
  return (
    <div className="w-full">
      <div className="flex mt-3 items-center justify-between w-full ">
        <p className="text-sm">
          <span className="font-bold text-gray-500">Total Purchased :</span> 12
        </p>
        <div className="bg-white cursor-pointer shadow-sm shadow-gray-300 border rounded-xl flex items-center gap-2 px-4 py-1.5"><p className="text-sm">Latest</p><img src={arrow} loading="lazy" className="w-3 -rotate-90" alt="" /></div>
      </div>
      <div className="flex relative items-start gap-6 pb-5 bg-white shadow-sm shadow-gray-300 border rounded-xl  mt-3">
        <div className="w-full">
          <div className="grid font-extrabold text-gray-100 bg-indigo-950 rounded-t-xl text-sm w-full grid-cols-12 p-4">
            <p className="col-span-3 w-full">Invoice NO.</p>
            <p className="col-span-4 w-full ">Item</p>
            <p className="col-span-2 w-full ">Status</p>
            <p className="col-span-2 w-full ">Price</p>
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>
                <span className="font-bold">INV</span>-24623
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
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img src={purchased} loading="lazy" className="w-4" alt="" />
              <p className="text-green-600">Purchased</p>
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
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>
                <span className="font-bold">INV</span>-24343
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
                    <div className="w-3 h-3 rounded-full bg-green-800"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img
                src={loading}
                loading="lazy"
                className="w-5 animate-spin"
                alt=""
              />
              <p className="text-yellow-600">On the way</p>
            </div>
            <div className="col-span-2 w-full flex items-center gap-3">
              <span className="font-bold">BDT</span> 1,600
            </div>
            <img
              src={threeDot}
              className="w-5 cursor-pointer hover:rotate-90 transition-all duration-500"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p className="line-through">
                <span className="font-bold">INV</span>-27643
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
                    <div className="w-3 h-3 rounded-full bg-cyan-800"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img src={canceled} loading="lazy" className="w-3 " alt="" />
              <p className="text-red-600">Canceled</p>
            </div>
            <div className="col-span-2 w-full flex items-center gap-3">
              <span className="font-bold">BDT</span> 2,600
            </div>
            <img
              src={threeDot}
              className="w-5 cursor-pointer hover:rotate-90 transition-all duration-500"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>
                <span className="font-bold">INV</span>-24623
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
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img src={purchased} loading="lazy" className="w-4" alt="" />
              <p className="text-green-600">Purchased</p>
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
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>
                <span className="font-bold">INV</span>-24343
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
                    <div className="w-3 h-3 rounded-full bg-green-800"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img
                src={loading}
                loading="lazy"
                className="w-5 animate-spin"
                alt=""
              />
              <p className="text-yellow-600">On the way</p>
            </div>
            <div className="col-span-2 w-full flex items-center gap-3">
              <span className="font-bold">BDT</span> 1,600
            </div>
            <img
              src={threeDot}
              className="w-5 cursor-pointer hover:rotate-90 transition-all duration-500"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p className="line-through">
                <span className="font-bold">INV</span>-27643
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
                    <div className="w-3 h-3 rounded-full bg-cyan-800"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img src={canceled} loading="lazy" className="w-3 " alt="" />
              <p className="text-red-600">Canceled</p>
            </div>
            <div className="col-span-2 w-full flex items-center gap-3">
              <span className="font-bold">BDT</span> 2,600
            </div>
            <img
              src={threeDot}
              className="w-5 cursor-pointer hover:rotate-90 transition-all duration-500"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>
                <span className="font-bold">INV</span>-24623
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
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img src={purchased} loading="lazy" className="w-4" alt="" />
              <p className="text-green-600">Purchased</p>
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
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p>
                <span className="font-bold">INV</span>-24343
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
                    <div className="w-3 h-3 rounded-full bg-green-800"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img
                src={loading}
                loading="lazy"
                className="w-5 animate-spin"
                alt=""
              />
              <p className="text-yellow-600">On the way</p>
            </div>
            <div className="col-span-2 w-full flex items-center gap-3">
              <span className="font-bold">BDT</span> 1,600
            </div>
            <img
              src={threeDot}
              className="w-5 cursor-pointer hover:rotate-90 transition-all duration-500"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full bg-gray-200 h-[1px]"></div>
          <div className="grid items-center text-gray-700 text-sm w-full grid-cols-12 p-4">
            <div className="col-span-3 w-full flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p className="line-through">
                <span className="font-bold">INV</span>-27643
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
                    <div className="w-3 h-3 rounded-full bg-cyan-800"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-1 w-full ">
              <img src={canceled} loading="lazy" className="w-3 " alt="" />
              <p className="text-red-600">Canceled</p>
            </div>
            <div className="col-span-2 w-full flex items-center gap-3">
              <span className="font-bold">BDT</span> 2,600
            </div>
            <img
              src={threeDot}
              className="w-5 cursor-pointer hover:rotate-90 transition-all duration-500"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex items-center mt-5 text-sm justify-end px-5 gap-4 w-full">
            <img
              src={arrow}
              className="w-5 cursor-pointer"
              loading="lazy"
              alt=""
            />
            <p className="bg-indigo-950 text-white p-2 rounded-full h-6 w-6 flex items-center justify-center cursor-pointer">
              1
            </p>
            <p className="bg-gray-300  p-2 rounded-full h-6 w-6 flex items-center justify-center cursor-pointer">
              2
            </p>
            <p className="bg-gray-300  p-2 rounded-full h-6 w-6 flex items-center justify-center cursor-pointer">
              3
            </p>
            <p className="bg-gray-300  p-2 rounded-full h-6 w-6 flex items-center justify-center cursor-pointer">
              4
            </p>
            <div className="w-1 h-1 rounded-full bg-indigo-950"></div>
            <div className="w-1 h-1 rounded-full bg-indigo-950"></div>
            <div className="w-1 h-1 rounded-full bg-indigo-950"></div>
            <p className="bg-gray-300  p-2 rounded-full h-6 w-6 flex items-center justify-center cursor-pointer">
              8
            </p>
            <img
              src={arrow}
              className="w-5 rotate-180 cursor-pointer"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOrderHistory