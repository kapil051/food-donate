import React, { useState, useContext } from 'react';
import { BiSolidDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout, loader } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <header className="bg-white shadow-lg top-0 left-0 right-0 z-20 fixed ">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <BiSolidDonateHeart className="text-5xl" />
                    <Link className="text-xl font-semibold font-pacifico" to="/" aria-label="Brand">
                        Blessed Baskets
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-800 hover:text-gray-600 py-2">Overview</Link>
                    <Link to="/available-food" className="text-gray-800 hover:text-gray-600 py-2">Available Foods</Link>
                    <Link to="/donate-food" className="text-gray-800 hover:text-gray-600 py-2">Donate Food</Link>
                    <Link to="/my-foods" className="text-gray-800 hover:text-gray-600 py-2">My Food</Link>
                    <Link to="/my-foodrequest" className="text-gray-800 hover:text-gray-600 py-2">My FoodRequest</Link>
                    {user ? (
                        <button
                            onClick={handleLogout}
                            disabled={loader}
                            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300"
                        >
                            {loader ? "Logging Out" : "Logout"}
                        </button>
                    ) : (
                        <>
                            <Link to="/register">
                                <button className="bg-[#ABD700] text-black font-semibold px-4 py-2 rounded-xl  transition duration-300  ease-in-out hover:scale-x-110">
                                    Register
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="bg-[#F7BD2E] text-black font-semibold px-4 py-2 rounded-xl  transition duration-300  ease-in-out hover:scale-x-110">
                                    Login
                                </button>
                            </Link>
                        </>
                    )}
                </nav>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800 hover:text-gray-600 focus:outline-none"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
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
                        <Link to="/" className="block text-gray-800 hover:text-gray-600 py-2">Overview</Link>
                        <Link to="/available-food" className="block text-gray-800 hover:text-gray-600 py-2">Available Foods</Link>
                        <Link to="/donate-food" className="block text-gray-800 hover:text-gray-600 py-2">Donate Food</Link>
                        <Link to="/my-foods" className="block text-gray-800 hover:text-gray-600 py-2">My Food</Link>
                        <Link to="/my-foodrequest" className="block text-gray-800 hover:text-gray-600 py-2">My FoodRequest</Link>
                        {user ? <button className="w-full bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300" onClick={handleLogout} disabled={loader}>{loader ? "Logging Out" : "Logout"}</button> : (<><Link to="/register">
                            <button className="w-full bg-[#ABD700] text-black font-semibold px-4 py-2 mb-2 rounded-xl">Sign Up</button>
                        </Link>
                            <Link to="/login">
                                <button className="w-full bg-[#F7BD2E] text-black font-semibold px-4 py-2 rounded-xl">Login</button>
                            </Link></>)}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
