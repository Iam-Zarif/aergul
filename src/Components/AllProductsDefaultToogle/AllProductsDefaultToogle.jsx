/* eslint-disable react/prop-types */
const AllProductsDefaultToogle = ({ setSort }) => {
  const handleSortSelection = (sortType) => {
    setSort(sortType);
  };

  return (
    <div className="absolute top-8 border left-0 z-[99999] bg-white rounded-lg shadow-sm shadow-gray-400 lg:w-36">
      <div className="flex items-start flex-col">
        <p
          onClick={() => handleSortSelection("default")}
          className="py-2 hover:bg-gray-200 w-full px-3 cursor-pointer"
        >
          Default
        </p>
        <p
          onClick={() => handleSortSelection("price Low To High")}
          className="py-2 hover:bg-gray-200 w-full px-3 cursor-pointer"
        >
          Price low to high
        </p>
        <p
          onClick={() => handleSortSelection("price High To Low")}
          className="py-2 hover:bg-gray-200 w-full px-3 cursor-pointer"
        >
          Price high to low
        </p>
        <p
          onClick={() => handleSortSelection("Top Rated")}
          className="py-2 hover:bg-gray-200 w-full px-3 cursor-pointer"
        >
          Top rated
        </p>
      </div>
    </div>
  );
};

export default AllProductsDefaultToogle;
