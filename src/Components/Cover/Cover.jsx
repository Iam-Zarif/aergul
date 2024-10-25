

import cover1 from "../../../public/cover/cover1.jpg"
import cover3 from "../../../public/cover/cover3.webp"
import cover5 from "../../../public/cover/cover5.webp"
import next from "../../../public/cover/next.png"
import flower from "../../../public/cover/flower.gif"
import flower1 from "../../../public/cover/flower1.gif"
import flower2 from "../../../public/cover/flower2.gif"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Cover.css"

const Cover = () => {
  return (
    <div className="h-full  w-full ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 w-full items-center h-[80vh]">
            <div className="relative w-full h-full col-span-3 lg:col-span-1">
              <div className="w-full h-full opacity-40 bg-black absolute top-0 left-0"></div>
              <img src={cover1} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-full w-full relative lg:col-span-2 cover-bg lg:block hidden">
              <img
                src={flower}
                loading="lazy"
                className="absolute bottom-10 right-10 rounded-full w-20 shadow-md shadow-gray-400"
                alt=""
              />
              <div className="flex mt-[8rem] ml-8 flex-col items-start gap-5">
                <p className="text-8xl title text-indigo-950">
                  Discover the Finest Kameez Collection
                </p>
                <p className="text-2xl font-semibold w-[50rem]">
                  Discover elegant and trendy Salwar Kameez collections that
                  combine comfort with style. Explore a variety of designs,
                  perfect for every occasion, crafted with care to enhance your
                  look.
                </p>
                <button className="bg-indigo-950 group  text-white  px-8 py-3 rounded-xl ml-1 mt-10">
                  <div className="flex items-center gap-3">
                    {" "}
                    <span>Shop Now</span>
                    <img src={next} loading="lazy" className="w-5 group-hover:translate-x-1 transition-all duration-300" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 w-full items-center h-[80vh]">
            <div className="relative w-full h-full col-span-3 lg:col-span-1">
              <div className="w-full h-full opacity-40 bg-black absolute top-0 left-0"></div>
              <img src={cover3} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-full w-full relative lg:col-span-2 cover-bg lg:block hidden">
              <img
                src={flower1}
                loading="lazy"
                className="absolute bottom-10 right-10 rounded-full w-20 shadow-md shadow-gray-400"
                alt=""
              />
              <div className="flex mt-[8rem] ml-8 flex-col items-start gap-5">
                <p className="text-8xl title text-indigo-950">
                  Discover the Finest Kameez Collection
                </p>
                <p className="text-2xl font-semibold w-[50rem]">
                  Discover elegant and trendy Salwar Kameez collections that
                  combine comfort with style. Explore a variety of designs,
                  perfect for every occasion, crafted with care to enhance your
                  look.
                </p>
                <button className="bg-indigo-950 group  text-white  px-8 py-3 rounded-xl ml-1 mt-10">
                  <div className="flex items-center gap-3">
                    {" "}
                    <span>Shop Now</span>
                    <img src={next} loading="lazy" className="w-5 group-hover:translate-x-1 transition-all duration-300" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 w-full items-center h-[80vh]">
            <div className="relative w-full h-full col-span-3 lg:col-span-1">
              <div className="w-full h-full opacity-40 bg-black absolute top-0 left-0"></div>
              <img src={cover5} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-full w-full relative lg:col-span-2 cover-bg lg:block hidden">
              <img
                src={flower2}
                loading="lazy"
                className="absolute bottom-10 right-10 rounded-full w-20 shadow-md shadow-gray-400"
                alt=""
              />
              <div className="flex mt-[8rem] ml-8 flex-col items-start gap-5">
                <p className="text-8xl title text-indigo-950">
                  Discover the Latest Arrival Kameez Collection
                </p>
                <p className="text-2xl font-semibold w-[50rem]">
                  Discover elegant and trendy Salwar Kameez collections that
                  combine comfort with style. Explore a variety of designs,
                  perfect for every occasion, crafted with care to enhance your
                  look.
                </p>
                <button className="bg-indigo-950 group  text-white  px-8 py-3 rounded-xl ml-1 mt-10">
                  <div className="flex items-center gap-3">
                    {" "}
                    <span>Shop Now</span>
                    <img src={next} loading="lazy" className="w-5 group-hover:translate-x-1 transition-all duration-300" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cover