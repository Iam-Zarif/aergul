/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";

const ProductIntro = ({ data }) => {
  const {
    name = "Unnamed Product",
    _id,
    price,
    offerPrice,
    discount = 0,
    type,
    color,
    sizes = ["Free Size"], // Default to 'Free Size' if no sizes are provided
    keyFeatures = [],
    reviews = [], // Default to an empty array if no reviews
  } = data || {}; // Handle case where data is undefined

  // Calculate the average rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0; // Default to 0 if no reviews

  const specialPrice = discount > 0 ? offerPrice : price;

  return (
    <div className="mt-8">
      <div className="flex flex-col items-start gap-1">
        <p className="text-4xl font-semibold">{name} </p>
        <div className="flex items-center gap-4">
          <p className="text-sm bg-gray-700 text-white px-4 py-2 rounded-xl font-normal">
            {type}
          </p>
          <div className="h-6 w-[1px] bg-gray-500"></div>
          <p>Color: {color}</p>
        </div>
        <div className="flex text-xs items-center gap-2 mt-1">
          <Rating style={{ maxWidth: 90 }} value={averageRating} readOnly />{" "}
          <p>{reviews.length} Reviews</p> {/* Display number of reviews */}
        </div>

        {/* Product ID */}
        <p className="text-gray-500">Product ID: #{_id || "N/A"}</p>

        {/* Price Information */}
        <div className="bg-gray-200 text-sm rounded-lg py-2 mt-4 px-5">
          <p>Special Price</p>
          <p className="text-lg font-semibold text-red-500">
            BDT {specialPrice || "N/A"}
          </p>
        </div>
        {discount > 0 && (
          <div className="text-sm mt-2">
            <p>Regular Price</p>
            <p className="line-through">BDT {price}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex text-sm items-center gap-4 mt-4">
          <button className="bg-indigo-800 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-blue-400">
            Add to Cart
          </button>
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400">
            Buy
          </button>
        </div>

        {/* Sizes */}
        {sizes.length > 0 && (
          <div className="flex mt-3 flex-col items-start gap-1">
            <p className="font-semibold">Sizes</p>
            <div className="flex text-sm items-center gap-4">
              {sizes.map((size, index) => (
                <p key={index}>{size}</p>
              ))}
            </div>
          </div>
        )}

        {/* Quick Overview */}
        {keyFeatures.length > 0 && (
          <div className="mt-3">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Quick Overview
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductIntro;
