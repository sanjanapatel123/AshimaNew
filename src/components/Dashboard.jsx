import React, { useState } from "react";
import { FiLogOut, FiEdit3 } from "react-icons/fi";
import { FaPaperclip } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const historyData = [
    {
      day: "Today",
      list: ["Canada Immigration Process", "Lorem Ipsum Dummy Text"],
    },
    {
      day: "Yesterday",
      list: ["Canada Immigration Process", "Lorem Ipsum Dummy Text", "Canada Immigration Process"],
    },
    {
      day: "Previous 7 Days",
      list: [
        "Canada Immigration Process",
        "Lorem Ipsum Dummy Text",
        "Canada Immigration Process",
        "Lorem Ipsum Dummy Text",
        "Canada Immigration Process",
      ],
    },
  ];

  return (
    <section
      className="flex min-h-screen text-white transition-all duration-300"
      style={{
        background: "linear-gradient(90deg, #0A071B 0%, #241B4A 100%)",
      }}
    >
      {/* Sidebar with animation */}
      <AnimatePresence>
        {showSidebar && (
          <motion.aside
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-[250px] border-r border-[#322b5b] p-5"
          >
            <div className="flex justify-between mb-8 text-xl">
              <FiLogOut />
              <FiEdit3 />
            </div>

            <div className="space-y-6">
              {historyData.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-sm text-purple-400 mb-2">{item.day}</h4>
                  {item.list.map((q, i) => (
                    <p
                      key={i}
                      className="text-[13px] text-gray-400 mb-1 cursor-pointer"
                    >
                      {q}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between items-center px-6 py-10 relative">

        {/* Toggle Button */}
        <div
          onClick={toggleSidebar}
          className="absolute top-5 left-5 cursor-pointer text-2xl bg-[#D4FF00] text-black rounded-full p-1"
        >
          {showSidebar ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </div>

        <div className="text-center">
          <h1 className="text-[#D4FF00] text-xl md:text-2xl font-extrabold mb-2">
            USER NAME,
          </h1>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            WELCOME TO CI GPT
          </h2>
          <p className="max-w-xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,
          </p>
        </div>

        <div className="flex justify-between items-center w-full max-w-2xl border border-purple-600 px-4 py-3 rounded-full mt-10">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <FaPaperclip className="text-[#D4FF00]" />
            Write Prompt Here.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
