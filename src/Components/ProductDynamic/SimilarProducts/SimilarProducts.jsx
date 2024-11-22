/* eslint-disable react/prop-types */
import "./SimilarProducts.css";
import SimilarProductsFetch from "./SimilarProductsFetch";

const SimilarProducts = ({ data }) => {
  console.log(data);

  // Slice the first 4 items from the data array
  const productsToShow = data?.slice(0, 4);

  return (
    <div className="mt-8">
      <p className="text-center text-xl font-bold">Similar Products</p>

      <div className="flex lg:flex-row flex-col mt-8 items-center justify-center mx-auto gap-6">
        {productsToShow?.map((product) => (
          <SimilarProductsFetch key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
