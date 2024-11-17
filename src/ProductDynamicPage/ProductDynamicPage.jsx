import ProductDescription from "../Components/ProductDynamic/ProductDescription/ProductDescription";
import ProductIntro from "../Components/ProductDynamic/ProductIntro/ProductIntro";
import ProductPhotoSection from "../Components/ProductDynamic/ProductPhotoSection/ProductPhotoSection";
import SimilarProducts from "../Components/ProductDynamic/SimilarProducts/SimilarProducts";
import SecondaryFooter from "../Shared/secondaryFooter/secondaryFooter";

const ProductDynamicPage = () => {
  return (
    <div>
      <div className="mt-20  max-w-7xl px-4 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-6">
          <div className="col-span-3 ">
            <div className="flex text-sm items-center gap-2">
              <p>Home</p> -<p>Product</p>- <p>New arrival</p> -
              <p className="font-semibold text-gray-500">
                Pakistani Salwar suit
              </p>
            </div>

            <ProductPhotoSection />
          </div>
          <div className="col-span-2">
            <ProductIntro/>
          </div>
        </div>
        <div>
          <ProductDescription/>
          <SimilarProducts/>
        </div>
      </div>
        <div className="mt-10">
          <SecondaryFooter/>
        </div>
    </div>
  );
};

export default ProductDynamicPage;
