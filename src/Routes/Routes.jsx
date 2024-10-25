import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/auth/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/" , element:<Home/>},
      {path:"/login" , element:<Login/>}
    ]
  },
]);


