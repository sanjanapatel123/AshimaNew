// import React from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import herosection7 from "../assets/herosection8.png";
// import herosection9 from "../assets/herosection9.jpg";

// const Testimonial = () => {
//   const data = [
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",  // user image
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#0A071B] text-white">
      
//               style={{
//                 backgroundImage: `url(${herosection9})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
          
//       <div className="container mx-auto px-4">
//         <div className="relative text-center">
//           <h2 className="font-archivo text-[35px] text-[#ffffff] font-bold mb-10 inline-block relative">
//             TESTIMONIAL
//             <img
//               src={herosection7}
//               alt=""
//               className="absolute left-0 top-[35px] md:top-[45px] w-full h-auto text-[#DEFF16] "
//             />
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <div key={index} className="relative">
//               {/* Card */}
//               <div className="bg-[#1E1733] p-6 rounded-xl flex flex-col justify-between min-h-[250px]">
//                 <p className="text-[17px] font-poppins font-[300px] leading-6 mb-6">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* White Profile Box */}
//               <div className="bg-[#ffffff] rounded-[68px] flex items-center gap-3 px-4 py-2  w-[377px] h-[79px] absolute left-1/2 -translate-x-1/2 bottom-[-25px] ">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-[49px] h-[49px] rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="text-[#000000] text-[18px] font-semibold font-poppins">
//                     {item.name}
//                   </h4>
//                   <p className="text-[#343434] text-[13px] font-poppins font-normal">
//                     {item.date}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Slider Arrows */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button className="text-[#DEFF16] text-xl">
//             <FaAngleLeft />
//           </button>
//           <button className="text-[#DEFF16]  text-xl">
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;





// import React from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import herosection7 from "../assets/herosection8.png";
// import herosection9 from "../assets/herosection9.jpg";

// const Testimonial = () => {
//   const data = [
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//   ];

//   return (
//     <section
//       className="py-20 bg-[#0A071B] text-white"
//       style={{
//         backgroundImage: `url(${herosection9})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="relative text-center">
//           <h2 className="font-archivo text-[35px] text-[#ffffff] font-bold mb-10 inline-block relative">
//             TESTIMONIAL
//             <img
//               src={herosection7}
//               alt=""
//               className="absolute left-0 top-[35px] md:top-[45px] w-full h-auto text-[#DEFF16]"
//             />
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <div key={index} className="relative">
//               <div className="bg-[#1E1733] p-6 rounded-xl flex flex-col justify-between min-h-[250px]">
//                 <p className="text-[17px] font-poppins font-[300px] leading-6 mb-6">
//                   {item.desc}
//                 </p>
//               </div>

//               <div className="bg-[#ffffff] rounded-[68px] flex items-center gap-3 px-4 py-2 w-[377px] h-[79px] absolute left-1/2 -translate-x-1/2 bottom-[-25px]">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-[49px] h-[49px] rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="text-[#000000] text-[18px] font-semibold font-poppins">
//                     {item.name}
//                   </h4>
//                   <p className="text-[#343434] text-[13px] font-poppins font-normal">
//                     {item.date}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Slider Arrows */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button className="text-[#DEFF16] text-xl">
//             <FaAngleLeft />
//           </button>
//           <button className="text-[#DEFF16] text-xl">
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;



// import React from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import herosection7 from "../assets/herosection8.png";
// import herosection9 from "../assets/herosection9.jpg";

// const Testimonial = () => {
//   const data = [
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//   ];

//   return (
//     <section
//       className="py-20 bg-[#0A071B] text-white"
//       style={{
//         backgroundImage: `url(${herosection9})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="relative text-center">
//           <h2 className="font-archivo text-[28px] md:text-[35px] text-[#ffffff] font-bold mb-10 inline-block relative">
//             TESTIMONIAL
//             <img
//               src={herosection7}
//               alt=""
//               className="absolute left-0 top-[30px] md:top-[45px] w-full h-auto text-[#DEFF16]"
//             />
//           </h2>
//         </div>

//         {/* Cards */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <div key={index} className="relative">
//               <div className="bg-[#1E1733] p-4 md:p-6 rounded-xl flex flex-col justify-between min-h-[230px] md:min-h-[250px]">
//                 <p className="text-[15px] md:text-[17px] font-poppins font-[300px] leading-6 mb-6">
//                   {item.desc}
//                 </p>
//               </div>

//               <div className="bg-[#ffffff] rounded-[68px] flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-2 md:gap-3 px-4 py-2 w-[260px] sm:w-[300px] md:w-[377px] h-auto md:h-[79px] absolute left-1/2 -translate-x-1/2 bottom-[-35px]">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-[40px] md:w-[49px] h-[40px] md:h-[49px] rounded-full object-cover"
//                 />
//                 <div className="text-center md:text-left">
//                   <h4 className="text-[#000000] text-[16px] md:text-[18px] font-semibold font-poppins">
//                     {item.name}
//                   </h4>
//                   <p className="text-[#343434] text-[12px] md:text-[13px] font-poppins font-normal">
//                     {item.date}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div> */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <div key={index} className="relative">
//               {/* Card */}
//               <div className="bg-[#1E1733] p-4 md:p-6 rounded-xl flex flex-col justify-between min-h-[210px] md:min-h-[250px]">
//                 <p className="text-[15px] md:text-[17px] font-poppins font-[300px] leading-6 mb-4 md:mb-6 text-center md:text-left">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* Profile Box */}
//               <div className="bg-[#ffffff] rounded-[68px] flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 px-3 py-2 w-[250px] sm:w-[300px] md:w-[377px] h-auto md:h-[79px] absolute left-1/2 -translate-x-1/2 bottom-[-35px]">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-[38px] md:w-[49px] h-[38px] md:h-[49px] rounded-full object-cover"
//                 />
//                 <div className="text-center md:text-left">
//                   <h4 className="text-[#000000] text-[15px] md:text-[18px] font-semibold font-poppins">
//                     {item.name}
//                   </h4>
//                   <p className="text-[#343434] text-[12px] md:text-[13px] font-poppins font-normal">
//                     {item.date}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Arrows */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button className="text-[#DEFF16] text-xl">
//             <FaAngleLeft />
//           </button>
//           <button className="text-[#DEFF16] text-xl">
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;








// import React from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import herosection7 from "../assets/herosection8.png";
// import herosection9 from "../assets/herosection9.jpg";

// const Testimonial = () => {
//   const data = [
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//     {
//       desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
//       name: "Yash Malhotra",
//       date: "March 1, 2023",
//       img: "https://i.ibb.co/CBGRLhG/user.png",
//     },
//   ];

//   return (
//     <section
//       className="py-20 bg-[#0A071B] text-white"
//       style={{
//         backgroundImage: `url(${herosection9})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="relative text-center mb-10">
//           <h2 className="font-archivo text-[28px] sm:text-[35px] text-[#ffffff] font-bold inline-block relative">
//             TESTIMONIAL
//             <img
//               src={herosection7}
//               alt=""
//               className="absolute left-0 top-[30px] sm:top-[45px] w-full h-auto text-[#DEFF16]"
//             />
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col items-center p-4"
//             >
//               {/* Card */}
//               <div className="bg-[#1E1733] p-4 sm:p-6 rounded-xl flex flex-col justify-between min-h-[230px] md:min-h-[250px] mb-6">
//                 <p className="text-[14px] sm:text-[15px] md:text-[17px] font-poppins leading-6 mb-6 text-center sm:text-left">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* Profile Box */}
//               <div className="bg-[#ffffff] rounded-[68px] flex items-center gap-2 md:gap-3 px-3 py-2 w-[250px] sm:w-[300px] md:w-[377px] h-auto md:h-[79px] absolute left-1/2 -translate-x-1/2 bottom-[-35px]">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-[40px] sm:w-[45px] md:w-[49px] h-[40px] sm:h-[45px] md:h-[49px] rounded-full object-cover"
//                 />
//                 <div className="text-center sm:text-left">
//                   <h4 className="text-[#000000] text-[15px] sm:text-[16px] md:text-[18px] font-semibold font-poppins">
//                     {item.name}
//                   </h4>
//                   <p className="text-[#343434] text-[12px] sm:text-[13px] md:text-[13px] font-poppins font-normal">
//                     {item.date}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Arrows */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button className="text-[#DEFF16] text-xl">
//             <FaAngleLeft />
//           </button>
//           <button className="text-[#DEFF16] text-xl">
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;





import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import herosection7 from "../assets/herosection8.png";
import herosection9 from "../assets/herosection9.jpg";

const Testimonial = () => {
  const data = [
    {
      desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
      name: "Yash Malhotra",
      date: "March 1, 2023",
      img: "https://i.ibb.co/CBGRLhG/user.png",
    },
    {
      desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
      name: "Yash Malhotra",
      date: "March 1, 2023",
      img: "https://i.ibb.co/CBGRLhG/user.png",
    },
    {
      desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer.",
      name: "Yash Malhotra",
      date: "March 1, 2023",
      img: "https://i.ibb.co/CBGRLhG/user.png",
    },
  ];

  return (
    <section
      className="py-20 bg-[#0A071B] text-white"
      style={{
        backgroundImage: `url(${herosection9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="relative text-center mb-10">
          <h2 className="font-archivo text-[28px] sm:text-[35px] text-[#ffffff] font-bold inline-block relative">
            TESTIMONIAL
            <img
              src={herosection7}
              alt=""
              className="absolute left-0 top-[30px] sm:top-[45px] w-full h-auto text-[#DEFF16]"
            />
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-4"
            >
              {/* Card */}
              <div className="bg-[#1E1733] p-6 rounded-xl flex flex-col justify-between min-h-[250px] md:min-h-[300px] mb-6">
                <p className="text-[15px] sm:text-[16px] md:text-[17px] font-poppins leading-6 mb-6 text-center sm:text-left">
                  {item.desc}
                </p>
              </div>

              {/* Profile Box */}
              <div className="bg-[#ffffff] rounded-[68px] flex items-center gap-3 px-3 py-2 w-[300px] sm:w-[350px] md:w-[400px] h-auto md:h-[80px] absolute left-1/2 -translate-x-1/2 bottom-[-35px]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[45px] sm:w-[50px] md:w-[55px] h-[45px] sm:h-[50px] md:h-[55px] rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] font-semibold font-poppins">
                    {item.name}
                  </h4>
                  <p className="text-[#343434] text-[12px] sm:text-[13px] md:text-[14px] font-poppins font-normal">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="text-[#DEFF16] text-xl">
            <FaAngleLeft />
          </button>
          <button className="text-[#DEFF16] text-xl">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
