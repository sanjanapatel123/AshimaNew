import React from "react";
import { FiLogOut, FiEdit3 } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ChatInput from "./ChatInput";
import { Link } from "react-router-dom";

const ChatBox = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="flex-1 flex flex-col justify-between items-center px-6 py-10 text-white relative transition-all duration-500">
      {/* Top Buttons */}
      <div className="flex justify-end mt-0 w-full px-4">
        <Link to={"/"} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
          Upgrade Plan
        </Link>
      </div>

      {/* Welcome Text */}
      <div className="text-center">
        <h1 className="text-[#D4FF00] text-3xl md:text-2xl font-archivo font-[600]">
          USER NAME,
        </h1>
        <h2 className="text-3xl md:text-3xl font-[600] font-archivo mb-2">
          WELCOME TO CI GPT
        </h2>
        <p className="max-w-xl mx-auto font-poppins text-gray-300 text-[18px] font-[300] md:text-base leading-relaxed">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s,
        </p>
      </div>

      {/* Input */}
      <ChatInput />
    </div>
  );
};

export default ChatBox;
