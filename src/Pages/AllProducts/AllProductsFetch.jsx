/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ItemCard = ({ product }) => {
    console.log(product);
  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="p-4 text-center text-red-500">
        Product data is unavailable.
      </div>
    );
  }

  const {_id, name, price, offerPrice, discount, type, thumb, sizes } = product;

  return (
    <Link to={`/product/${_id}`} className="max-w-sm relative mx-auto border rounded-lg w-full shadow-lg overflow-hidden bg-white">
      <div className="relative">
        <img
          src={thumb || "https://via.placeholder.com/300"} 
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 px-3 py-1 bg-indigo-900 text-white text-sm rounded-full">
          {discount > 0 ? `${discount}% OFF` : type}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">
          {name || "No Name Available"}
        </h2>

        <div className="mt-2">
          <span className="text-sm font-medium text-gray-700">Sizes: </span>
          {sizes && sizes?.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-1">
              {sizes?.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border rounded text-xs text-gray-100 bg-gray-800 border-gray-300"
                >
                  {size}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-sm text-gray-500">No sizes available.</span>
          )}
        </div>

        <div className="mt-4 flex items-center">
          <span className="text-xl font-semibold text-green-600">
            ${offerPrice || price || "N/A"}
          </span>
          {offerPrice && price && offerPrice !== price && (
            <span className="ml-2 text-sm line-through text-gray-400">
              ${price}
            </span>
          )}
        </div>

        <button className="mt-4 w-full  bg-indigo-900 hover:bg-indigo-950 text-white py-2 rounded">
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default ItemCard;
