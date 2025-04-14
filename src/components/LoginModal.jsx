// // import React from "react";
// // import { IoClose } from "react-icons/io5";
// // import laptop from "../assets/laptop.png";

// // const LoginModal = ({ closeModal }) => {
// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
// //       <div className="flex w-[90%] max-w-4xl rounded-2xl overflow-hidden animate-fadeIn">
// //         {/* Left Part */}
// //         <div className="w-1/2 bg-[#0A071B] p-10 text-white">
// //           <h2 className="text-3xl font-bold mb-2">
// //             CI <span className="text-[#D4FF00]">GPT</span>
// //           </h2>

// //           <p className="text-sm text-gray-400 mb-8">
// //             Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
// //             Industry.
// //           </p>

// //           <input
// //             type="email"
// //             placeholder="Enter Email Address"
// //             className="w-full p-3 rounded-full mb-4 text-black text-sm outline-none"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Enter Password"
// //             className="w-full p-3 rounded-full mb-6 text-black text-sm outline-none"
// //           />

// //           <div className="flex gap-4 mb-4">
// //             <button className="bg-[#D4FF00] text-black px-6 py-2 rounded-full font-bold text-sm">
// //               Login Now
// //             </button>
// //             <button className="bg-[#241B4A] text-white px-6 py-2 rounded-full font-bold text-sm border border-[#322b5b]">
// //               Signup Now
// //             </button>
// //           </div>

// //           <hr className="border-[#322b5b] my-4" />

// //           <p className="text-center text-sm mb-4 text-gray-400">Login With</p>

// //           <div className="flex justify-center gap-6 text-2xl">
// //             <i className="fab fa-google"></i>
// //             <i className="fab fa-microsoft"></i>
// //             <i className="fab fa-apple"></i>
// //           </div>
// //         </div>

// //         {/* Right Part Image Full Cover */}
// //         <div
// //           className="w-1/2 bg-cover bg-center bg-no-repeat relative"
// //           style={{
// //             backgroundImage: `url(${laptop})`,
// //           }}
// //         >
// //           <button
// //             onClick={closeModal}
// //             className="absolute top-4 right-4 text-3xl text-white z-20"
// //           >
// //             <IoClose />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginModal;







// import React from "react";
// import { IoClose } from "react-icons/io5";
// import laptop from "../assets/laptop.png"; // your right side image

// const LoginModal = ({ closeModal }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//       <div className="flex w-[90%] max-w-4xl rounded-2xl overflow-hidden">
//         {/* Left Section */}
//         <div className="w-1/2 bg-[#0A071B] p-10 text-white flex flex-col justify-between">
//           <div>
//             <h2 className="text-3xl font-bold mb-2">
//               CI <span className="text-[#D4FF00]">GPT</span>
//             </h2>

//             <p className="text-sm text-gray-400 mb-8">
//               Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
//               Industry.
//             </p>

//             <input
//               type="email"
//               placeholder="Enter Email Address"
//               className="w-full p-3 rounded-full mb-4 text-black text-sm outline-none"
//             />

//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full p-3 rounded-full mb-6 text-black text-sm outline-none"
//             />

//             <div className="flex gap-4 mb-6">
//               <button className="bg-[#D4FF00] text-black px-6 py-2 rounded-full font-bold text-sm w-1/2">
//                 Login Now
//               </button>
//               <button className="bg-[#241B4A] text-white px-6 py-2 rounded-full font-bold text-sm w-1/2 border border-[#322b5b]">
//                 Signup Now
//               </button>
//             </div>

//             <hr className="border-[#322b5b] mb-4" />

//             <p className="text-center text-sm text-gray-400 mb-4">Login With</p>

//             <div className="flex justify-center gap-6 text-2xl">
//               <i className="fab fa-google text-white"></i>
//               <i className="fab fa-microsoft text-white"></i>
//               <i className="fab fa-apple text-white"></i>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div
//           className="w-1/2 relative bg-cover bg-center"
//           style={{ backgroundImage: `url(${laptop})` }}
//         >
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 text-3xl text-white z-10"
//           >
//             <IoClose />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;





// import React from "react";
// import { IoClose } from "react-icons/io5";
// import laptop from "../assets/laptop.png";

// const LoginModal = ({ closeModal }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//       <div className="flex w-[90%] max-w-4xl rounded-2xl overflow-hidden animate-fadeIn">
//         {/* Left Part */}
//         <div className="w-1/2 bg-[#0A071B] p-10 text-white">
//           <h2 className="text-3xl font-bold mb-2">
//             CI <span className="text-[#D4FF00]">GPT</span>
//           </h2>

//           <p className="text-sm text-gray-400 mb-8">
//             Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
//             Industry.
//           </p>

//           <input
//             type="email"
//             placeholder="Enter Email Address"
//             className="w-full p-3 rounded-full mb-4 text-black text-sm outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="w-full p-3 rounded-full mb-6 text-black text-sm outline-none"
//           />

//           <div className="flex gap-4 mb-4">
//             <button className="bg-[#D4FF00] text-black px-6 py-2 rounded-full font-bold text-sm">
//               Login Now
//             </button>
//             <button className="bg-[#241B4A] text-white px-6 py-2 rounded-full font-bold text-sm border border-[#322b5b]">
//               Signup Now
//             </button>
//           </div>

//           <hr className="border-[#322b5b] my-4" />

//           <p className="text-center text-sm mb-4 text-gray-400">Login With</p>

//           <div className="flex justify-center gap-6 text-2xl">
//             <i className="fab fa-google"></i>
//             <i className="fab fa-microsoft"></i>
//             <i className="fab fa-apple"></i>
//           </div>
//         </div>

//         {/* Right Part Image Full Cover */}
//         <div
//           className="w-1/2 bg-cover bg-center bg-no-repeat relative"
//           style={{
//             backgroundImage: `url(${laptop})`,
//           }}
//         >
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 text-3xl text-white z-20"
//           >
//             <IoClose />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;







// import React from "react";
// import { IoClose } from "react-icons/io5";
// import laptop from "../assets/laptop.png"; // your right side image

// const LoginModal = ({ closeModal }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//       <div className="flex w-[90%] max-w-4xl rounded-2xl overflow-hidden">
//         {/* Left Section */}
//            <div className="w-1/2 bg-[#0A071B] p-10 text-white flex flex-col justify-between">
//   <div>
   
//     <h2 className="text-3xl font-bold mb-2">
//       CI <span className="text-[#D4FF00]">GPT</span>
//     </h2>

   
//     <p className="text-sm text-gray-400 mb-8">
//       Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
//     </p>

  
//     <input
//       type="email"
//       placeholder="Enter Email Address"
//       className="w-full p-3 rounded-full mb-4 text-black text-sm outline-none"
//     />

   
//     <input
//       type="password"
//       placeholder="Enter Password"
//       className="w-full p-3 rounded-full mb-6 text-black text-sm outline-none"
//     />

 
//     <div className="flex gap-4 mb-6">
//       <button className="bg-[#D4FF00] text-black px-6 py-2 rounded-full font-bold text-sm w-1/2">
//         Login Now
//       </button>
//       <button className="bg-[#241B4A] text-white px-6 py-2 rounded-full font-bold text-sm w-1/2 border border-[#322b5b]">
//         Signup Now
//       </button>
//     </div>

  
//     <hr className="border-[#322b5b] mb-4" />

    
//     <p className="text-center text-sm text-gray-400 mb-4">Login With</p>

   
//     <div className="flex justify-center gap-6 text-2xl">
//       <i className="fab fa-google text-white"></i>
//       <i className="fab fa-microsoft text-white"></i>
//       <i className="fab fa-apple text-white"></i>
//     </div>
//   </div>
// </div>







//         {/* Right Section */}
//         <div
//           className="w-1/2 relative bg-cover bg-center"
//           style={{ backgroundImage: `url(${laptop})` }}
//         >
//           <button
//             onClick={closeModal}
//             className="absolute top-4 right-4 text-3xl text-white z-10"
//           >
//             <IoClose />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;




import React from "react";
import { IoClose } from "react-icons/io5";
import laptop from "../assets/laptop.png"; // your right side image

const LoginModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="flex w-[90%] max-w-4xl rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-[#0A071B] p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              CI <span className="text-[#D4FF00]">GPT</span>
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-3 rounded-full mb-4 text-black text-sm outline-none"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 rounded-full mb-6 text-black text-sm outline-none"
            />
            <div className="flex gap-4 mb-6">
              <button className="bg-[#D4FF00] text-black px-6 py-2 rounded-full font-bold text-sm w-1/2">
                Login Now
              </button>
              <button className="bg-[#241B4A] text-white px-6 py-2 rounded-full font-bold text-sm w-1/2 border border-[#322b5b]">
                Signup Now
              </button>
            </div>
            <hr className="border-[#322b5b] mb-4" />
            <p className="text-center text-sm text-gray-400 mb-4">Login With</p>
            <div className="flex justify-center gap-6 text-2xl">
              <i className="fab fa-google text-white"></i>
              <i className="fab fa-microsoft text-white"></i>
              <i className="fab fa-apple text-white"></i>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-1/2 relative bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${laptop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-3xl text-white z-10"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

