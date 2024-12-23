/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import photo4 from "../../../public/newitems/sample.jpg";

const NewArrivalFetch = ({ products }) => {
  return (
    <Link to={`/product/${products?._id}`} className="card relative  glass w-80">
      {products?.discount > 0 && (
        <div className="absolute -top-3 -right-3 h-10 w-10 z-[9999] flex items-center justify-center text-xs animate-pulse font-bold rounded-full bg-green-700 text-white">
         - {" "}{products?.discount}%
        </div>
      )}

      <figure className="w-full relative">
        <img
          className="w-full h-96  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
          src={products?.thumb}
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
        <h2 className="card-title">{products?.name}</h2>
        <p className="font-light text-gray-500 ">BDT {products?.price}</p>
        <div className="card-actions justify-end">
          <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
            Shop now!
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NewArrivalFetch