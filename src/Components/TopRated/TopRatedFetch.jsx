/* eslint-disable react/prop-types */


import photo4 from "../../../public/newitems/sample.jpg";

const TopRatedFetch = ({product}) => {
    console.log("Top rated product - ",product);

    const averageRating =
      product?.reviews?.length > 0
        ? (
            product.reviews.reduce((sum, review) => sum + review.rating, 0) /
            product.reviews.length
          ).toFixed(1) 
        : "N/A";

  console.log(averageRating);
  return (
    <div className="card relative glass w-80">
      <div className="absolute -top-3 -right-3 h-10 w-14 z-[9999] flex items-center justify-center text-xs  font-bold rounded-full bg-green-700 shadow-md shadow-gray-500 text-white">
        {averageRating}/5
      </div>
      <figure className="w-full relative">
        <img
          className="w-full h-96  cursor-pointer rounded-t-xl object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
          src={product?.thumb}
          loading="lazy"
          alt="item!"
        />
        <img
          className="w-full cursor-pointer rounded-t-xl h-96 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
          src={photo4}
          loading="lazy"
          alt="hover item!"
        />
      </figure>
      <div className="card-body rounded-b-xl arrival-bg">
        <h2 className="card-title">
          {product?.name} <span className="text-indigo-800"></span>
        </h2>
        <div>
          <p className="text-2xl ">BDT {product?.offerPrice}</p>
          <p className="text-md text-gray-500 line-through">BDT {product?.price}</p>
          <p className="text-gray-500">Quantity : {product?.quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="bg-indigo-950 hover:bg-indigo-800 text-white text-sm py-2 px-4 rounded-lg">
            Shop now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRatedFetch