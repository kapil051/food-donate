import React, { useState } from "react";
import contact from "../../assets/background_img/contact.jpg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";;
const Contact = () => {
  const initialData={
    name:"",
    email:"",
    message:"",
  }
  const [formData,setFormData]=useState(initialData)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = { publicKey: import.meta.env.VITE_API_EMAIL_PUBLIC_KEY };
    await emailjs
      .send(
        import.meta.env.VITE_API_EMAIL_SERVICE_ID,
        import.meta.env.VITE_API_EMAIL_TEMPLATE_ID,
        formData,
        options
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // handle toastify
          Swal.fire({
            title: "Message Sent Successfully",
            text: "We will connect you soon",
            icon: "success",
            color: "green",
            confirmButtonColor: "green",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          Swal.fire({
            title: "OOPS! Message is not sent correctly",
            text: "You can try again",
            icon: "error",
            color: "red",
            confirmButtonColor: "red",
          });
        }
      );
      setFormData(initialData)
  };
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between items-center ">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Contact Us
          </h2>
          <div className="dark:text-gray-600">
            Contact now if you need to know anything regarding about our
            service.
          </div>
        </div>
        <img src={contact} alt="" className="  p-6  w- h-[350px] " />
      </div>
      <form
        noValidate=""
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="name"
            value={formData.name}
            required
            className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className=" input input-bordered w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=" input input-bordered w-full p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button className=" w-full bg-green-600 text-white px-4 py-2 mb-2 rounded-xl hover:bg-green-700 transition duration-300 cursor-pointer">
          Send Messages
        </button>
      </form>
    </div>
  );
};

export default Contact;
