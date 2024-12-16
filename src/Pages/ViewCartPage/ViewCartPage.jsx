import { useState, useEffect } from "react";
import axios from "axios";
import { local } from "../../Api/LocalApi";

const ViewCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // Fetch cart items on load
  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${local}/cart/profile-cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCartItems(response.data.cart);
      } catch (error) {
        setMessage("Failed to fetch cart items.");
        console.error(error);
        setMessageType("error");
      }
      setLoading(false);
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = async (productId, newQuantity) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${local}/cart/update-quantity`,
        { productId, quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        setMessage("Cart updated successfully.");
        setMessageType("success");
        setCartItems(response.data.cartItems); // Update cart items with the response
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to update quantity.");
      setMessageType("error");
    }
  };

  const handleRemoveItem = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${local}/cart/remove-item`,
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        setMessage("Item removed from cart.");
        setMessageType("success");
        setCartItems(response.data.cartItems); // Update cart items with the response
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to remove item.");
      setMessageType("error");
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems?.reduce((total, item) => {
      const price =
        item?.product?.discount > 0
          ? item?.product?.offerPrice
          : item?.product?.price;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="max-w-7xl px-4 mx-auto py-24">
      <h1 className="text-3xl font-semibold text-gray-900">Your Cart</h1>

      {message && (
        <div
          className={`mt-4 p-4 rounded-lg text-white ${
            messageType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Cart Items */}
        <div className="col-span-2">
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-900 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
                <path
                  d="M4 12a8 8 0 1 1 16 0"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p className="text-gray-700 text-lg font-medium">
                Loading your cart...
              </p>
            </div>
          ) : cartItems?.length > 0 ? (
            <div className="space-y-4 bg-white  shadow-sm shadow-gray-300 rounded-xl ">
              {cartItems?.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b  p-4"
                >
                  {console.log("item", item)}
                  <div className="flex items-center gap-4">
                    <img
                      src={item?.product?.thumb}
                      alt={item?.product?.name}
                      loading="lazy"
                      className="h-20 w-20 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item?.product?.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Color: {item?.product?.color}
                      </p>
                      <p className="text-sm text-gray-600">
                        Size: {item?.size || item?.product?.sizes.join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-red-500 text-sm hover:text-red-600"
                    >
                      Remove
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, item?.quantity - 1)
                        }
                        className="bg-gray-200 px-3 py-1 rounded-full"
                        disabled={item?.quantity <= 1}
                      >
                        -
                      </button>
                      <p>{item?.quantity}</p>
                      <button
                        onClick={() =>
                          handleQuantityChange(item?._id, item.quantity + 1)
                        }
                        className="bg-gray-200 px-3 py-1 rounded-full"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-gray-900">
                      BDT{" "}
                      {item?.product?.discount > 0
                        ? item?.product?.offerPrice
                        : item?.product?.price}{" "}
                      x {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Cart Summary</h2>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="font-semibold text-gray-900">
                BDT {calculateTotalPrice()}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Discount</p>
              <p className="font-semibold text-gray-900">BDT 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="font-semibold text-gray-900">BDT 50</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Total</p>
              <p className="text-xl font-semibold text-indigo-600">
                BDT {calculateTotalPrice() + 50}
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Continue Shopping
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
             Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
