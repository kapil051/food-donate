// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-7xl md:text-9xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
