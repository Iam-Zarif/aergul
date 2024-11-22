/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import cross from "../../../../public/profile/cross.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useProfile } from "../../../ProfileProvider/ProfileProvider";
import { local } from "../../../Api/LocalApi";

const FeedbackPopup = ({ toogleHandleFeedback }) => {
  const { profile } = useProfile();
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { name, email, phone, profilePhoto } = profile;

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    if (!feedbackText || rating === 0) {
      setError("Please provide a rating and feedback text.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${local}/user/feedback`, {
        name,
        email,
        phone,
        profilePhoto,
        rating,
        texts: feedbackText,
      });

      if (response.status === 201) {
        setSuccess(true);
        setFeedbackText("");
        setRating(0);

        setTimeout(() => {
          setSuccess(false);
        }, 4000); 
      } else {
        setError("Failed to submit feedback. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-[1000000] inset-0 bg-black bg-opacity-50 flex items-center  justify-center">
      <div className="bg-white p-6 rounded-xl max-w-xl w-full relative">
        <img
          src={cross}
          onClick={() => toogleHandleFeedback()}
          loading="lazy"
          className="absolute right-4 top-4 cursor-pointer w-3"
          alt=""
        />
        <p className="text-3xl font-bold mt-8 text-center">Feedback</p>
        <p className="text-center text-gray-500 mt-2">
          Give your feedback to help us improve our service
        </p>
        <div className="mt-6">
          <div className="flex items-center justify-center w-full">
            <Rating
              style={{ maxWidth: 140 }}
              value={rating}
              onChange={handleRatingChange}
              required
            />
          </div>
          <textarea
            rows={6}
            className="max-w-lg w-full mx-auto flex mt-3 items-center justify-center border rounded-xl p-2 focus:outline-none font-light"
            placeholder="Your feedback..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
          <button
            onClick={() => handleSubmit()}
            disabled={loading}
            className={`flex items-center justify-center mx-auto text-center px-8 py-2 rounded-xl mt-4 ${
              success ? "bg-green-600" : "bg-indigo-900"
            } text-white`}
          >
            {loading ? "Submitting..." : success ? "Submitted!" : "Submit"}
          </button>
          {error && <p className="text-red-500 text-sm font-light text-center mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;
