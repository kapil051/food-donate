import React from "react";
import { Link } from "react-router-dom";
function Card(item) {
    console.log(item.item);
  return (
    <div key={item.id}>
      <div className="   ">
        <div className="  max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <img
            className=" object-cover w-full h-64"
            src={item.item.food_image}
            alt="Article"
          />

          <div className="p-6 hover:bg-lime-100 hover:duration-300 ">
            <div>
              <span className="text-2xl font-medium text-[#15803D] uppercase ">
                {item.item.food_name}
              </span>
              <a
                href="#"
                className="block mt-2 text-sm font-thin text-gray-800 transition-colors duration-300 transform dark:text-white "
                tabIndex="0"
                role="link"
              >
                Food Quantity: {item.item.food_quantity}
              </a>
              <p className="mt-2 text-base font-bold text-gray-600 dark:text-gray-400">
                 NOTE: {item.item.food_note}
              </p>
            </div>

            <div className="mt-4">
              <span className="text-sm">
                Pickup Location: {item.item.pickup_location}
              </span>
            </div>
            <div className="text-sm capitalize text-gray-600 py-2">
                Food Type: {item.item.food_type}
              </div>
            <span className=" text-sm text-gray-600 dark:text-gray-300">
              Expiry Date: {item.item.expiry_date}
            </span>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 w-10 rounded-full"
                    src={item.item.user_image}
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {item.item.user_name}
                  </a>
                </div>
                <Link to={`#`}>
                  {" "}
                  <button className=" btn btn-sm btn-success font-medium ml-6">
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
