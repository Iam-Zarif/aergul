import { useState } from "react";

const ProductReviews = () => {
  const [showMore, setShowMore] = useState(false);

  // Mock review data
  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      rating: 5,
      review:
        "Absolutely love this product! The quality is excellent, and it arrived quickly.",
      date: "21st July, 2023",
    },
    {
      id: 2,
      name: "Mark Davis",
      rating: 4,
      review:
        "The product is great overall, but the packaging could be improved.",
      date: "12th October, 2023",
    },
    {
      id: 3,
      name: "Sophia Lee",
      rating: 5,
      review:
        "Exceeded my expectations! Highly recommend this to anyone looking for quality.",
      date: "1st December, 2023",
    },
    {
      id: 4,
      name: "James Carter",
      rating: 3,
      review:
        "The product is decent but not quite what I expected based on the description.",
      date: "30th November, 2023",
    },
    {
      id: 5,
      name: "Emily Brown",
      rating: 5,
      review: "Amazing product! Worth every penny. Will definitely buy again.",
      date: "10th August, 2023",
    },
  ];

  const visibleReviews = showMore ? reviews : reviews.slice(0, 3);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Customer Reviews(12)
      </h2>
      <div className="space-y-6">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`mr-1 ${
                    index < review.rating ? "text-yellow-400" : "text-gray-300"
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
