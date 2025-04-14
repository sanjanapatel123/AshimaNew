// import React, { useState } from "react";
// import LoginModal from "./LoginModal";

// const Navbar = () => {
//   const [openModal, setOpenModal] = useState(false);
//   return (
//     <nav className="bg-[#0A071B] py-3">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-1 font-archivo text-[#ffffff] text-[30px] font-bold">
//           <span>CI</span>
//           <span className="text-[#DEFF16] text-[30px] font-archivo font-bold">GPT</span>
//         </div>

//         {/* Menu */}
//         <div className="flex gap-10 text-[18px] font-medium font-poppins">
//           <a href="#" className="text-[#DEFF16]">
//             Home
//           </a>
//           <a href="#" className="text-[#ffffff]">
//             About Us
//           </a>
//           <a href="#" className="text-[#ffffff]">
//             Blog
//           </a>
//         </div>

//         {/* Login Button */}
//         <button
//           onClick={() => setOpenModal(true)}
//           className="border border-[#DEFF16] text-[#ffffff] text-[15px] px-4 py-1 rounded-full  font-poppins hover:bg-[#D4FF00] hover:text-black transition"
//         >
//           Login Now
//         </button>
//       </div>

//       {openModal && <LoginModal closeModal={() => setOpenModal(false)} />}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="bg-[#0A071B] py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 font-archivo text-[#ffffff] text-[30px] font-bold">
          <span>CI</span>
          <span className="text-[#DEFF16] text-[30px] font-archivo font-bold">
            GPT
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-[18px] font-medium font-poppins">
          <a href="#" className="text-[#DEFF16]">
            Home
          </a>
          <a href="#" className="text-[#ffffff]">
            About Us
          </a>
          <a href="#" className="text-[#ffffff]">
            Blog
          </a>
        </div>

        {/* Login Button */}
        <button
          onClick={() => setOpenModal(true)}
          className="border border-[#DEFF16] text-[#ffffff] text-[15px] px-4 py-1 rounded-full font-poppins hover:bg-[#D4FF00] hover:text-black transition"
        >
          Login Now
        </button>
      </div>

      {openModal && <LoginModal closeModal={() => setOpenModal(false)} />}

      {/* Mobile Menu Toggle */}
      {/* <div className="md:hidden flex items-center justify-between px-4">
        <button
          onClick={() => setOpenModal(true)}
          className="border border-[#DEFF16] text-[#ffffff] text-[15px] px-4 py-1 rounded-full font-poppins hover:bg-[#D4FF00] hover:text-black transition"
        >
          Login Now
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
