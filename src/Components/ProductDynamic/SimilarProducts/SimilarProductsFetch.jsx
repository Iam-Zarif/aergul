import { Link } from "react-router-dom";

const SimilarProductsFetch = ({ product }) => {
  const { discount, name, price, thumb, _id } = product;
  console.log(product);

  return (
    <Link to={`/product/${_id}`} className="card relative glass w-80">
      {discount && (
        <div className="absolute -top-3 -right-3 h-10 w-10 z-[9999] flex items-center justify-center text-xs animate-pulse font-bold rounded-full bg-green-700 text-white">
          -{discount}%
        </div>
      )}
      <figure className="w-full relative">
        <img
          className="w-full h-80 cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
          src={thumb}
          loading="lazy"
          alt={name}
        />
        <img
          className="w-full cursor-pointer rounded-t-xl h-80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
          src={thumb} // Using the same thumbnail for hover effect; replace if different image is available
          loading="lazy"
          alt={`Hover ${name}`}
        />
      </figure>
      <div className="card-body rounded-b-xl arrival-bg">
        <h2 className="card-title">
          {name} <span className="text-indigo-800"></span>
        </h2>
        <p className="font-light text-gray-500">BDT {price}</p>
        <div className="card-actions justify-end">
          <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
            Shop now!
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SimilarProductsFetch;
