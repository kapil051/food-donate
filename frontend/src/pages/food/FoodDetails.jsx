import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axiosInstance from "../../utils/axiosInstance";
import { useParams } from "react-router-dom";

function FoodDetails() {
  const [foodDetails, setFoodDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const capitalizeFirstLetter = (string) => {
    if (!string) return "N/A";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    const fetchFoodAndUserDetails = async () => {
      try {
        const foodResponse = await axiosInstance.get(`/food/detail/${id}`);
        if (foodResponse.status === 200) {
          const foodData = foodResponse.data.food;
          setFoodDetails(foodData);

          const userId = foodData.userId;
          const userResponse = await axiosInstance.get(`/user/${userId}`);
          if (userResponse.status === 200) {
            setUserDetails(userResponse.data.user);
          } else {
            console.error("Error fetching user details:", userResponse.data.msg);
          }
        } else {
          console.error("Error fetching food details:", foodResponse.data.msg);
        }
      } catch (error) {
        console.error("Error fetching food and user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodAndUserDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!foodDetails) {
    return <div>Food item not found.</div>;
  }

  const {
    foodType,
    foodName,
    foodImage,
    quantity,
    note,
    pickupLocation,
    expiryDate,
    pickupTime,
    phoneNo,
  } = foodDetails;

  const {
    name: userName,
    userImage
  } = userDetails || {};

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Food Details</title>
        <meta name="description" content="Food details page" />
      </Helmet>
      <section className="dark:bg-gray-100">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col md:ml-24 md:mt-20 px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
            <h1 className="text-3xl">Food Details</h1>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  <span className="font-semibold">Food Name:</span> {capitalizeFirstLetter(foodName)}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Food Type:</span> {capitalizeFirstLetter(foodType)}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Note:</span> {capitalizeFirstLetter(note)}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Quantity:</span> {quantity || "N/A"}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Expiration Date:</span> {expiryDate ? new Date(expiryDate).toLocaleDateString() : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  <span className="font-semibold">Phone No.:</span> {phoneNo || "N/A"}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Pickup Time:</span> {pickupTime || "N/A"}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Pickup Location:</span> {capitalizeFirstLetter(pickupLocation)}
                </p>
              </div>
            </div>
            {userDetails && (
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    <span className="font-semibold">User Name:</span> {capitalizeFirstLetter(userName)}
                  </p>
                  {userImage && (
                    <img
                      src={userImage}
                      alt={userName || "User Image"}
                      className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video w-[100px] h-[100px]"
                    />
                  )}
                </div>
              </div>
            )}
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <label htmlFor="my_modal_6" className="btn">
                  Request
                </label>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={foodImage}
                alt={foodName || "Food Image"}
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
