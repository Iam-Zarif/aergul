/* eslint-disable react/prop-types */
import arrow from "../../../public/allItems/down-arrow.png";
import AllProductsDefaultToogle from "../../Components/AllProductsDefaultToogle/AllProductsDefaultToogle";
import ItemCard from "../../Pages/AllProducts/AllProductsFetch";

const AllProductsItems = ({
  allProducts,
  loading,
  handleToogleSort,
  toogleSort,
  sort,
  setSort,
}) => {
  return (
    <>
      <div className="mt-2 flex items-center justify-between w-full">
        <div>
          <p>Total Products: {allProducts?.length}</p>
        </div>
        <div className="flex items-center gap-3">
          <p>Sort by</p>
          <div
            onClick={handleToogleSort}
            className="flex relative items-center gap-3 bg-gray-200 px-4 py-1.5 cursor-pointer text-xs rounded-lg"
          >
            {toogleSort && (
              <>
                <AllProductsDefaultToogle setSort={setSort} />
              </>
            )}
            <div className="flex items-center gap-2">
              <p>{sort}</p> {/* Display the selected sort value */}
              <img src={arrow} className="w-3" loading="lazy" alt="Sort icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid mt-2 grid-cols-5 w-full gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {allProducts?.map((product) => {
              return <ItemCard key={product._id} product={product} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default AllProductsItems;
