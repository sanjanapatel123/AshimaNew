import React from "react";
import { FiLogOut, FiEdit3 } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ChatInput from "./ChatInput";

const ChatBox = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="flex-1 flex flex-col justify-between items-center px-6 py-10 text-white relative transition-all duration-500">

      {/* Top Buttons */}
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center gap-3 text-2xl">
          {/* <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-[#D4FF00] text-black p-1 rounded-full"
          >
            {isSidebarOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </button>
          <FiEdit3 /> */}
        </div>
        <button className="bg-purple-600 px-3 py-1 rounded-full text-sm">Upgrade Plan</button>
      </div>

      {/* Welcome Text */}
      <div className="text-center">
        <h1 className="text-[#D4FF00] text-xl md:text-2xl font-extrabold mb-2">USER NAME,</h1>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">WELCOME TO CI GPT</h2>
        <p className="max-w-xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
          Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,
        </p>
      </div>

      {/* Input */}
      <ChatInput />
    </div>
  );
};

export default ChatBox;
