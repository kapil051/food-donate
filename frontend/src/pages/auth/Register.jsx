import React, { useState, useContext } from "react";
import image from "../../assets/signupImage.svg";
import { AuthContext } from "../../context/AuthContext";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword();
    if (passwordError) {
      setError(passwordError);
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
    } catch (error) {
      console.error("Signup error:", error);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact Number:
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loader}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loader ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {loader ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center p-6 lg:h-auto">
        <img
          src={image}
          alt="Sign Up"
          className="object-contain h-1/2 lg:h-auto lg:w-3/4 mx-auto my-auto"
        />
      </div>
    </div>
  );
};

export default SignupPage;
