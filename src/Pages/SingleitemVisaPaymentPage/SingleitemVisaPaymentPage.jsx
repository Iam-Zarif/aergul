import {
  FaArrowLeft,
  FaCreditCard,
  FaUser,
  FaCalendarAlt,
  FaLock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleitemVisaPaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br pt-20 from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 cursor-pointer left-4 flex items-center gap-2 text-gray-700 hover:text-green-500 transition-colors"
        >
          <FaArrowLeft className="text-xl cursor-pointer" />
          <span className="font-medium">Back</span>
        </button>

        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          <span className="text-green-500">Visa</span> Payment
        </h1>

        {/* Order Summary */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FaCreditCard className="text-green-500" />
            Order Summary
          </h2>
          <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
            <p className="text-gray-600">
              Subtotal: <span className="font-medium">$80.00</span>
            </p>
            <p className="text-gray-600">
              Shipping Fee: <span className="font-medium">$5.00</span>
            </p>
            <p className="text-gray-600">
              Tax: <span className="font-medium">$5.00</span>
            </p>
            <p className="text-gray-800 font-bold mt-4">
              Total: <span className="text-green-600">$90.00</span>
            </p>
          </div>
        </div>

        {/* Payment Form */}
        <form>
          {/* Cardholder Name */}
          <div className="mb-6">
            <label
              htmlFor="cardholder-name"
              className="block text-gray-700 font-medium mb-2"
            >
              <FaUser className="inline-block text-green-500 mr-2" />
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholder-name"
              className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl shadow-sm py-3 px-4 focus:ring-2 focus:ring-green-400 focus:outline-none placeholder-gray-400"
              placeholder="Enter cardholder name"
            />
          </div>

          {/* Card Number */}
          <div className="mb-6">
            <label
              htmlFor="card-number"
              className="block text-gray-700 font-medium mb-2"
            >
              <FaCreditCard className="inline-block text-green-500 mr-2" />
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl shadow-sm py-3 px-4 focus:ring-2 focus:ring-green-400 focus:outline-none placeholder-gray-400"
              placeholder="Enter card number"
            />
          </div>

          {/* Expiration Date and CVV */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            {/* Expiration Date */}
            <div>
              <label
                htmlFor="expiration-date"
                className="block text-gray-700 font-medium mb-2"
              >
                <FaCalendarAlt className="inline-block text-green-500 mr-2" />
                Expiration Date
              </label>
              <div className="flex gap-2">
                <select className="bg-gray-50 border border-gray-300 text-gray-800 rounded-xl shadow-sm py-3 px-4 focus:ring-2 focus:ring-green-400 focus:outline-none">
                  <option>MM</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  {/* Add more months */}
                </select>
                <select className="bg-gray-50 border border-gray-300 text-gray-800 rounded-xl shadow-sm py-3 px-4 focus:ring-2 focus:ring-green-400 focus:outline-none">
                  <option>YY</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  {/* Add more years */}
                </select>
              </div>
            </div>

            {/* CVV */}
            <div>
              <label
                htmlFor="cvv"
                className="block text-gray-700 font-medium mb-2"
              >
                <FaLock className="inline-block text-green-500 mr-2" />
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-xl shadow-sm py-3 px-4 focus:ring-2 focus:ring-green-400 focus:outline-none placeholder-gray-400"
                placeholder="Enter CVV"
              />
            </div>
          </div>

          {/* Pay Now Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transition-all transform hover:scale-105"
          >
            Pay Now
          </button>
        </form>
        <div className="mb-8 mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Shipping Address
          </h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <p className="text-gray-600">
              <span className="font-medium">John Doe</span>
            </p>
            <p className="text-gray-600">123 Main Street</p>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
            <p className="text-gray-600">Phone: +880123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleitemVisaPaymentPage;
