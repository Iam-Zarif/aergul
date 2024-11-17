const ProductPhotoSection = () => {
  return (
    <>
      <div className="grid mt-4 grid-cols-1 lg:grid-cols-7 w-full gap-3">
        {/* Thumbnail Section */}
        <div className="col-span-1 lg:col-span-1 order-2 lg:order-1">
          <div className="flex flex-row lg:flex-col w-full items-center gap-4">
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="lg:w-full w-16 rounded-lg shadow-sm shadow-gray-200 h-auto object-contain"
              alt="Thumbnail 1"
            />
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="lg:w-full w-16 rounded-lg opacity-60 shadow-sm shadow-gray-200 h-auto object-contain"
              alt="Thumbnail 2"
            />
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="lg:w-full w-16 rounded-lg opacity-60 shadow-sm shadow-gray-200 h-auto object-contain"
              alt="Thumbnail 3"
            />
            <img
              src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
              loading="lazy"
              className="lg:w-full w-16 rounded-lg opacity-60 shadow-sm shadow-gray-200 h-auto object-contain"
              alt="Thumbnail 4"
            />
          </div>
        </div>

        {/* Main Image Section */}
        <div className="col-span-6 lg:col-span-6 order-1 lg:order-2 bg-gray-100 shadow-sm shadow-gray-300 w-full">
          <img
            src="https://i.ibb.co.com/whWC2xm/photo2.jpg"
            loading="lazy"
            className="w-full rounded-lg shadow-sm shadow-gray-200 h-[36rem] object-contain"
            alt="Main Product"
          />
        </div>
      </div>
    </>
  );
};

export default ProductPhotoSection;
