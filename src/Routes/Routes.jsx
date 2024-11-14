import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/auth/Login/Login";
import Register from "../Pages/auth/Register/Register";
import Layout from "../Pages/auth/Layout";
import RegisterOtp from "../Pages/auth/Register/RegisterOtp/RegisterOtp";
import { ProfileProvider } from "../ProfileProvider/ProfileProvider";
import EmailRecap from "../Pages/auth/ForgotPass/EmailRecap/EmailRecap";
import ForgotPassOtp from "../Pages/auth/ForgotPass/ForgotPassOtp/ForgotPassOtp";
import ConfirmPass from "../Pages/auth/ForgotPass/ConfirmPass/ConfirmPass";
import ProfileInfo from "../Pages/ProfileInfo/ProfileInfo";
import ProfileEditPopup from "../Components/ProfileInfo/ProfileEditPopup/ProfileEditPopup";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProfileProvider>
            <Home />
          </ProfileProvider>
        ),
      },
      {
        path: "/profileInfo",
        element: <ProfileInfo />,
      },
      { path: "/profileEdit/edit/basicInfo", element: <ProfileEditPopup /> },
      {path:"/contact", element:<Contact/>},

      {
        path: "/auth",
        element: <Layout />,
        children: [
          { path: "/auth/login", element: <Login /> },
          { path: "/auth/register", element: <Register /> },
          { path: "/auth/register/otp", element: <RegisterOtp /> },
          { path: "/auth/forgotPass/emailRecap", element: <EmailRecap /> },
          { path: "/auth/forgotPass/verify-otp", element: <ForgotPassOtp /> },
          { path: "/auth/forgotPass/confirmPass", element: <ConfirmPass /> },
        ],
      },
    ],
  },
]);
