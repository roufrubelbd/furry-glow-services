import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Services/Services.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import "animate.css";
import Details from "./components/Details/Details.jsx";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import BookNow from "./components/BookNow/BookNow.jsx";

export const AuthContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/home",
        Component: Home,
        loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/services",
        Component: Services,
        loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/services/:id",
        element: <Details />,
        loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/pricing",
        element: <Pricing />,
        loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/booknow",
        element: <BookNow />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "//forgot-password",
        Component: ForgetPassword,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
