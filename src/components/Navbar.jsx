import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0A071B] py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 text-white text-xl font-semibold">
          <span>CI</span>
          <span className="text-[#D4FF00]">GPT</span>
        </div>

        {/* Menu */}
        <div className="flex gap-10 text-sm font-medium">
          <a href="#" className="text-[#D4FF00]">
            Home
          </a>
          <a href="#" className="text-white">
            About Us
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
        </div>

        {/* Login Button */}
        <button className="border border-[#D4FF00] text-white text-sm px-4 py-1 rounded-full hover:bg-[#D4FF00] hover:text-black transition">
          Login Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
