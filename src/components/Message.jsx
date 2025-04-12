import React from "react";

const Message = ({ type, text }) => {
  return (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-xs p-3 text-sm rounded-lg ${type === "user" ? "bg-[#D4FF00] text-black" : "bg-[#322b5b]"}`}>
        {text}
      </div>
    </div>
  );
};

export default Message;
