

const ProductPhotoSection = () => {
  return (
    <>
      {" "}
      <div className="grid mt-4 grid-cols-7 w-full gap-3">
        <div className="col-span-1 ">
          <div className="flex flex-col w-full items-center gap-4">
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="w-full rounded-lg shadow-sm shadow-gray-200 h-auto object-contain"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="w-full rounded-lg opacity-60 shadow-sm shadow-gray-200 h-auto object-contain"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="w-full rounded-lg opacity-60 shadow-sm shadow-gray-200 h-auto object-contain"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="w-full rounded-lg opacity-60 shadow-sm shadow-gray-200 h-auto object-contain"
              alt=""
            />
          </div>
        </div>{" "}
        <div className="col-span-6 bg-gray-100 shadow-sm shadow-gray-300 w-full">
          <img
            src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
            loading="lazy"
            className="w-full rounded-lg shadow-sm  shadow-gray-200 h-[36rem] object-contain"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default ProductPhotoSection