import Home from "../pages/Home";
import DonateForm from "../pages/donar/DonateForm";
import AvailableFood from "../pages/volunteer/AvailableFood";
import FoodDetails from "../pages/volunteer/FoodDetails";
import Root from "../layout/Root";
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
    ],
  },
]);
export default router;
