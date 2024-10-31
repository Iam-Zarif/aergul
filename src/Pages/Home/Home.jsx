import Cover from "../../Components/Cover/Cover";
import NewArrival from "../../Components/NewArrival/NewArrival";
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer";
import TopRated from "../../Components/TopRated/TopRated";
import HomeGallery from "../../Components/HomeGalary/HomeGalary";

const Home = () => {
  return (
    <div className="mt-14">
      <Cover />
      <NewArrival />
      <SpecialOffer />
      <TopRated />
      <HomeGallery />
     
    </div>
  );
}

export default Home