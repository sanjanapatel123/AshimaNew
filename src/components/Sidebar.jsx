import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [show, setShow] = useState(true);

  const historyData = [
    "Canada Immigration Process?",
    "Visa Application?",
    "Work Permit Guide?",
  ];

  return (
    <>
      {show && (
        <div className="w-[250px] border-r border-[#322b5b] p-5 text-white">
          <h2 className="text-xl mb-6 font-bold">History</h2>
          <div className="space-y-3 text-sm text-gray-400">
            {historyData.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setShow(!show)}
        className="absolute top-5 left-2 bg-[#D4FF00] text-black rounded-full p-1 text-xl"
      >
        {show ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
    </>
  );
};

export default Sidebar;
