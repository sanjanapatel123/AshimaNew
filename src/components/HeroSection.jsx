// import React from "react";
// import herosection1 from "../assets/herosection1.jpg";
// import herosection2 from "../assets/herosection2.png";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center py-32 px-4 lg:mt-[68px]"
//       style={{
//         backgroundImage: ` url(${herosection1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="relative z-10 container mx-auto text-center text-white">
//         <h1 className="text-[60px] md:text-5xl font-[700] mb-6 font-Archivo text-[#fffffff] leading-tight">
//           CANADA IMMIGRATION GPT
//         </h1>

//         <p className=" md:text-lg mb-2 font-Poppins font-[400] text-[22px] text-[#ffffff]">
//           Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
//           Industry.
//         </p>
//         <p className=" md:text-lg mb-2 font-Poppins font-normal text-[22px] text-[#ffffff]">
//           Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
//           1500s,
//         </p>

//         <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
//           <Link
//             to={"/dashboard"}
//             className="bg-[#DEFF16] text-[#0E0A1C] px-6 py-3 mt-2 w-[180px] h-[50px] rounded-full flex items-center gap-6 font-semibold hover:bg-[#DEFF16] transition duration-300"
//           >
//             Try CI GPT
//             <span className="text-[#DEFF16] bg-black rounded-full p-1 font-semibold text-[20px] font-archivo transform rotate-270">
//               <FaArrowRight />
//             </span>
//           </Link>

//           <div className="flex gap-10 text-[20px] font-[500] font-archivo">
//             <a href="#" className="relative inline-block text-[#ffffff]">
//               How To Use ?
//               <img
//                 src={herosection2} // image ka path
//                 alt=""
//                 className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[147px]"
//               />
//             </a>

//             <a href="#" className="relative inline-block text-[#ffffff]">
//               Testimonial
//               <img
//                 src={herosection2} // image ka path
//                 alt=""
//                 className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[147px]"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import herosection1 from "../assets/herosection1.jpg";
import herosection2 from "../assets/herosection2.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-4 lg:mt-[68px] min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${herosection1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 container mx-auto text-center text-white max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold mb-6 font-Archivo text-[#ffffff] leading-tight">
          CANADA IMMIGRATION GPT
        </h1>

        <p className="text-base sm:text-lg lg:text-[22px] mb-2 font-Poppins font-normal text-[#ffffff]">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry.
        </p>
        <p className="text-base sm:text-lg lg:text-[22px] mb-6 font-Poppins font-normal text-[#ffffff]">
          Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
          1500s,
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">
          <Link
            to={"/dashboard"}
            className="bg-[#DEFF16] text-[#0E0A1C] px-6 py-3 w-[180px] h-[50px] rounded-full flex items-center justify-center gap-4 font-semibold hover:bg-[#DEFF16] transition duration-300"
          >
            Try CI GPT
            <span className="text-[#DEFF16] bg-black rounded-full p-1 text-[20px]  transform rotate-[-20deg]">
              <FaArrowRight />
            </span>
          </Link>

          <div className="flex flex-col sm:flex-row gap-6 text-lg sm:text-xl font-semibold font-Archivo text-white">
            <a href="#" className="relative inline-block text-center">
              How To Use ?
              <img
                src={herosection2}
                alt=""
                className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[120px] sm:w-[147px]"
              />
            </a>

            <a href="#" className="relative inline-block text-center">
              Testimonial
              <img
                src={herosection2}
                alt=""
                className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[120px] sm:w-[147px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
