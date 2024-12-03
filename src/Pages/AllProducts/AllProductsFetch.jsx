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

  const { _id, name, price, offerPrice, discount,reviews, type, thumb, sizes } =
    product;

    const averageRating =
      reviews && reviews?.length > 0
        ? (
            reviews?.reduce((sum, review) => sum + review.rating, 0) /
            reviews?.length
          )?.toFixed(1)
        : null;

  return (
    <Link
      to={`/product/${_id}`}
      className="max-w-sm relative mx-auto border rounded-xl w-full shadow-lg overflow-hidden bg-white flex flex-col"
    >
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

      <div className="p-4 flex-grow">
        <h2 className=" font-bold text-gray-800">
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

        <div className="mt-2 flex items-center">
          <span className="text-xl font-semibold text-green-600">
            ${offerPrice || price || "N/A"}
          </span>
          {offerPrice && price && offerPrice !== price && (
            <span className="ml-2 text-sm line-through text-gray-400">
              ${price}
            </span>
          )}
        </div>
        <div className="text-sm font-light ">
          <p>
            Reviews :
            <span className=" text-gray-500">
              {averageRating ? (
                <>
                  <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    {averageRating}
                  </span>
                  /5
                </>
              ) : (
                "No ratings yet"
              )}
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="mt-auto px-4 pb-4">
        <button className="w-full text-sm bg-indigo-900 hover:bg-indigo-950 text-white py-2 rounded-xl">
          Buy Now
        </button>
        <button className="mt-2 w-full text-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ItemCard;
