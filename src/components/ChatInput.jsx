import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = ({ sendMessage }) => {
  const [msg, setMsg] = useState("");

  const handleSend = () => {
    if (!msg.trim()) return;
    sendMessage(msg);
    setMsg("");
  };

  return (
    <div className="flex gap-3 border border-purple-600 px-4 py-3 rounded-full mt-5">
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Write Prompt Here..."
        className="flex-1 bg-transparent text-sm text-gray-300 outline-none"
      />
      <button onClick={handleSend} className="bg-[#D4FF00] text-black p-2 rounded-full">
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
