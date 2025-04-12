import React, { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const chatRef = useRef();

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (msg) => {
    setMessages([...messages, { type: "user", text: msg }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: "This is a dummy AI response for your query." }]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 text-white">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((m, idx) => (
          <Message key={idx} type={m.type} text={m.text} />
        ))}
        <div ref={chatRef}></div>
      </div>

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatBox;
