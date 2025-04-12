// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0A071B] text-[#ffffff] py-10">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
//         {/* Logo */}
//         <div>
//           <h2 className="text-[35px] font-bold font-archivo ">
//             CI <span className="text-[#DEFF16]">GPT</span>
//           </h2>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-semibold text-[25px] font-poppins text-[#ffffff] mb-4">
//             Links
//           </h4>
//           <ul className="space-y-2 font-poppins font-semibold text-[18px] text-[#ffffff]">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Blog</li>
//           </ul>
//         </div>

//         {/* Legal */}
//         <div>
//           <h4 className="font-semibold text-[25px] font-poppins text-[#ffffff] mb-4">
//             Legal
//           </h4>
//           <ul className="space-y-2 font-poppins font-semibold text-[18px] text-[#ffffff]">
//             <li>Terms Of Use</li>
//             <li>Privacy Policy</li>
//             <li>Cookie Policy</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="font-semibold text-[25px] font-poppins text-[#ffffff] mb-4">
//             Contact Info
//           </h4>
//           <div className="flex items-center gap-3 mb-2">
//             <FaEnvelope className="text-[#A58BF1]" />
//             <span>Help@CIGPT.Com</span>
//           </div>
//           <div className="flex items-center gap-3 mb-2">
//             <FaPhoneAlt className="text-[#A58BF1]" />
//             <span>+1 234 456 678 89</span>
//           </div>
//           <div className="flex gap-3 mt-3">
//             <FaInstagram className="cursor-pointer" />
//             <FaFacebookF className="cursor-pointer" />
//           </div>
//         </div>

//         {/* Need Help */}
//         <div>
//           <h4 className="font-semibold mb-4">Need Help ?</h4>
//           <div className="flex border border-[#A58BF1] rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="bg-transparent px-4 py-2 outline-none text-sm text-white placeholder:text-white"
//             />
//             <button className="bg-[#A58BF1] px-5 py-2 text-sm rounded-full">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>

//       <hr className="border-t border-[#A58BF1] my-6" />

//       <p className="text-center text-sm">
//         Copyright 2024 CIGPT.Com All Rights Reserved
//       </p>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A071B] text-[#ffffff] py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Logo */}
        <div>
          <h2 className="text-[35px] font-bold font-archivo ">
            CI <span className="text-[#DEFF16]">GPT</span>
          </h2>
        </div>

        {/* Links + Legal together in mobile */}
        <div className="grid grid-cols-2 gap-6 col-span-2">
          {/* Links */}
          <div>
            <h4 className="font-semibold text-[25px] font-poppins text-[#ffffff] mb-4">
              Links
            </h4>
            <ul className="space-y-2 font-poppins font-semibold text-[18px] text-[#ffffff]">
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[25px] font-poppins text-[#ffffff] mb-4">
              Legal
            </h4>
            <ul className="space-y-2 font-poppins font-semibold text-[18px] text-[#ffffff]">
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-[25px] font-poppins text-[#ffffff] mb-4">
            Contact Info
          </h4>
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-[#A58BF1]" />
            <span>Help@CIGPT.Com</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FaPhoneAlt className="text-[#A58BF1]" />
            <span>+1 234 456 678 89</span>
          </div>
          <div className="flex gap-3 mt-3">
            <FaInstagram className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
          </div>
        </div>

        {/* Need Help */}
        <div>
          <h4 className="font-semibold mb-4">Need Help ?</h4>
          <div className="flex border border-[#A58BF1] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent px-4 py-2 outline-none text-sm text-white placeholder:text-white"
            />
            <button className="bg-[#A58BF1] px-5 py-2 text-sm rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#A58BF1] my-6" />

      <p className="text-center text-sm">
        Copyright 2024 CIGPT.Com All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
