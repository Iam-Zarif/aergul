
import photo from "../../../public/newitems/photo.jpg";
import photo1 from "../../../public/newitems/photo2.jpg";
import photo2 from "../../../public/newitems/photo3.jpg";
import photo3 from "../../../public/newitems/photo4.jpg";
import photo4 from "../../../public/newitems/sample.jpg";
import "./HomeGalary.css"

const HomeGalary = () => {
  return (
    <div className="mt-16 galary pb-24  pt-10">
      <div className="flex items-center flex-col gap-2">
        <p className="text-lg font-extrabold text-gray-300">
          Share your setup with
        </p>
        <p className="text-4xl font-extrabold">#aergul</p>
      </div>

      <div className="grid grid-cols-12 gap-4 grid-rows-12 h-[100vh] lg:-mt-12">
        <div className="col-span-1 cols-start-1 row-start-1 row-span-6 h-full">
          <img
            alt="image"
            src={photo}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-4 row-start-3 row-span-4">
          <img
            alt="image"
            src={photo1}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-2 row-span-5 row-start-4">
          <img
            alt="image"
            src={photo2}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-3 row-span-6 row-start-2">
          <img
            alt="image"
            src={photo3}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-4 row-span-6 row-start-1">
          <img
            alt="image"
            src={photo4}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-2 row-span-6 row-start-7">
          <img
            alt="image"
            src={photo1}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-3 row-span-4 row-start-7">
          <img
            alt="image"
            src={photo2}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-3 row-span-3">
          <img
            alt="image"
            src={photo3}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
        <div className="col-span-4 row-span-6 row-start-7">
          <img
            alt="image"
            src={photo4}
            className="h-full w-full object-cover shadow-sm shadow-gray-500 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeGalary;
