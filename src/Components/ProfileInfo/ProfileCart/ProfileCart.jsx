

const ProfileCart = () => {
  return (
    <div className="flex relative items-start gap-6 pb-5 bg-white shadow-sm shadow-gray-300 border rounded-xl  mt-3">
      <div className="w-full">
        <div className="grid font-extrabold text-gray-100 bg-indigo-950 rounded-t-xl text-sm w-full grid-cols-12 p-4">
          <p className="col-span-3 w-full">Item No.</p>
          <p className="col-span-4 w-full ">Item</p>
          <p className="col-span-2 w-full ">Quantity</p>
          <p className="col-span-2 w-full ">Price</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCart