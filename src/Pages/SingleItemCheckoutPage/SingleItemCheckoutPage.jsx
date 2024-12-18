import visa from "../../../public/singleItemProceed/visa.png";
import Mastercard from "../../../public/singleItemProceed/mastercard.png";
import paypal from "../../../public/singleItemProceed/paypal.png";
import bkash from "../../../public/singleItemProceed/bkash.svg";
import nagad from "../../../public/singleItemProceed/nagad.png";
import cashOnDelivery from "../../../public/singleItemProceed/cash-on-delivery.png";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-10 pt-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Page Heading */}
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
          Checkout
        </h1>

        {/* Order Summary Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Order Summary
          </h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium text-gray-800">$80.00</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-600">Shipping Fee</p>
              <p className="font-medium text-gray-800">$5.00</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-600">Tax</p>
              <p className="font-medium text-gray-800">$5.00</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="font-bold text-lg text-gray-800">Total</p>
              <p className="font-bold text-lg text-green-600">$90.00</p>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Payment Methods
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div
              onClick={() => navigate("/singleItemVisaPayment")}
              className="flex items-center cursor-pointer justify-center p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105"
            >
              <img loading="lazy" src={visa} alt="Visa" className="w-16 h-auto" />
            </div>
            <div
              onClick={() => navigate("/singleItemMasterCardPayment")}
              className="flex items-center cursor-pointer justify-center p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105"
            >
              <img loading="lazy" src={Mastercard} alt="MasterCard" className="w-16 h-auto" />
            </div>
            <div
              onClick={() => navigate("/singleItemPayPalPayment")}
              className="flex items-center cursor-pointer justify-center p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105"
            >
              <img loading="lazy" src={paypal} alt="PayPal" className="w-14 h-auto" />
            </div>
            <div className="flex items-center cursor-pointer justify-center p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105">
              <img loading="lazy" src={bkash} alt="bKash" className="w-24 h-auto" />
            </div>
            <div className="flex items-center cursor-pointer justify-center p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105">
              <img loading="lazy" src={nagad} alt="Nagad" className="w-24 h-auto" />
            </div>
            <div className="flex items-center cursor-pointer justify-center p-4 bg-gray-50 border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105">
              <img loading="lazy"
                src={cashOnDelivery}
                alt="Cash on Delivery"
                className="w-14 h-auto"
              />
            </div>
          </div>
        </div>

       

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition">
            Back to Cart
          </button>
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 hover:shadow-xl transition-transform transform hover:scale-105">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
