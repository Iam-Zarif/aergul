import { useLoaderData } from "react-router-dom";
import ProductDescription from "../Components/ProductDynamic/ProductDescription/ProductDescription";
import ProductIntro from "../Components/ProductDynamic/ProductIntro/ProductIntro";
import ProductPhotoSection from "../Components/ProductDynamic/ProductPhotoSection/ProductPhotoSection";
import SimilarProducts from "../Components/ProductDynamic/SimilarProducts/SimilarProducts";
import SecondaryFooter from "../Shared/secondaryFooter/SecondaryFooter";


const ProductDynamicPage = () => {
  const data = useLoaderData(); 
  return (
    <div>
      <div className="mt-20  max-w-7xl px-4 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-6">
          <div className="col-span-3 ">
            <div className="flex text-sm items-center gap-2">
              <p>Home</p> -<p>Product</p>- <p>New arrival</p> -
              <p className="font-semibold text-gray-500">{data?.data?.name}</p>
            </div>

            <ProductPhotoSection data={data?.data} />
          </div>
          <div className="col-span-2">
            <ProductIntro data={data?.data} />
          </div>
        </div>
        <div>
          <ProductDescription data={data?.data} />
          <SimilarProducts data={data?.data?.similarProducts} />
        </div>
      </div>
      <div className="mt-10">
        <SecondaryFooter data={data?.data} />
      </div>
    </div>
  );
};

export default ProductDynamicPage;
