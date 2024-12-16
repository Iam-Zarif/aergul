/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { local } from "../../../Api/LocalApi";

const ProductIntro = ({ data }) => {
  const {
    name = "Unnamed Product",
    _id,
    price,
    offerPrice,
    discount = 0,
    type,
    color,
    sizes = ["Free Size"],
    keyFeatures = [],
    reviews = [],
  } = data || {}; 

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0; 

  const specialPrice = discount > 0 ? offerPrice : price;

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${local}/cart/add-to-cart`,
        {
          productId: _id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        },
        {
          withCredentials: true,
        }
      );

      console.log("Response:", response);
      if (response.status === 200) {
        setMessage(
          response.data.message || "Product added to cart successfully!"
        );
        setMessageType("success");
      }
      else if(response.status === 400){
        setMessage(
          response.data.message || "Product already added to cart!"
        );
        setMessageType("warning");
      } else {
        setMessage(response.data.message || "Failed to add product to cart.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setMessage(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else {
        setMessage("Network error. Please check your connection.");
      }
      setMessageType("error");
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };


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

        <div className="flex text-sm items-center gap-4 mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-indigo-800 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-blue-400"
          >
            Add to Cart
          </button>
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400">
            Buy
          </button>
        </div>

        {message && (
          <div className="fixed inset-0 flex top-0 bottom-0 left-0 right-0 items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-[999999]">
            <div
              className={`px-6 py-3 rounded-lg text-white shadow-sm shadow-gray-400 text-sm ${
                messageType === "success"
                  ? "bg-green-500"
                  : messageType === "warning"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {message}
            </div>
          </div>
        )}

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
