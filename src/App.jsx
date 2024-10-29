import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-14">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
