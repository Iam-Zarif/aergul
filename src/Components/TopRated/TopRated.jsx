import arrow from "../../../public/newitems/down-arrow.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { local } from "../../Api/LocalApi";
import TopRatedFetch from "./TopRatedFetch";
const TopRated = () => {
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

        const sortedByRating = [...allProducts].sort((a, b) => {
          const avgRatingA =
            a.reviews?.reduce((sum, review) => sum + review.rating, 0) /
            (a.reviews?.length || 1);
          const avgRatingB =
            b.reviews?.reduce((sum, review) => sum + review.rating, 0) /
            (b.reviews?.length || 1);

          return avgRatingB - avgRatingA; 
        });

        setDiscountNewArrival(
          sortedByRating.filter((product) => product.discount > 0).slice(0, 4)
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
        Top Rated
      </p>

      <div>
        <div className="flex mt-8  lg:flex-row flex-col items-center justify-center mx-auto gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {discountNewArrival?.map((product) => (
                <TopRatedFetch key={product._id} product={product} />
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
};

export default TopRated;

// TopRated
