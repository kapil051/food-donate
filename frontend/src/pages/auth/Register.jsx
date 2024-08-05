import React, { useState, useContext } from "react";
import image from "../../assets/lottie/login.json";
import { AuthContext } from "../../context/AuthContext";
import Lottie from "react-lottie";
import Swal from "sweetalert2";
const SignupPage = () => {
  const { register, loader } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    contact: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const validatePassword = () => {
    const { password, confirmPassword } = formData;

    switch (true) {
      case password !== confirmPassword:
        return "Passwords do not match";
      case password.length < 8:
        return "Password must be at least 8 characters long";
      case !/[A-Z]/.test(password):
        return "Password must contain at least one uppercase letter";
      case !/[a-z]/.test(password):
        return "Password must contain at least one lowercase letter";
      case !/[0-9]/.test(password):
        return "Password must contain at least one number";
      case !/[!@#$%^&*]/.test(password):
        return "Password must contain at least one special character";
      default:
        return "";
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword();
    if (passwordError) {
      setError(passwordError);
      Swal.fire({
        title: "Failed! Please try again",
        text: error,
        icon: "error",
        color: "red",
        confirmButtonColor: "red",
      });
      return;
    }

    try {
      await register({
        email: formData.email,
        name: formData.name,
        gender: formData.gender,
        contact: formData.contact,
        address: formData.address,
        password: formData.password,
      });
      console.log("User registered successfully");
    } catch (e) {
      console.error("Signup error:", e);
      setError("Signup failed. Please try again.");
      Swal.fire({
        title: "Failed! Please try again",
        text: error,
        icon: "error",
        color: "red",
        confirmButtonColor: "red",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5] pt-16">
      <div className="flex flex-1 items-center justify-center p-6 py-16">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#353535] leading-tight">
            Fill your details correctly!
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ABD700] focus:border-[#ABD700] sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ABD700] focus:border-[#ABD700] sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ABD700] focus:border-[#ABD700] sm:text-sm"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number:
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ABD700] focus:border-[#ABD700] sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ABD700] focus:border-[#ABD700] sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ABD700] focus:border-[#ABD700] sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ABD700] focus:border-[#ABD700] sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loader}
                className={`w-full flex justify-center py-2 leading-tight px-4 border  border-transparent rounded-md shadow-sm text-xl font-medium transition duration-300 ease-in-out hover:bg-black hover:scale-x-110 text-white ${
                  loader ? "bg-gray-400" : "bg-[#BA75DA] hover:bg-[#353535]"
                } focus:outline-none`}
              >
                {loader ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center p-6 lg:h-auto">
        <Lottie options={defaultOptions} height={550} width={550} />
      </div>
    </div>
  );
};

export default SignupPage;
