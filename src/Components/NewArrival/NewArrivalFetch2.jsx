/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewArrivalFetch2 = ({ products }) => {
  return (
    <Link to={`/product/${products?._id}`} className="card w-full card-side bg-base-100 shadow-xl h-[35rem]">
      <figure>
        <img
          src={products?.thumb}
          alt={products?.name || "Product Image"}
          loading="lazy"
          className="w-[25rem] h-full object-cover flex items-start justify-start"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="text-sm">New arrival best deal!</h2>
          <div className="flex flex-col gap-2 items-start">
            <p className="font-extrabold text-2xl text-gray-500">
              {products?.name}
            </p>
            <div>
              <p className="text-2xl">BDT {products?.offerPrice}</p>
              {products?.discount > 0 && (
                <p className="text-lg text-gray-300 line-through">
                  BDT {products?.price}
                </p>
              )}
            </div>
            <div className="space-y-2 mt-5 text-gray-700">
              {products?.keyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="h-2 w-2 bg-gray-700 rounded-full mr-2"></span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="text-indigo-800 font-semibold">Buy now</button>
        </div>
      </div>
    </Link>
  );
};

export default NewArrivalFetch2;
