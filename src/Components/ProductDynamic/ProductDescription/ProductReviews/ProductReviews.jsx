/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductReviews = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const reviews = Array.isArray(data)
    ? data?.map((review) => ({
        id: review._id, 
        name: review.user || "Anonymous", 
        rating: review.rating || 0,
        review: review.comment || "No review provided.", 
        date:
          new Date(review.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }) || "Unknown date", 
      }))
    : [];

  const visibleReviews = showMore ? reviews : reviews.slice(0, 3);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Customer Reviews ({reviews.length || 0})
      </h2>
      {reviews?.length > 0 ? (
        <div className="space-y-6">
          {visibleReviews?.map((review) => (
            <div
              key={review.id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="flex items-center mb-2">
                {Array?.from({ length: 5 })?.map((_, index) => (
                  <span
                    key={index}
                    className={`mr-1 ${
                      index < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No reviews available for this product.</p>
      )}
      {reviews.length > 3 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ProductReviews;
