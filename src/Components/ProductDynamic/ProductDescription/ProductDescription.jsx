import { useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductQa from "./ProductQa/ProductQa";
import ProductReviews from "./ProductReviews/ProductReviews";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="mt-8">
      {/* Tabs Navigation */}
      <div className="flex border rounded-lg bg-white justify-between items-center w-full shadow-md">
        <p
          onClick={() => setActiveTab("Description")}
          className={`text-center mx-auto w-full p-2 cursor-pointer ${
            activeTab === "Description"
              ? "font-bold bg-gray-100"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Description
        </p>
        <p
          onClick={() => setActiveTab("QA")}
          className={`text-center mx-auto w-full p-2 cursor-pointer ${
            activeTab === "QA"
              ? "font-bold bg-gray-100"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          QA
        </p>
        <p
          onClick={() => setActiveTab("Reviews")}
          className={`text-center mx-auto w-full p-2 cursor-pointer ${
            activeTab === "Reviews"
              ? "font-bold bg-gray-100"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Reviews
        </p>
      </div>

      <div className="mt-4 border rounded-lg bg-gray-50 p-6 shadow-lg">
        {activeTab === "Description" && (
          <ProductDetails/>
        )}
        {activeTab === "QA" && (
         <ProductQa/>
        )}
        {activeTab === "Reviews" && (
         <ProductReviews/>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;




// 
