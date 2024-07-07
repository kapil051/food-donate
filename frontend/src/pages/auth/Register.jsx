import React, { useState } from 'react';
import image from "../../assets/signupImage.svg";

const SignupPage = () => {
  const [signupType, setSignupType] = useState('donor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    contact: '',
    address: '',
    organization: '',
    id: '',
    organizationSize: '',
    password: '',
    confirmPassword: ''
  });

  const handleToggle = (type) => {
    setSignupType(type);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      type: signupType
    };
    console.log('Form data to send:', dataToSend);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });
      if (response.ok) {
        console.log('Registered successfully!');
      } else {
        console.error('Error!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <div className="flex justify-center mb-6">
            <button
              onClick={() => handleToggle('donor')}
              className={`py-2 px-4 ${signupType === 'donor' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} border border-indigo-600 rounded-l-md`}
            >
              Donor
            </button>
            <button
              onClick={() => handleToggle('volunteer')}
              className={`py-2 px-4 ${signupType === 'volunteer' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} border border-indigo-600 rounded-r-md`}
            >
              Volunteer
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {signupType === 'donor' ? (
              <>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
                  <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number:</label>
                  <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                  <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                  <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label htmlFor="volunteer-name" className="block text-sm font-medium text-gray-700">Volunteer Name:</label>
                  <input type="text" id="volunteer-name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                  <input type="email" id="volunteer-email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                  <input type="tel" id="phone" name="contact" value={formData.contact} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization Name (if any):</label>
                  <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="id" className="block text-sm font-medium text-gray-700">Organization ID or Personal ID:</label>
                  <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="organization-size" className="block text-sm font-medium text-gray-700">Organization Size (if applicable):</label>
                  <input type="text" id="organization-size" name="organizationSize" value={formData.organizationSize} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                  <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
              </>
            )}
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign Up as {signupType.charAt(0).toUpperCase() + signupType.slice(1)}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center p-6 lg:h-auto">
        <img src={image} alt="Sign Up" className="object-contain h-1/2 lg:h-auto lg:w-3/4 mx-auto my-auto"/>
      </div>
    </div>
  );
};

export default SignupPage;
