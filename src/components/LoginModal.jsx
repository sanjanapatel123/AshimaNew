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




// import React from "react";
// import Laptop from "../assets/laptop2.png";
// import { FaApple } from "react-icons/fa";

// const LoginModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-[#0D0B1F] rounded-xl overflow-hidden flex w-[800px]">
//         {/* Left Side - Login Form */}
//         <div className="w-1/2 p-8 text-white flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-white mb-2">
//             <span className="text-white">CI </span>
//             <span className="text-lime-400">GPT</span>
//           </h2>
//           <h3 className="text-xl font-semibold mb-1">Login</h3>
//           <p className="text-sm text-gray-300 mb-6">
//             Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
//             Industry.
//           </p>

//           <input
//             type="email"
//             placeholder="Enter Email Address"
//             className="mb-4 px-4 py-2 rounded-full w-full text-black"
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="mb-4 px-4 py-2 rounded-full w-full text-black"
//           />

//           <div className="flex space-x-4 mb-4">
//             <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full">
//               Login Now
//             </button>
//             <button className="bg-[#261B4D] text-white font-semibold px-6 py-2 rounded-full">
//               Signup Now
//             </button>
//           </div>

//           <div className="text-center text-sm mb-2 text-gray-400">
//             Login With
//           </div>
//           <div className="flex justify-center space-x-6">
//             <img
//               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
//               className="w-6 h-6"
//               alt="Google"
//             />
//             <img
//               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
//               className="w-6 h-6"
//               alt="Microsoft"
//             />
//             {/* <img
//               src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//               alt="Apple"
//               className="w-6 h-6"
//               style={{ color: "white" }}
//             /> */}
//             <FaApple className="text-white text-4xl w-8 h-6" />
//           </div>
//         </div>

//         {/* Right Side - Image Section */}
//         <div
//           className="w-1/2 bg-[#7626C5] bg-cover bg-center relative"
//           style={{ backgroundImage: `url(${Laptop})` }}
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-white text-2xl font-bold"
//           >
//             &times;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;






import React from "react";
import Laptop from "../assets/laptop2.png";
import { FaApple } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-2">
      <div className="bg-[#442E8E] rounded-xl overflow-hidden flex flex-col md:flex-row w-full max-w-[800px]">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 text-[#ffffff] flex flex-col justify-center">
          <h2 className="text-[30px] font-archivo font-bold text-[#ffffff] mb-2">
            <span className="text-[#FFFFFFF]">CI </span>
            <span className="text-[#DEFF16]">GPT</span>
          </h2>
          <h3 className="text-[32px] font-archivo text-[#ffffff] font-medium mb-1">
            Login
          </h3>
          <p className="text-[16px] font-poppins font-normal text-[#ffffff] mb-6">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.
          </p>

          <input
            type="email"
            placeholder="Enter Email Address"
            className="mb-4 px-4 py-2 rounded-full w-full text-black"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="mb-4 px-4 py-2 rounded-full w-full text-black"
          />

          <div className="flex flex-wrap gap-4 mb-4">
            <button className="bg-[#DEFF16] text-[#171030] font-semibold px-6 py-2 rounded-full">
              Login Now
            </button>
            <button className="bg-[#442E8E] text-[#FFFFFF] font-semibold px-6 py-2 rounded-full">
              Signup Now
            </button>
          </div>

          <div className="text-center text-[20px] font-archivo font-medium mb-2 text-[#ffffff]">
            Login With
          </div>
          <div className="flex justify-center space-x-6">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              className="w-6 h-6"
              alt="Google"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
              className="w-6 h-6"
              alt="Microsoft"
            />
            <FaApple className="text-[#ffffff] text-4xl w-8 h-6" />
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div
          className="w-full md:w-1/2 bg-[#7626C5] bg-cover bg-center relative min-h-[200px] md:min-h-0"
          style={{ backgroundImage: `url(${Laptop})` }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#FFFFFFF] text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
