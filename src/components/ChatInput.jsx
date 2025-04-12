import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";

const ChatInput = () => {
  const [msg, setMsg] = useState("");

  return (
    <div className="flex justify-between items-center w-full max-w-2xl border border-purple-600 px-4 py-3 rounded-full mt-10">
      <div className="flex items-center gap-3 text-sm text-gray-300">
        <FaPaperclip className="text-[#D4FF00]" />
        Write Prompt Here.
      </div>
      <button className="bg-[#D4FF00] text-black p-2 rounded-full">
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
