import { useState } from "react";
import ProfileOrderHistory from "../ProfileOrderHistory/ProfileOrderHistory";
import ProfileCart from "../ProfileCart/ProfileCart";

const OrderHistoryAndCart = () => {
  const [activeTab, setActiveTab] = useState("OrderHistory");

  return (
    <div>
      <div className="flex relative items-start gap-6 bg-white shadow-sm shadow-gray-300 border rounded-xl">
        <div className="grid grid-cols-2 w-full items-center">
          <p
            onClick={() => setActiveTab("OrderHistory")}
            className={`mx-auto w-full text-center p-2 cursor-pointer ${
              activeTab === "OrderHistory" ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            Order History
          </p>
          <p
            onClick={() => setActiveTab("Cart")}
            className={`mx-auto w-full text-center p-2 cursor-pointer ${
              activeTab === "Cart" ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            Cart
          </p>
        </div>
      </div>

      {activeTab === "OrderHistory" ? (
        <ProfileOrderHistory />
      ) : (
       <ProfileCart/> 
      )}
    </div>
  );
};

export default OrderHistoryAndCart;
