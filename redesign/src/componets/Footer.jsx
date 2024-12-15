import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-blue-100 to-blue-200 text-gray-800 text-sm pt-10 pb-6 border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Disclaimer Section */}
                <div className="text-center mb-6">
                    <p className="leading-relaxed text-gray-700">
                        <span className="font-bold text-gray-900">Disclaimer:</span> All trademarks and logos are the property of their respective owners, depicted here purely for representation purposes. Jobringer.com has taken all reasonable steps to ensure the information on this site is genuine. However, job applicants are advised to evaluate independently. Jobringer.com shall not bear responsibility in this regard.
                    </p>
                </div>

                <hr className="my-6 border-t border-gray-400" />

                {/* Links Section */}
                <div className="flex flex-wrap justify-center items-center gap-4 text-center font-medium">
                    <a href="#" className="hover:text-blue-600 transition duration-300">
                        Terms & Conditions
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-600 transition duration-300">
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-600 transition duration-300">
                        Refund Policy
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-600 transition duration-300">
                        About Us
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-600 transition duration-300">
                        Contact Us
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-600 transition duration-300">
                        FAQ
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-600 transition duration-300">
                        Blogs
                    </a>
                </div>

                {/* Social Media Section */}
                <div className="flex justify-center items-center gap-6 my-8">
                    <span className="font-semibold text-gray-800">Follow us on</span>
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-lg transition duration-300">
                        <FaWhatsapp />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-pink-600 text-lg transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600 text-lg transition duration-300">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-800 text-lg transition duration-300">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-900 text-lg transition duration-300">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Recognized By */}
                <div className="text-center mb-4">
                    <p className="text-md font-semibold text-yellow-600">
                        Recognized By <span className="text-orange-500 font-bold">#startupindia</span>
                    </p>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-gray-700 mt-4">
                    <p>© {new Date().getFullYear()} <span className="font-semibold">Jobtech Ventures Private Limited</span>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
