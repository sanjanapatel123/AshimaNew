import React from "react";
import Laptop from "../assets/laptop2.png";
import { FaApple } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#0D0B1F] rounded-xl overflow-hidden flex w-[800px]">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-8 text-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            <span className="text-white">CI </span>
            <span className="text-lime-400">GPT</span>
          </h2>
          <h3 className="text-xl font-semibold mb-1">Login</h3>
          <p className="text-sm text-gray-300 mb-6">
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

          <div className="flex space-x-4 mb-4">
            <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full">
              Login Now
            </button>
            <button className="bg-[#261B4D] text-white font-semibold px-6 py-2 rounded-full">
              Signup Now
            </button>
          </div>

          <div className="text-center text-sm mb-2 text-gray-400">
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
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-6 h-6"
              style={{ color: "white" }}
            /> */}
            <FaApple className="text-white text-4xl w-8 h-6" />
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div
          className="w-1/2 bg-[#7626C5] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Laptop})` }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
