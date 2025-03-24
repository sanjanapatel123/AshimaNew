import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFigma } from "react-icons/fa";
import { PiX } from "react-icons/pi"; // For X (Twitter)

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        {/* Left Section - Logo & Social Icons */}
        <div className="flex flex-col items-start space-y-6 w-full lg:w-1/4">
          {/* Figma Logo */}
          <FaFigma className="text-[#ff7070] text-4xl sm:text-5xl" />
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <PiX className="text-white text-xl sm:text-2xl" />
            <FaInstagram className="text-white text-xl sm:text-2xl" />
            <FaYoutube className="text-white text-xl sm:text-2xl" />
            <FaLinkedin className="text-white text-xl sm:text-2xl" />
          </div>
        </div>

        {/* Center Section - Products */}
        <div className="w-full sm:w-1/4 text-left">
          <h3 className="font-Roboto Condensed text-white mb-3 sm:mb-4">
            Products
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm leading-relaxed">
            <li>Courses</li>
            <li>Digital Products</li>
            <li>Newsletter</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Business & Legal - Two-Column Responsive Layout */}
        <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 text-left">
          {/* Business Section */}
          <div>
            <h3 className="font-Roboto Condensed text-white mb-3 sm:mb-4">
              Business
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm leading-relaxed">
              <li>About Us</li>
              <li>Career</li>
              <li>Instructors</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-Roboto Condensed text-white mb-3 sm:mb-4 ml-5">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm leading-relaxed">
              <li>Cookies Policy</li>
              <li>Privacy And Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








