import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed z-40 font-[Montserrat] bg-white w-full h-[80px] flex items-center justify-between px-6 md:px-[5rem] border-b-2">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-3">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="logo" className="h-14" />
        </Link>
      </div>

      {/* Middle Section: Navigation */}
      <nav className="flex gap-6 lg:gap-8 font-semibold text-sm text-[#0B1C39] ml-[-2rem] lg:ml-[-11rem]">
        <Link to={"/"} className="text-[#EC3557]">
          Home
        </Link>
        <Link to={"/about"} className="hover:text-[#EC3557]">
          About Us
        </Link>
        <a href="#" className="hover:text-[#EC3557]">
          Contact Us
        </a>
      </nav>

      {/* Right Section: Search + Login */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Search Bar: hidden on small screens */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2 w-[200px] lg:w-[320px] bg-white">
          <div className="flex items-center gap-1 text-sm text-gray-600 font-semibold whitespace-nowrap">
            All Categories <IoIosArrowDown className="text-xs" />
          </div>
          <input
            type="text"
            placeholder="Search for more products..."
            className="ml-3 w-full text-sm outline-none text-gray-600 placeholder:text-gray-400 bg-transparent"
          />
          <FaSearch className="text-gray-400 text-sm w-11 ml-8" />
        </div>

        {/* Login Button */}
        <button className="bg-[#0B1C39] text-white px-4 py-1 hover:bg-[#EC3557] text-sm font-semibold">
          LOGIN
        </button>
      </div>
    </header>
  );
}
