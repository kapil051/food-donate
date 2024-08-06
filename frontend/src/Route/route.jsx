import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import DonateForm from "../pages/donate/DonateForm";
import AvailableFood from "../pages/food/AvailableFood";
import FoodDetails from "../pages/food/FoodDetails";
import Root from "../layout/Root";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MyFood from "../pages/history/MyFood";
import MyFoodRequest from "../pages/history/MyFoodRequest";
import NotFound from "../pages/NotFound";
import { AuthContext } from "../context/AuthContext";

const Router = () => {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/donate-food",
          element: user ? <DonateForm /> : <Navigate to="/login" />,
        },
        {
          path: "/available-food",
          element: <AvailableFood />,
        },
        {
          path: "/food-item/:id",
          element: user ? <FoodDetails /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: user ? <Navigate to="/" /> : <Login />,
        },
        {
          path: "/register",
          element: user ? <Navigate to="/" /> : <Register />,
        },
        {
          path: "/my-foods",
          element: user ? <MyFood /> : <Navigate to="/login" />,
        },
        {
          path: "/my-foodrequest",
          element: user ? <MyFoodRequest /> : <Navigate to="/login" />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
