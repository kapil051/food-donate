import React, { useState } from 'react';
import { BiSolidDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-b shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex flex-row items-center gap-x-4 ">
              <BiSolidDonateHeart className="text-6xl " />
              <a className="flex-none text-xl font-semibold  font-pacifico" href="/" aria-label="Brand">Food Donation </a>
            </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="/availablefood" className="text-gray-800 hover:text-gray-600 py-2">Available Foods</a>
                    <a href="/donatefood" className="text-gray-800 hover:text-gray-600 py-2">Donate Food</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 py-2">My Food</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 py-2">My Food Request</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 py-2">Blogs</a>
                    <Link to="/register"><button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-300">Register</button></Link>
                    <Link to="/login"><button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300">Login</button></Link>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <nav className="px-4 py-4 space-y-2">
                        <a href="/about" className="block text-gray-800 hover:text-gray-600 py-2">Who we are</a>
                        <a href="/what-we-do" className="block text-gray-800 hover:text-gray-600 py-2">What we do</a>
                        <a href="/help" className="block text-gray-800 hover:text-gray-600 py-2">How to help</a>
                        <a href="/get-involved" className="block text-gray-800 hover:text-gray-600 py-2">Get involved</a>
                        <a href="/blogs" className="block text-gray-800 hover:text-gray-600 py-2">Blogs</a>
                        <button className="w-full bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-300">Sign Up</button>
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300">Login</button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
