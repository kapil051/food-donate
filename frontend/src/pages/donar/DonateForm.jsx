import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import bgimage from "../../assets/background_img/bg_1.jpg";

const DonateForm = () => {

  const url = "/foods";

  // user data
  const [formData, setFormData] = useState({
    food_name: "",
    food_type: "",
    food_image: "",
    food_quantity: "",
    food_note: "",
    pickup_location: "",
    expiry_date: "",
    user_image: "",
    user_name: "",
    phone_no: "",
    pickup_time: "",
  });

  const [image, setImage] = useState(null);
  const[count,setCount]=useState(0);
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(file);
      setFormData({
        ...formData,
        food_image: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  //   change function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setCount(count+1)
    console.log(formData);
    console.log(count);
  };

  // submit function
  const handleFoodData = (e) => {
    e.preventDefault();
    const form = e.target;
    setFormState({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const foodItems = {
      food_name,
      food_type,
      food_image,
      food_quantity,
      food_note,
      pickup_location,
      expiry_date,
      user_image,
      user_name,
      phone_no,
      pickup_time,
    };
    console.log(foodItems);

  };

  return (
    <div
      className="hero min-h-screen opacity-90 md:p-9  bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${bgimage})` , backgroundSize: "cover", }}
    >
      <Helmet>
        <html lang="en" />
        <title>Donate</title>
        <meta name="description" content="Basic example" />
      </Helmet>
      <div className="card bg-white bg-opacity-50 shadow-lg px-6 py-16 mb-5 mt-5 w-10/12">
        {/* shown data */}
        <div className="p-6 mb-10 border border-black shadow-b shadow-2xl bg-white bg-opacity-60  rounded-xl  space-y-6">
                <h1 className="text-2xl font-semibold">Donar Info</h1>
                 <span className="flex items-center space-y-6 font-bold "><span className="mr-5">Profile-Photo: </span>
                 <img className="border rounded-xl w-24" src={formData.user_image} alt="" /></span>

                 <p className="place-content-betweenfont-bold">Name : {formData.user_name}</p>
                 <p className="font-bold">Email : email@gmail.com </p>
            </div>
        <form
          onSubmit={handleFoodData}
          data-aos="fade-up "
          className=" grid grid-cols-1 gap-y-10"
          data-aos-duration="1000"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-10 w-full  place-content-between place-items-stretch">
            <div className="md:gap-y-2 grid grid-cols-1 gap-y-4">
              {/* food_name */}
              <div className="">
                <label className="label">
                  <span className="label-text text-black font-bold text-lg">
                    Food Name :
                  </span>
                </label>
                <input
                  type="text"
                  name="food_name"
                  placeholder="Food Name"
                  className="input"
                  value={formData.food_name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* pickup_location */}
              <div className="">
                <label className="label">
                  <span className="label-text text-black font-bold text-lg">
                    Pickup Location :
                  </span>
                </label>
                <input
                  type="text"
                  name="pickup_location"
                  placeholder="Pickup location"
                  className="input"
                  value={formData.pickup_location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:flex items-center justify-between grid grid-cols-1 gap-y-4">
                {/* food_quantity */}
                <div className="">
                  <label className="label">
                    <span className="label-text text-black font-bold text-lg">
                      Quantity :
                    </span>
                  </label>

                  <select
                    className="input border w-20"
                    placeholder="Quantity"
                    type="text"
                    name="food_quantity"
                    id="food_quantity"
                    value={formData.food_quantity}
                    onChange={handleChange}
                  >
                    <option value="10">10</option>
                    <option value="20">
                      <span>20</span>
                    </option>
                    <option value="30">
                      <span>30</span>
                    </option>
                    <option value="40">
                      <span>40</span>
                    </option>
                    <option value="50">
                      <span>50</span>
                    </option>
                    <option value="60">
                      <span>60</span>
                    </option>
                  </select>
                </div>

                {/* food_type */}
                <div className="">
                  <label className="label">
                    <span className="label-text text-black font-bold text-lg">
                      Food Type :
                    </span>
                  </label>

                  <select
                    className="input border w-28"
                    placeholder="Food Type"
                    type="text"
                    name="food_type"
                    id="food_type"
                    value={formData.food_type}
                    onChange={handleChange}
                  >
                    <option value="veg">Veg</option>
                    <option value="nonveg">
                      <span>Non Veg</span>
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* food_image */}
            <div className="flex flex-col gap-y-2">
              <div className="">
                {formData.food_image ? (
                  <img
                    src={formData.food_image}
                    alt="uploaded"
                    style={{
                      maxWidth: "160px",
                      maxHeight: "160px",
                      minHeight: "160px",
                      minWidth: "160px",
                    }}
                    className="max-w-full max-h-full "
                  />
                ) : (
                  <div className="  bg-white w-40 h-40 text-center flex justify-center items-center">
                    No image uploaded
                  </div>
                )}
              </div>
              <div className="flex gap-x-2">
                <label className="label">
                  <span className="label-text text-black font-bold text-lg">
                    Food Image :
                  </span>
                </label>
                <input type="file" onChange={handleImageChange} />
              </div>
            </div>

            {/* expired date */}
            <div className="  ">
              <label className="label">
                <span className="label-text text-black font-bold text-lg">
                  Expiry Date :
                </span>
              </label>
              <input
                type="date"
                name="expiry_date"
                placeholder="Expiration Date"
                className="input input-bordered"
                value={formData.expiry_date}
                onChange={handleChange}
                required
              />
            </div>

            {/* pickup time */}
            <div className="  ">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Pickup Time :
                </span>
              </label>
              <input
                type="time"
                name="pickup_time"
                placeholder="Expiration Date"
                className="input input-bordered "
                value={formData.pickup_time}
                onChange={handleChange}
                required
              />
            </div>

            {/* note */}
            <div className="md:flex items-center gap-8 ">
              <div className="w-full ">
                <label className="label">
                  <span className="label-text  text-black font-bold text-lg">
                    Note :
                  </span>
                </label>
                <input
                  type="text"
                  name="food_note"
                  placeholder="Note(if any)"
                  className="input"
                  onChange={handleChange}
                  value={formData.food_note}
                />
              </div>
            </div>

            {/* phone_no*/}
            <div className="md:flex items-center gap-8 ">
              <div className="w-full ">
                <label className="label">
                  <span className="label-text font-bold text-black text-lg">
                    Phone no :
                  </span>
                </label>
                <input
                  type="text"
                  name="phone_no"
                  placeholder="10 digits"
                  className="input"
                  onChange={handleChange}
                  value={formData.phone_no}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn  text-white cursor-pointer "
            onSubmit={handleFoodData}
          />
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
