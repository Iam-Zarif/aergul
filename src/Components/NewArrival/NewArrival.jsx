import arrow from "../../../public/newitems/down-arrow.png";
import "./newArrivals.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NewArrivalFetch from "./NewArrivalFetch";
import NewArrivalFetch2 from "./NewArrivalFetch2";
import { local } from "../../Api/LocalApi";

const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);
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
        { withCredentials: true }
      );

      const allProducts = response.data.data;

      // Sort by `createdAt` in descending order
      const sortedProducts = [...allProducts].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });

      setNewArrivals(sortedProducts);

      setDiscountNewArrival(
        sortedProducts.filter((product) => product.discount > 0).slice(0, 2)
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
      <div>
        <p className="text-center text-2xl font-extrabold text-gray-500">
          New Arrival
        </p>
      </div>
      <div className="flex lg:flex-row flex-col mt-8 items-center justify-center mx-auto gap-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          Array.isArray(newArrivals) &&
          newArrivals
            ?.slice(0,4)
            ?.map((products) => (
              <NewArrivalFetch key={products._id} products={products} />
            ))
        )}
      </div>

      <div className="mt-16 lg:flex-row flex-col justify-center px-5 mx-auto flex items-center gap-6 w-full">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          Array.isArray(discountNewArrival) &&
          discountNewArrival?.map((products) => (
            <NewArrivalFetch2 key={products._id} products={products} />
          ))
        )}
      </div>
      <button className="flex items-center justify-center mx-auto mt-14 bg-gray-200 px-6 py-2.5 text-indigo-950 rounded-lg gap-2">
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
};

export default NewArrival;
