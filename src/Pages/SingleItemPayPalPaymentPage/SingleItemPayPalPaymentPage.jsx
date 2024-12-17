import { FaArrowLeft, FaPaypal, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleItemPayPalPaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br pt-20 from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
        >
          <FaArrowLeft className="text-xl" />
          <span className="font-medium">Back</span>
        </button>
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          <span className="text-blue-500">PayPal</span> Payment
        </h1>
        {/* Informative Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" />
            Why Choose PayPal?
          </h2>
          <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
            <p className="text-gray-600 mb-2">
              PayPal is a secure and trusted payment platform that allows you to
              pay without sharing your financial details with merchants.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Fast and convenient transactions.</li>
              <li>Global acceptance for online payments.</li>
              <li>Fraud protection and secure encryption.</li>
            </ul>
          </div>
        </div>
        {/* PayPal Login and Payment */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FaPaypal className="text-blue-500" />
            PayPal Account
          </h2>
          <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
            <p className="text-gray-600 mb-4">
              Please log in to your PayPal account to complete the transaction.
            </p>
            <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <FaPaypal className="text-2xl" />
              Log in to PayPal
            </button>
          </div>
        </div>
        {/* Order Summary */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" />
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
              Total: <span className="text-blue-600">$90.00</span>
            </p>
          </div>
        </div>{" "}
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
        {/* Proceed Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transition-all transform hover:scale-105"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default SingleItemPayPalPaymentPage;
