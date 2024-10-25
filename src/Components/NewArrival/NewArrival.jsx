import photo from "../../../public/newitems/photo.jpg"
import photo1 from "../../../public/newitems/photo2.jpg"
import photo2 from "../../../public/newitems/photo3.jpg"
import photo3 from "../../../public/newitems/photo4.jpg"
import photo4 from "../../../public/newitems/sample.jpg"
import arrow from "../../../public/newitems/down-arrow.png"
import "./newArrivals.css"

const NewArrival = () => {
  return (
    <div className="mt-16 ">
      <div>
        <p className="text-center text-2xl font-extrabold text-gray-500">
          New Arrival
        </p>
      </div>
      <div className="flex  mt-8 items-center justify-center mx-auto gap-6">
        <div className="card relative glass w-80">
          <div className="absolute -top-3 -right-3 h-10 w-10 z-[9999] flex items-center justify-center text-xs animate-pulse font-bold rounded-full bg-green-700 text-white">
            -15%
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
            <p className="font-light text-gray-500 ">BDT 3,4000</p>
            <div className="card-actions justify-end">
              <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                Shop now!
              </button>
            </div>
          </div>
        </div>
        <div className="card relative glass w-80">
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
            <p className="font-light text-gray-500 ">BDT 3,4000</p>
            <div className="card-actions justify-end">
              <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                Shop now!
              </button>
            </div>
          </div>
        </div>
        <div className="card relative glass w-80">
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
            <p className="font-light text-gray-500 ">BDT 3,4000</p>
            <div className="card-actions justify-end">
              <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                Shop now!
              </button>
            </div>
          </div>
        </div>
        <div className="card relative glass w-80">
          <div className="absolute -top-3 -right-3 h-10 w-10 z-[9999] flex items-center justify-center text-xs animate-pulse font-bold rounded-full bg-green-700 text-white">
            -10%
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
            <p className="font-light text-gray-500 ">BDT 3,4000</p>
            <div className="card-actions justify-end">
              <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
                Shop now!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 justify-center w-ful] px-5 mx-auto flex items-center gap-6 w-full">
        <div className="card w-full card-side bg-base-100 shadow-xl h-[35rem] ">
          <figure>
            <img
              src={photo2}
              alt="Movie"
              loading="lazy"
              className="w-[25rem] h-full object-cover flex items-start justify-start"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <div>
              <h2 className="text-sm">New arrival best deal!</h2>
              <div className="flex flex-col gap-2 items-start">
                <p className="font-extrabold text-2xl text-gray-500">
                  Panjabi Salwar Suit
                </p>
                <div>
                  <p className="text-2xl ">BDT 3,000</p>
                  <p className="text-lg text-gray-300 line-through">
                    BDT 3,400
                  </p>
                </div>
                <div className="space-y-2 mt-5 text-gray-700">
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-gray-700 rounded-full mr-2"></span>
                    <p>Best Quality</p>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-gray-700 rounded-full mr-2"></span>
                    <p>Best Demand</p>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-gray-700 rounded-full mr-2"></span>
                    <p>Best Usage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="text-indigo-800 font-semibold">Buy now</button>
            </div>
          </div>
        </div>
        <div className="card w-full card-side bg-base-100 shadow-xl h-[35rem] ">
          <figure>
            <img
              src={photo4}
              alt="Movie"
              loading="lazy"
              className="w-[25rem] h-full object-cover flex items-start justify-start"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <div>
              <h2 className="text-sm">New arrival best deal!</h2>
              <div className="flex flex-col gap-2 items-start">
                <p className="font-extrabold text-2xl text-gray-500">
                  Panjabi Salwar Suit
                </p>
                <div>
                  <p className="text-2xl ">BDT 3,000</p>
                  <p className="text-lg text-gray-300 line-through">
                    BDT 3,400
                  </p>
                </div>
                <div className="space-y-2 mt-5 text-gray-700">
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-gray-700 rounded-full mr-2"></span>
                    <p>Best Quality</p>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-gray-700 rounded-full mr-2"></span>
                    <p>Best Demand</p>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-gray-700 rounded-full mr-2"></span>
                    <p>Best Usage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="text-indigo-800 font-semibold">Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center mx-auto mt-14 bg-gray-200 px-6 py-2.5 text-indigo-950 rounded-lg gap-2">
        <span className="font-bold opacity-70">Explore more</span>
        <img src={arrow} loading="lazy" className="animate-bounce" width={14} alt="" />
      </button>
    </div>
  );
}

export default NewArrival