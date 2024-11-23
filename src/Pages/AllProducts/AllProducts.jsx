import { useEffect, useState } from "react";
import { local } from "../../Api/LocalApi";
import axios from "axios";
import AllProductsItems from "../../Components/AllProductsItems/AllProductsItems";
import AllProductsSorting from "../../Components/AllProductsSorting/AllProductsSorting";

const AllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [sort, setSort] = useState("default"); // Default sort
  const [toogleSort, setToogleSort] = useState(false);

  const handleToogleSort = () => {
    setToogleSort(!toogleSort);
  };

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${local}/product/newArrival`, {
          withCredentials: true,
        });
        setAllProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sort === "price Low To High") return a.offerPrice - b.offerPrice;
    if (sort === "price High To Low") return b.offerPrice - a.offerPrice;
    if (sort === "Top Rated")
      return b.reviews[0]?.rating - a.reviews[0]?.rating || 0;
    return 0; // Default sorting
  });

  return (
    <div className="mt-24 mb-28">
      <header className="text-center mb-2">
        <h1 className="text-3xl font-bold text-indigo-900">Our Products</h1>
        <p className="text-gray-600 mt-2">
          Explore our latest collection of products tailored just for you!
        </p>
      </header>

      <div className="grid grid-cols-12 w-full max-w-7xl 2xl:max-w-[1500px] mx-auto gap-4">
        <div className="col-span-2 ">
          <AllProductsSorting />
        </div>
        <div className="col-span-10 ">
          <AllProductsItems
            handleToogleSort={handleToogleSort}
            toogleSort={toogleSort}
            allProducts={sortedProducts}
            loading={loading}
            sort={sort} // Pass the sort value
            setSort={setSort}
          />
        </div>
      </div>
    </div>
  );
};


export default AllProducts;
