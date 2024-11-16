import { Link } from "react-router-dom";
import photo from "../../../../public/newitems/photo.jpg";
import photo1 from "../../../../public/newitems/photo2.jpg";
import photo2 from "../../../../public/newitems/photo3.jpg";
import photo3 from "../../../../public/newitems/photo4.jpg";
import photo4 from "../../../../public/newitems/sample.jpg";
import "./SimilarProducts.css"

const SimilarProducts = () => {
  return (
    <div className="mt-8">
      <p className="text-center text-xl font-bold">Similiar Products</p>

      <div className="flex lg:flex-row flex-col  mt-8 items-center justify-center mx-auto gap-6">
        <Link to="/product" className="card relative glass w-80">
          <div className="absolute -top-3 -right-3 h-10 w-10 z-[9999] flex items-center justify-center text-xs animate-pulse font-bold rounded-full bg-green-700 text-white">
            -15%
          </div>
          <figure className="w-full relative">
            <img
              className="w-full h-80  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
              src={photo}
              loading="lazy"
              alt="item!"
            />
            <img
              className="w-full cursor-pointer rounded-t-xl h-80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
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
        </Link>
        <div className="card relative glass w-80">
          <figure className="w-full relative">
            <img
              className="w-full h-80  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
              src={photo1}
              loading="lazy"
              alt="item!"
            />
            <img
              className="w-full cursor-pointer rounded-t-xl h-80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
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
              className="w-full h-80  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
              src={photo2}
              loading="lazy"
              alt="item!"
            />
            <img
              className="w-full cursor-pointer rounded-t-xl h-80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
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
              className="w-full h-80  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
              src={photo3}
              loading="lazy"
              alt="item!"
            />
            <img
              className="w-full cursor-pointer rounded-t-xl h-80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
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
    </div>
  );
};

export default SimilarProducts;
