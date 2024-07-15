import React from "react";
import { Helmet } from "react-helmet";
import { foodDetails } from "../../utils/data/FoodDetails";
function FoodDetails() {
  const {
    food_type,
    food_name,
    food_image,
    food_quantity,
    food_note,
    pickup_location,
    expiry_date,
    user_name,
    user_image,
    phone_no,
    pickup_time,
  } = foodDetails[1];
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Food Details</title>
        <meta name="description" content="Basic example" />
      </Helmet>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col md:ml-24 md:mt-20 px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
            <h1 className="text-3xl">Food Details</h1>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  <span className="font-semibold">Food Name:</span> {food_name}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Food Type:</span> {food_type}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Note:</span> {food_note}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Food Quantity:</span>{" "}
                  {food_quantity}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Expiration-Date:</span>{" "}
                  {expiry_date}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  User Name: {user_name}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Phone No.:</span> {phone_no}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Pickup Time:</span>{" "}
                  {pickup_time}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Pickup Location:</span>{" "}
                  {pickup_location}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                {/* The button to open modal */}
                <label htmlFor="my_modal_6" className="btn">
                  Request
                </label>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={food_image}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video w-[800px] min-h-svh"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FoodDetails;
