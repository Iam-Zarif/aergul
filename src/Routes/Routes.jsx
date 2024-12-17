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
import ProductDynamicPage from "../ProductDynamicPage/ProductDynamicPage";
import AllProducts from "../Pages/AllProducts/AllProducts";
import { local } from "../Api/LocalApi";
import ViewCartPage from "../Pages/ViewCartPage/ViewCartPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingleItemCheckoutPage from "../Pages/SingleItemCheckoutPage/SingleItemCheckoutPage";
import SingleitemVisaPaymentPage from "../Pages/SingleitemVisaPaymentPage/SingleitemVisaPaymentPage";
import SingleItemMasterCardPaymentPage from "../Pages/SingleitemMasterCardPaymentPage/SingleitemMasterCardPaymentPage";
import SingleItemPayPalPaymentPage from "../Pages/SingleItemPayPalPaymentPage/SingleItemPayPalPaymentPage";

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
      { path: "/collections", element: <AllProducts /> },
      { path: "/profileEdit/edit/basicInfo", element: <ProfileEditPopup /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/product/:id",
        element: <ProductDynamicPage />,
        loader: ({ params }) =>
          fetch(`${local}/product/newArrival/${params.id}`),
      },
      { path: "/myCart", element: <ViewCartPage /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/checkout", element: <SingleItemCheckoutPage /> },
      {
        path: "/singleItemVisaPayment",
        element: <SingleitemVisaPaymentPage />,
      },
      {
        path: "/singleItemMasterCardPayment",
        element: <SingleItemMasterCardPaymentPage />,
      },

 { path: "/singleItemPayPalPayment", element: <SingleItemPayPalPaymentPage /> },

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
