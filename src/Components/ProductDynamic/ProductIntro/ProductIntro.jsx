import { Rating } from "@smastrom/react-rating";

const ProductIntro = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-start gap-1">
        <p className="text-4xl">Pakistani Salwar Suit </p>
        <div className="flex text-xs items-center gap-2">
          {" "}
          <Rating style={{ maxWidth: 90 }} value={4} />
          <p>12 Reviews</p>
        </div>
        <p>Product ID : #6263454236</p>
        <div className="bg-gray-200 text-sm rounded-lg py-2 mt-4 px-5">
          <p>Special Price</p>
          <p>BDT 2,400</p>
        </div>
        <div className=" text-sm mt-2">
          <p>Regular Price</p>
          <p>BDT 2,800</p>
        </div>
        <div className="flex text-sm items-center gap-4 mt-4">
          <button className="bg-indigo-800 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-blue-400">
            Add to Cart
          </button>
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400">
            Buy
          </button>
        </div>
        <div className="flex mt-3 flex-col items-start gap-1">
          <p className="font-semibold">Sizes</p>
          <div className="flex text-sm items-center gap-4"><p>S</p><p>M</p><p>L</p><p>XL</p><p>XXL</p><p>XXXL</p></div>{" "}
        </div>

        <div className=" mt-3">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Quick Overview
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <span className="font-medium">Fabric Material:</span> Premium
              Cotton Blend
            </li>
            <li>
              <span className="font-medium">Design:</span> Traditional
              Embroidery with Modern Patterns
            </li>
            <li>
              <span className="font-medium">Fit:</span> Regular Fit with
              Adjustable Drawstrings
            </li>
            <li>
              <span className="font-medium">Occasion:</span> Perfect for Casual
              and Festive Wear
            </li>
            <li>
              <span className="font-medium">Included Pieces:</span> Kameez,
              Salwar, and Dupatta
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
