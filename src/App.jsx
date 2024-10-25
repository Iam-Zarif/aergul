
import './App.css'
import Cover from './Components/Cover/Cover'
import HomeGallery from './Components/HomeGalary/HomeGalary'
import NewArrival from './Components/NewArrival/NewArrival'
import SpecialOffer from './Components/SpecialOffer/SpecialOffer'
import TopRated from './Components/TopRated/TopRated'
import Footer from './Shared/Footer/Footer'
import Navbar from './Shared/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <div className=''>
        <Cover />
        <NewArrival />
        <SpecialOffer />
        <TopRated/>
        <HomeGallery/>
        <Footer/>
      </div>
    </>
  );
}

export default App
