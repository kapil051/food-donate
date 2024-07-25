import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import veg from "../../assets/icons/veg.png";
import nonveg from "../../assets/icons/nonveg.png";
import noimage from "../../assets/icons/noimage.jpg";

function Card({ item }) {
  
  return (
    <div
      key={item._id}
      className="w-11/12 transition duration-300 ease-in-out hover:scale-105 "
    >
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-xl w-full">
        {item.foodImage === "" ? (
          <img
            className="object-center w-full h-64"
            src={noimage}
            width="50"
            height="50"
            alt="No Image Available"
          />
        ) : (
          <img
            className="object-cover w-full h-64"
            src={item.foodImage}
            alt={item.foodName}
          />
        )}

        <div className="p-6  bg-[#E5E5E5] ">
          <div>
            <span className="text-2xl font-bold text-[#353535] uppercase leading-tight">
              {item.foodName}
            </span>
            <a
              href="#"
              className="block mt-2 text-sm font-thin text-gray-800 transition-colors duration-300 transform dark:text-white"
              tabIndex="0"
              role="link"
            >
              Food Quantity: {item.quantity}
            </a>
            <p className="mt-2 text-base font-bold capitalize text-gray-600 dark:text-gray-400">
              NOTE: {item.note}
            </p>
          </div>

          <div className="mt-4">
            <span className="text-sm capitalize">
              Pickup Location: {item.pickupLocation}
            </span>
          </div>
          <div className="text-sm capitalize text-gray-600 py-2 flex flex-row items-center">
            Food Type:
            {item.foodType === "nonveg" ? (
              <img src={nonveg} alt="Non-Veg" width="30" height="30" />
            ) : (
              <img src={veg} alt="Veg" width="30" height="30" />
            )}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Expiry Date: {item.expiryDate.substr(0, 10)}
          </span>
          <div className="mt-4 flex-col flex  w-full gap-y-4">
            <div className="flex items-center">
              <FaUserCircle
                className="text-gray-700 dark:text-gray-200"
                size={24}
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabIndex="0"
                role="link"
              >
                User Name
              </a>
            </div>
            <Link to={`/food-item/${item._id}`}>
              <button className="self-center w-full bg-[#BA75DA] text-black  font-semibold px-4 py-2 mb-2 rounded-md  hover:bg-[#353535] hover:scale-x-105 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
