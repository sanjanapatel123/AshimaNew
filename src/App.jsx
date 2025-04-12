import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowToUse from "./components/HowToUse";
import Dashboard from "./components/Dashboard";
import Testimonial from "./components/Tesimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <HowToUse></HowToUse> 
      <Testimonial></Testimonial>
      <Footer></Footer>
       {/* <Dashboard></Dashboard> */}
    </div>
  );
};

export default App;

// import React from "react";
// import Sidebar from "./components/Sidebar";
// import ChatBox from "./components/ChatBox";

// const App = () => {
//   return (
//     <div
//       className="flex min-h-screen"
//       style={{ background: "linear-gradient(90deg, #0A071B 0%, #241B4A 100%)" }}
//     >
//       <Sidebar />
//       <ChatBox />
//     </div>
//   );
// };

// export default App;
