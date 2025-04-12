// import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { FiEdit3 } from "react-icons/fi";

// const Sidebar = ({ isSidebarOpen, toggleSidebar, historyData }) => {
//   return (
//     <div
//       className={`${
//         isSidebarOpen ? "w-[250px]" : "w-[70px]"
//       } border-r border-[#322b5b] p-5 text-white relative transition-all duration-500 overflow-hidden`}
//     >
//       {/* Top Area with Toggle & Edit Icon */}
//       <div className={`flex items-center justify-between mb-8 transition-all duration-500 ${isSidebarOpen ? "" : "flex-col gap-4"}`}>

//         {/* Toggle Button */}
//         <button
//           onClick={toggleSidebar}
//           className="bg-[#D4FF00] text-black rounded-full p-1 text-xl"
//         >
//           {isSidebarOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
//         </button>

//         {/* Pencil Icon Always Visible */}
//         <FiEdit3 className="text-xl cursor-pointer" />
//       </div>

//       {/* History Show only when Sidebar Open */}
//       {isSidebarOpen && (
//         <div className="space-y-6">
//           {historyData.map((data, idx) => (
//             <div key={idx}>
//               <h4 className="text-sm text-purple-400 mb-2">{data.title}</h4>
//               {data.list.map((item, i) => (
//                 <p key={i} className="text-[13px] text-gray-400 mb-1">{item}</p>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";

const Sidebar = ({ isSidebarOpen, toggleSidebar, historyData }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "w-[250px]" : "w-[70px]"
      } border-r border-[#322b5b] p-5 text-white relative transition-all duration-500 overflow-hidden`}
    >
      {/* Top Area with Toggle & Edit Icon */}
      {/* Top Area with Toggle & Edit Icon */}
      <div
        className={`flex items-center mb-8 transition-all duration-500 ${
          isSidebarOpen ? "justify-between" : "justify-center"
        }`}
      >
        <div
          className={`flex items-center ${isSidebarOpen ? "gap-40" : "gap-1"}`}
        >
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-[#D4FF00] text-black rounded-full p-1 text-xl"
          >
            {isSidebarOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </button>

          {/* Pencil Icon Always Show */}
          <FiEdit3 className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* History Show only when Sidebar Open */}
      {isSidebarOpen && (
        <div className="space-y-6">
          {historyData.map((data, idx) => (
            <div key={idx}>
              <h4 className="text-sm text-purple-400 mb-2">{data.title}</h4>
              {data.list.map((item, i) => (
                <p key={i} className="text-[13px] text-gray-400 mb-1">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
