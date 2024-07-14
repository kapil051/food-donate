// import React, { useContext } from 'react';
// import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
// import Home from "../pages/Home";
// import DonateForm from "../pages/donate/DonateForm";
// import AvailableFood from "../pages/food/AvailableFood";
// import FoodDetails from "../pages/food/FoodDetails";
// import Root from "../layout/Root";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import Profile from "../pages/user/Profile";
// import MyFoods from "../pages/user/MyFoods";
// import Blogs from "../pages/Blogs";
// import NotFound from "../pages/NotFound"; 
// import { AuthContext } from '../context/AuthContext';

// const Router = () => {
//   const { user } = useContext(AuthContext);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/donatefood",
//           element: user ? <DonateForm /> : <Navigate to="/login" />,
//         },
//         {
//           path: "/available-food",
//           element: <AvailableFood />,
//         },
//         {
//           path: "/food-item",
//           element: user ? <FoodDetails /> : <Navigate to="/login" />,
//         },
//         {
//           path: "/login",
//           element: user ? <Navigate to="/" /> : <Login />,
//         },
//         {
//           path: "/register",
//           element: user ? <Navigate to="/" /> : <Register />,
//         },
//         {
//           path: "/profile",
//           element: user ? <Profile /> : <Navigate to="/login" />,
//         },
//         {
//           path: "/my-foods",
//           element: user ? <MyFoods /> : <Navigate to="/login" />,
//         },
//         {
//           path: "/blogs",
//           element: <Blogs />,
//         },
//         {
//           path: "*", 
//           element: <NotFound />, 
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default Router;
import React, { useContext } from 'react';
import Home from "../pages/Home";
import DonateForm from "../pages/donar/DonateForm";
import AvailableFood from "../pages/volunteer/AvailableFood";
import FoodDetails from "../pages/volunteer/FoodDetails";
import Root from "../layout/Root";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donatefood",
        element: <DonateForm></DonateForm>,
      },
      {
        path: "/availablefood",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/fooditem",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
    ],
  },
]);
export default router;