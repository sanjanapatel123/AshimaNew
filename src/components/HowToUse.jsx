// import React from "react";
// import herosection2 from "../assets/herosection2.png";
// import herosection3 from "../assets/herosection3.png";
// import herosection4 from "../assets/herosection4.png";
// import herosection5 from "../assets/herosection5.png";
// import herosection6 from "../assets/herosection6.png";

// const HowToUse = () => {
//   const data = [
//     {
//       img: herosection3,
//       title: "Video Title",
//     },
//     {
//       img: herosection4,
//       title: "Video Title",
//     },
//     {
//       img: herosection5,
//       title: "Video Title",
//     },
//     {
//       img: herosection6,
//       title: "Video Title",
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#0A071B] text-white">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
      
//         <div className="text-center text-[#ffffff]">
//           <h2 className="text-[35px] md:text-4xl font-bold text-[#ffffff] font-archivo mb-14 inline-block relative">
//             HOW TO USE?
//             <img
//               src={herosection2} // image ka path
//               alt=""
//               className="absolute left-0 top-[45px] w-full h-auto"
//             />
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#0A071B] rounded-lg overflow-hidden"
//             >
//               <img
//                 src={item.img}
//                 alt="Video"
//                 className="w-[278px] h-[548px] object-cover"
//               />
//               {/* <div className="py-3 text-center text-sm">{item.title}</div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToUse;






// import React from "react";
// import herosection2 from "../assets/herosection2.png";
// import herosection3 from "../assets/herosection3.png";
// import herosection4 from "../assets/herosection4.png";
// import herosection5 from "../assets/herosection5.png";
// import herosection6 from "../assets/herosection6.png";
// import herosection7 from "../assets/herosection7.jpg";

// const HowToUse = () => {
//   const data = [
//     {
//       img: herosection3,
//       title: "Video Title",
//     },
//     {
//       img: herosection4,
//       title: "Video Title",
//     },
//     {
//       img: herosection5,
//       title: "Video Title",
//     },
//     {
//       img: herosection6,
//       title: "Video Title",
//     },
//   ];

//   return (
//     <section
//     className="py-20 bg-[#0A071B] text-white">


       
//             style={{
//               backgroundImage: ` url(${herosection7})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
         
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center text-[#ffffff]">
//           <h2 className="text-[28px] md:text-[35px] lg:text-4xl font-bold text-[#ffffff] font-archivo mb-14 inline-block relative">
//             HOW TO USE?
//             <img
//               src={herosection2}
//               alt=""
//               className="absolute left-0 top-[35px] md:top-[45px] w-full h-auto"
//             />
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#0A071B] rounded-lg overflow-hidden"
//             >
//               <img
//                 src={item.img}
//                 alt="Video"
//                 className="w-[220px] sm:w-[250px] rounded-[8px] md:w-[278px] h-[400px] sm:h-[480px] md:h-[548px] object-cover"
//               />
//               {/* <div className="py-3 text-center text-sm">{item.title}</div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToUse;



import React from "react";
import herosection2 from "../assets/herosection2.png";
import herosection3 from "../assets/herosection3.png";
import herosection4 from "../assets/herosection4.png";
import herosection5 from "../assets/herosection5.png";
import herosection6 from "../assets/herosection6.png";
import herosection7 from "../assets/herosection7.jpg";

const HowToUse = () => {
  const data = [
    { img: herosection3, title: "Video Title" },
    { img: herosection4, title: "Video Title" },
    { img: herosection5, title: "Video Title" },
    { img: herosection6, title: "Video Title" },
  ];

  return (
    <section
      className="py-20 bg-[#0A071B] text-white"
      style={{
        backgroundImage: `url(${herosection7})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center text-[#ffffff]">
          <h2 className="text-[28px] md:text-[35px] lg:text-4xl font-bold text-[#ffffff] font-archivo mb-14 inline-block relative">
            HOW TO USE?
            <img
              src={herosection2}
              alt=""
              className="absolute left-0 top-[35px] md:top-[45px] w-full h-auto"
            />
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A071B] rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt="Video"
                className="w-[220px] sm:w-[250px] md:w-[278px] h-[400px] sm:h-[480px] md:h-[548px] object-cover rounded-[8px]"
              />
              {/* <div className="py-3 text-center text-sm">{item.title}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
