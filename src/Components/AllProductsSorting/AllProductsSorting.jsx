const AllProductsSorting = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-indigo-900 mb-6">
        Filter Products
      </h3>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>$0</span>
          <span>$1000</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-900"
        />
      </div>

      {/* Color */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Color
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            "Red",
            "Blue",
            "Green",
            "Black",
            "White",
            "Yellow",
            "Pink",
            "Purple",
            "Gray",
            "Orange",
            "Teal",
            "Brown",
          ].map((color, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full border-2 ${
                ["black", "brown", "gray"].includes(color.toLowerCase())
                  ? "border-gray-400"
                  : "border-white"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Size
        </label>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm font-medium text-gray-700 border rounded-md hover:bg-indigo-100 hover:text-indigo-900"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type
        </label>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900">
          <option value="">Select Type</option>
          <option value="regular">Regular</option>
          <option value="elegant">Elegant</option>
          <option value="casual">Casual</option>
        </select>
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material
        </label>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900">
          <option value="">Select Material</option>
          <option value="cotton">Cotton</option>
          <option value="silk">Silk</option>
          <option value="polyester">Polyester</option>
          <option value="linen">Linen</option>
        </select>
      </div>

      <button className="w-full py-2 bg-indigo-900 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">
        Apply Filters
      </button>
    </div>
  );
};

export default AllProductsSorting;
