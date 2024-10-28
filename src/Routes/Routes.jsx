import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/auth/Login/Login";
import Register from "../Pages/auth/Register/Register";
import Layout from "../Pages/auth/Layout";
import RegisterOtp from "../Pages/auth/Register/RegisterOtp/RegisterOtp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/auth",
        element: <Layout />,
        children: [
          { path: "/auth/login", element: <Login /> },
          { path: "/auth/register", element: <Register /> },
          { path: "/auth/register/otp", element: <RegisterOtp /> },
        ],
      },
    ],
  },
]);
