import React from "react";
import { Link } from "react-router-dom";
import veg from "../../assets/icons/veg.png";
import nonveg from "../../assets/icons/nonveg.png";
import noimage from "../../assets/icons/noimage.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Card(item) {
  console.log(item.item);
  return (
    <div key={item.id}>
      <div className="   ">
        <div className="  max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          {item.item.foodImage == "" ? (
            <img
              className="object-center w-full h-64 "
              src={noimage}
              width="50"
              height="50"
              alt="Article"
            />
          ) : (
            <img
              className=" object-cover w-full h-64"
              src={item.item.foodImage}
              alt="Article"
            />
          )}

          <div className="p-6 hover:bg-lime-100 hover:duration-300 ">
            <div>
              <span className="text-2xl font-medium text-[#15803D] uppercase ">
                {item.item.foodName}
              </span>
              <a
                href="#"
                className="block mt-2 text-sm font-thin text-gray-800 transition-colors duration-300 transform dark:text-white "
                tabIndex="0"
                role="link"
              >
                Food Quantity: {item.item.quantity}
              </a>
              <p className="mt-2 text-base font-bold capitalize text-gray-600 dark:text-gray-400">
                NOTE: {item.item.note}
              </p>
            </div>

            <div className="mt-4">
              <span className="text-sm capitalize">
                Pickup Location: {item.item.pickupLocation}
              </span>
            </div>
            <div className="text-sm capitalize text-gray-600 py-2 flex flex-row items-center">
              Food Type:
              {item.item.foodType == "nonveg" ? (
                <img src={nonveg} alt="Veg" width="30" height="30" />
              ) : (
                <img src={veg} alt="Veg" width="30" height="30" />
              )}
            </div>
            <span className=" text-sm text-gray-600 dark:text-gray-300">
              Expiry Date: {item.item.expiryDate.substr(0, 10)}
            </span>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <AccountCircleIcon/>
                  {/* {item.item.user_image==""?<AccountCircleIcon/>:<img
                    className="object-cover h-10 w-10 rounded-full"
                    src={item.item.user_image}
                    alt="Avatar"
                  />} */}
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    User Name
                  </a>
                </div>
                <Link to={`/food-item/${item.item._id}`}>
                  <button className=" w-full bg-green-600 text-white px-4 py-2 mb-2 rounded-xl hover:bg-green-700 transition duration-300 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
