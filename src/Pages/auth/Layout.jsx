import { Outlet } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <div className="login flex items-center justify-center">
        <div className="bg-white w-full opacity-90 lg:w-[30rem] shadow-md shadow-gray-400 py-8 px-12 rounded-xl">
            <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Layout;
