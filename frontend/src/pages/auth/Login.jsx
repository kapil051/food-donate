import React, { useState, useContext } from 'react';
import image from "../../assets/lottie/signup.json";
import { AuthContext } from "../../context/AuthContext";
import Lottie from "react-lottie";
import Swal from "sweetalert2";
const Login = () => {
  const { login, loader } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login({ email: formData.email, password: formData.password });
    } catch (error) {
      setError(error.response?.data?.msg || 'Login failed. Please check your credentials.');
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5] pt-16">
      <div className="flex flex-1 items-center justify-center p-6 py-16">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-bold mb-6 text-center  leading-tight">Welcome Back!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
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

            {error && <div className="mb-4 text-red-600">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg transition duration-300 ease-in-out font-medium text-white bg-indigo-600 hover:bg-black hover:scale-x-110 focus:outline-none"
                disabled={loader}
              >
                {loader ? 'Logging in...' : 'Login'}
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

export default Login;
