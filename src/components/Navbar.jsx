import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0A071B] py-3 fixed w-full top-0 left-0 z-50 font-archivo">
      <div className="mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 text-white font-[700] text-[30px]">
          <span>CI</span>
          <span className="text-[#DEFF16] text-[30px] font-archivo font-bold">
            GPT
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex lg:gap-20 gap-10 text-sm font-poppins font-[500] text-[18px]">
          <a href="#" className="text-[#D4FF00]">
            Home
          </a>
          <Link to={"/about"} className="text-white">
            About Us
          </Link>
          <Link to={"/blog"} className="text-white">
            Blog
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Login Button */}
        <button
          onClick={() => setLoginOpen(true)}
          className="hidden md:block border border-[#D4FF00] text-white text-[15px] font-[400] px-4 py-1 rounded-full hover:bg-[#D4FF00] hover:text-black transition font-poppins"
        >
          Login Now
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A071B] flex flex-col px-4 gap-4 items-start py-4">
          <a href="#" className="text-[#D4FF00]">
            Home
          </a>
          <Link to={"/about"} className="text-white">
            About Us
          </Link>
          <Link to={"/blog"} className="text-white">
            Blog
          </Link>
          <button
            onClick={() => {
              setLoginOpen(true);
              setMenuOpen(false);
            }}
            className="border border-[#D4FF00] text-white text-[15px] font-[400] px-4 py-1 rounded-full hover:bg-[#D4FF00] hover:text-black transition font-poppins"
          >
            Login Now
          </button>
        </div>
      )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </nav>
  );
};

export default Navbar;
