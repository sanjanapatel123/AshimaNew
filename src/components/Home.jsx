import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const historyData = [
    {
      title: "Today",
      list: ["Canada Immigration Process", "Lorem Ipsum Dummy Text"],
    },
    {
      title: "Yesterday",
      list: ["Canada Immigration Process", "Lorem Ipsum Dummy Text"],
    },
    {
      title: "Previous 7 Days",
      list: ["Canada Immigration Process", "Lorem Ipsum Dummy Text"],
    },
  ];

  return (
    <div
      className="flex min-h-screen relative transition-all duration-500"
      style={{ background: "linear-gradient(90deg, #0A071B 0%, #241B4A 100%)" }}
    >
      {/* Toggle Icon For Closed Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        historyData={historyData}
      />

      <ChatBox
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Home;
