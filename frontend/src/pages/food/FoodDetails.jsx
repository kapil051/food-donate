import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axiosInstance from "../../utils/axiosInstance";
import { useParams } from "react-router-dom";
import veg from "../../assets/icons/veg.png";
import nonveg from "../../assets/icons/nonveg.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Swal from "sweetalert2";

function FoodDetails() {
  const [foodDetails, setFoodDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const capitalizeFirstLetter = (string) => {
    if (!string) return "N/A";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  // Dialog box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Dialog box form
  const initialFormState = {
    requestQuantity: "1",
    requestNote: "",
    ngoNumber: "",
    purpose: "individual",
  };
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendRequest = async () => {
    try {
      const response = await axiosInstance.post(`/food/request/${id}`, formData);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Request Sent',
          text: 'Your request has been sent successfully!',
          color:"green",
          confirmButtonColor: 'green',
        });
        setFormData(initialFormState);
        handleClose();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Request Failed',
          text: 'Failed to send request. Please try again.',
          color:"red",
          confirmButtonColor: 'red',
        });
        handleClose();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Request Failed',
        text: 'Failed to send request. Please try again.',
        color:"red",
        confirmButtonColor: 'red',
      });
      handleClose();
    }
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

  const { name: userName, userImage, email: userEmail } = userDetails || {};

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Food Details</title>
        <meta name="description" content="Food details page" />
      </Helmet>
      <section className="bg-[#F5F5F5] pt-16">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col md:ml-24 md:mt-20 px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5  ">
            <h1 className="text-3xl capitalize leading-tight">
              {capitalizeFirstLetter(foodName)}
            </h1>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="leading-snug flex flex-row gap-x-2 items-center">
                  <span className="font-semibold">Food Type:</span>{" "}
                  {foodType === "nonveg" ? (
                    <img src={nonveg} alt="Non-Veg" width="30" height="30" />
                  ) : (
                    <img src={veg} alt="Veg" width="30" height="30" />
                  )}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Note:</span>{" "}
                  {capitalizeFirstLetter(note)}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {quantity || "N/A"}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Expiration Date:</span>{" "}
                  {expiryDate
                    ? new Date(expiryDate).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  <span className="font-semibold">Donar Phone No.:</span>{" "}
                  {phoneNo || "N/A"}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Pickup Time:</span>{" "}
                  {pickupTime || "N/A"}
                </p>
                <p className="leading-snug">
                  <span className="font-semibold">Pickup Location:</span>{" "}
                  {capitalizeFirstLetter(pickupLocation)}
                </p>
              </div>
            </div>
            {userDetails && (
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    <span className="font-semibold">Donar Name:</span>{" "}
                    {capitalizeFirstLetter(userName)}
                  </p>
                  <p className="leading-snug">
                    <span className="font-semibold">Donar Email Id:</span>{" "}
                    {capitalizeFirstLetter(userEmail)}
                  </p>
                </div>
              </div>
            )}
            <div
              className="text-center bg-[#ABD700] text-black font-semibold px-4 py-2 mb-2 rounded-md hover:bg-[#353535] hover:scale-x-110 hover:text-white transition duration-300 ease-in-out cursor-pointer"
              onClick={handleClickOpen}
            >
              Request
            </div>
            {/* Dialog box */}
            <Dialog
              open={open}
              onClose={handleClose}
              PaperProps={{
                component: "form",
                onSubmit: (event) => {
                  event.preventDefault();
                  sendRequest();
                },
              }}
            >
              <DialogTitle>Request Details</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To send a food request to the donor, please enter these details so that we can connect you.
                </DialogContentText>
                <input
                  type="number"
                  placeholder="Enter quantity of food"
                  className="w-full py-2 my-4"
                  name="requestQuantity"
                  value={formData.requestQuantity}
                  onChange={handleChange}
                />
                <select
                  className="input border w-full my-4"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>
                    Purpose
                  </option>
                  <option value="individual">Individual</option>
                  <option value="ngo">NGO</option>
                  <option value="volunteer">Volunteer</option>
                </select>
                <input
                  type="text"
                  placeholder="Valid NGO number (applicable only for NGO)"
                  className="w-full py-2 my-4"
                  name="ngoNumber"
                  value={formData.ngoNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Note"
                  className="w-full py-2 my-4"
                  name="requestNote"
                  value={formData.requestNote}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Send</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={foodImage}
                alt={foodName || "Food Image"}
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video w-[800px] min-h-svh transition duration-300 ease-in-out hover:scale-95"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FoodDetails;
