


import photo from "../../../public/newitems/photo.jpg";
import photo1 from "../../../public/newitems/photo2.jpg";
import photo2 from "../../../public/newitems/photo3.jpg";
import photo3 from "../../../public/newitems/photo4.jpg";
import photo4 from "../../../public/newitems/sample.jpg";
import arrow from "../../../public/newitems/down-arrow.png";
const TopRated = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-2xl font-extrabold text-gray-500">
        Top Rated
      </p>

      <div>
        <div className="flex mt-8  lg:flex-row flex-col items-center justify-center mx-auto gap-6">
          <div className="card relative glass w-80">
            <div className="absolute -top-3 -right-3 h-10 w-14 z-[9999] flex items-center justify-center text-xs  font-bold rounded-full bg-green-700 shadow-md shadow-gray-500 text-white">
              5/5
            </div>
            <figure className="w-full relative">
              <img
                className="w-full h-96  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
                src={photo}
                loading="lazy"
                alt="item!"
              />
              <img
                className="w-full cursor-pointer rounded-t-xl h-96 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
                src={photo4}
                loading="lazy"
                alt="hover item!"
              />
            </figure>
            <div className="card-body rounded-b-xl arrival-bg">
              <h2 className="card-title">
                Pakistani Salwar suit <span className="text-indigo-800"></span>
              </h2>
              <div>
                <p className="text-2xl ">BDT 2,800</p>
                <p className="text-md text-gray-500 line-through">BDT 3,400</p>
                <p className="text-gray-500">Quantity : 12</p>
              </div>
              <div className="card-actions justify-end">
                <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                  Shop now!
                </button>
              </div>
            </div>
          </div>
          <div className="card relative glass w-80">
            <div className="absolute -top-3 -right-3 h-10 w-14 z-[9999] flex items-center justify-center text-xs  font-bold rounded-full bg-green-700 shadow-md shadow-gray-500 text-white">
              5/5
            </div>
            <figure className="w-full relative">
              <img
                className="w-full h-96  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
                src={photo1}
                loading="lazy"
                alt="item!"
              />
              <img
                className="w-full cursor-pointer rounded-t-xl h-96 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
                src={photo4}
                loading="lazy"
                alt="hover item!"
              />
            </figure>
            <div className="card-body rounded-b-xl arrival-bg">
              <h2 className="card-title">
                Pakistani Salwar suit <span className="text-indigo-800"></span>
              </h2>
              <div>
                <p className="text-2xl ">BDT 2,800</p>
                <p className="text-md text-gray-500 line-through">BDT 3,400</p>
                <p className="text-gray-500">Quantity : 12</p>
              </div>
              <div className="card-actions justify-end">
                <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                  Shop now!
                </button>
              </div>
            </div>
          </div>
          <div className="card relative glass w-80">
            <div className="absolute -top-3 -right-3 h-10 w-14 z-[9999] flex items-center justify-center text-xs  font-bold rounded-full bg-green-700 shadow-md shadow-gray-500 text-white">
              4.8/5
            </div>
            <figure className="w-full relative">
              <img
                className="w-full h-96  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
                src={photo3}
                loading="lazy"
                alt="item!"
              />
              <img
                className="w-full cursor-pointer rounded-t-xl h-96 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
                src={photo4}
                loading="lazy"
                alt="hover item!"
              />
            </figure>
            <div className="card-body rounded-b-xl arrival-bg">
              <h2 className="card-title">
                Pakistani Salwar suit <span className="text-indigo-800"></span>
              </h2>
              <div>
                <p className="text-2xl ">BDT 2,800</p>
                <p className="text-md text-gray-500 line-through">BDT 3,400</p>
                <p className="text-gray-500">Quantity : 12</p>
              </div>
              <div className="card-actions justify-end">
                <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                  Shop now!
                </button>
              </div>
            </div>
          </div>
          <div className="card relative glass w-80">
            <div className="absolute -top-3 -right-3 h-10 w-14 z-[9999] flex items-center justify-center text-xs  font-bold rounded-full bg-green-700 shadow-md shadow-gray-500 text-white">
              5/5
            </div>
            <figure className="w-full relative">
              <img
                className="w-full h-96  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
                src={photo2}
                loading="lazy"
                alt="item!"
              />
              <img
                className="w-full cursor-pointer rounded-t-xl h-96 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
                src={photo4}
                loading="lazy"
                alt="hover item!"
              />
            </figure>
            <div className="card-body rounded-b-xl arrival-bg">
              <h2 className="card-title">
                Pakistani Salwar suit <span className="text-indigo-800"></span>
              </h2>
              <div>
                <p className="text-2xl ">BDT 2,800</p>
                <p className="text-md text-gray-500 line-through">BDT 3,400</p>
                <p className="text-gray-500">Quantity : 12</p>
              </div>
              <div className="card-actions justify-end">
                <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                  Shop now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center mx-auto mt-10 bg-gray-200 px-6 py-2.5 text-indigo-950 rounded-lg gap-2">
        <span className="font-bold opacity-70">Explore more</span>
        <img
          src={arrow}
          loading="lazy"
          className="animate-bounce"
          width={14}
          alt=""
        />
      </button>
    </div>
  );
};

export default TopRated;



// TopRated