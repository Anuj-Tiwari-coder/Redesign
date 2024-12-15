import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-2xl font-bold">
                <Link to="/" className="hover:text-gray-200">JobRinger</Link>
            </div>
            <ul className="flex gap-6">
                <li>
                    <Link className="hover:underline text-lg font-medium" to="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:underline text-lg font-medium" to="/job-search">Job Search</Link>
                </li>
                <li>
                    <Link className="hover:underline text-lg font-medium" to="/employers">Employers</Link>
                </li>
                <li>
                    <Link className="hover:underline text-lg font-medium bg-white text-blue-600 px-4 py-1 rounded-full hover:bg-gray-200" to="/login">Login/Signup</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
