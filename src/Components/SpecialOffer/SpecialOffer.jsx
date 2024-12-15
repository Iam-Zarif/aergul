
import arrow from "../../../public/newitems/down-arrow.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "../../Api/LocalApi";
import SpecialOfferFetch from "./SpecialOfferFetch";
const SpecialOffer = () => {
   const [loading, setLoading] = useState(false);
   const [discountNewArrival, setDiscountNewArrival] = useState([]);

   useEffect(() => {
     const fetchNewArrivals = async () => {
       const token = localStorage.getItem("token");
       try {
         setLoading(true);
         const response = await axios.get(
           `${local}/product/newArrival`,
           {
             headers: {
               Authorization: `Bearer ${token}`, // Pass token in header
             },
           },
           {
             withCredentials: true,
           }
         );

         const allProducts = response.data.data;

         const sortedProducts = [...allProducts].sort((a, b) => {
           const dateA = new Date(a.createdAt);
           const dateB = new Date(b.createdAt);
           return dateB - dateA;
         });

         setDiscountNewArrival(
           sortedProducts.filter((product) => product.discount > 0).slice(0, 4)
         );

         setLoading(false);
       } catch (error) {
         console.error("Error fetching new arrivals:", error);
         setLoading(false);
       }
     };

     fetchNewArrivals();
   }, []);
   
  return (
    <div className="mt-16">
      <p className="text-center text-2xl font-extrabold text-gray-500">
        Special offers
      </p>

      <div>
        <div className="flex mt-8  lg:flex-row flex-col items-center justify-center mx-auto gap-6">
          {loading ? (
            <p>Loading..</p>
          ) : (
            <>
              {discountNewArrival?.map((product) => (
                <SpecialOfferFetch key={product._id} product={product} />
              ))}
            </>
          )}
        </div>
      </div>
      <button className="flex items-center justify-center mx-auto mt-10 bg-gray-200 px-6 py-2.5 text-indigo-950 rounded-lg gap-2">
        <span className="font-bold opacity-70">Explore more</span>
        <img
          src={arrow}
          loading="lazy"
          className="animate-bounce"
          width={14}
          alt=""
        />
      </button>
    </div>
  );
}

export default SpecialOffer