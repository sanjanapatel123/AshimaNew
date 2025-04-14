// import React, { useState } from "react";
// import LoginModal from "./LoginModal";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isLoginOpen, setLoginOpen] = useState(false);

//   return (
//     <nav className="bg-[#0A071B] py-5">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-1 text-white text-xl font-semibold">
//           <span>CI</span>
//           <span className="text-[#D4FF00]">GPT</span>
//         </div>

//         {/* Menu */}
//         <div className="flex gap-10 text-sm font-medium">
//           <a href="#" className="text-[#D4FF00]">
//             Home
//           </a>
//           <Link to={"/about"} className="text-white">
//             About Us
//           </Link>
//           <Link to={"/blog"} className="text-white">
//             Blog
//           </Link>
//         </div>

//         {/* Login Button */}
//         <button
//           onClick={() => setLoginOpen(true)}
//           className="border border-[#D4FF00] text-white text-sm px-4 py-1 rounded-full hover:bg-[#D4FF00] hover:text-black transition"
//         >
//           Login Now
//         </button>
//       </div>

//       <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="bg-[#0A071B] py-3 fixed w-full top-0 left-0 z-50 font-archivo">
      <div className=" mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 text-white font-[700] text-[30px]">
          <span>CI</span>
          <span className="text-[#D4FF00]">GPT</span>
        </div>

        {/* Menu */}
        <div className="flex lg:gap-20 gap-10 text-sm font-poppins font-[500] text-[18px]">
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

        {/* Login Button */}
        <button
          onClick={() => setLoginOpen(true)}
          className="border border-[#D4FF00] text-white text-[15px] font-[400] px-4 py-1 rounded-full hover:bg-[#D4FF00] hover:text-black transition font-poppins"
        >
          Login Now
        </button>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </nav>
  );
};

export default Navbar;
