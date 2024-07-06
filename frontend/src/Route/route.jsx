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
