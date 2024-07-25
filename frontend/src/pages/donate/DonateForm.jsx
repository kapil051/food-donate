import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { Helmet } from "react-helmet";
import bgimage from "../../assets/background_img/bg_1.jpg";
import { AuthContext } from '../../context/AuthContext';
import Swal from "sweetalert2";
const DonateForm = () => {
  const { user, logout } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [minDate, setMinDate] = useState('');

  const initialFormState = {
    foodName: "",
    foodType: "veg",
    foodImage: "",
    quantity: 10,
    note: "",
    pickupLocation: "",
    expiryDate: "",
    phoneNo: "",
    pickupTime: "",
  };
  
  const [formData, setFormData] = useState(initialFormState);
 

  // for image pick
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(file);
      setFormData((prev) => ({
        ...prev,
        foodImage: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // for date pick 
  const handleDate=() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFoodData = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/food/donate", formData);
      console.log("result", res);
      if(res){
        Swal.fire({
            title: "Congratulations!",
            text: "Added Successfully",
            icon: "success",
            color:"green",
            confirmButtonColor: 'green',
          });
      }
      setFormData(initialFormState);
      setImage(null);
    } catch (error) {
      console.log("error", error.response);
      if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        alert("Please login again. Session has timed out.");
        await logout();
      }
      Swal.fire({
        title: "OOPS! Error has occured",
        text: "You can try again",
        icon: "error",
        color:"red",
        confirmButtonColor: 'red',
      });
    }
  };
  useEffect(()=>{
    handleDate();
  })
  return (
    <div
      className="hero min-h-screen opacity-90 md:p-9 bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
    >
      <Helmet>
        <html lang="en" />
        <title>Donate</title>
        <meta name="description" content="Donate food form" />
      </Helmet>
      <div className="card bg-white bg-opacity-50 shadow-lg px-6 py-16 mb-5 mt-5 w-10/12">
        <div className="p-6 mb-10 border border-black shadow-b shadow-2xl bg-white bg-opacity-60 rounded-xl space-y-6">
          <h1 className="text-2xl font-semibold">Donor Info</h1>
          <p className="font-bold">Name: {user.name}</p>
          <p className="font-bold">Email: {user.email}</p>
        </div>

        <form onSubmit={handleFoodData} className="grid grid-cols-1 gap-y-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-10 w-full place-content-between place-items-stretch">
            <div className="md:gap-y-2 grid grid-cols-1 gap-y-4">
              <div>
                <label className="label">
                  <span className="label-text text-black font-bold text-lg">Food Name:</span>
                </label>
                <input
                  type="text"
                  name="foodName"
                  placeholder="Food Name"
                  className="input"
                  value={formData.foodName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-black font-bold text-lg">Pickup Location:</span>
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pickup location"
                  className="input"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:flex items-center justify-between grid grid-cols-1 gap-y-4">
                <div>
                  <label className="label">
                    <span className="label-text text-black font-bold text-lg">Quantity:</span>
                  </label>
                  <select
                    className="input border w-20"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  >
                    {[10, 20, 30, 40, 50, 60].map((qty) => (
                      <option key={qty} value={qty}>{qty}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-black font-bold text-lg">Food Type:</span>
                  </label>
                  <select
                    className="input border w-28"
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleChange}
                  >
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non Veg</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <div>
                {formData.foodImage ? (
                  <img
                    src={formData.foodImage}
                    alt="uploaded"
                    className="max-w-full max-h-full"
                    style={{
                      maxWidth: "160px",
                      maxHeight: "160px",
                      minHeight: "160px",
                      minWidth: "160px",
                    }}
                  />
                ) : (
                  <div className="bg-white w-40 h-40 text-center flex justify-center items-center">
                    No image uploaded
                  </div>
                )}
              </div>
              <div className="flex gap-x-2">
                <label className="label">
                  <span className="label-text text-black font-bold text-lg">Food Image:</span>
                </label>
                <input type="file" onChange={handleImageChange} />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black font-bold text-lg">Expiry Date:</span>
              </label>
              <input
                type="date"
                name="expiryDate"
                className="input input-bordered"
                value={formData.expiryDate}
                onChange={handleChange}
                min={minDate}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black text-lg font-bold">Preferrable Pickup Time:</span>
              </label>
              <input
                type="time"
                name="pickupTime"
                className="input input-bordered"
                value={formData.pickupTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="md:flex items-center gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-black font-bold text-lg">Note:</span>
                </label>
                <input
                  type="text"
                  name="note"
                  placeholder="Note (if any)"
                  className="input"
                  value={formData.note}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="md:flex items-center gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="label-text font-bold text-black text-lg">Phone No:</span>
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  placeholder="10 digits"
                  className="input"
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="w-full bg-[#ABD700] text-black font-semibold text-xl px-4 py-2 mb-2 rounded-xl hover:bg-[#9bc202] transition duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
