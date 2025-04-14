import React from "react";
import Navbar from "./Navbar";
// import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HowToUse from "./HowToUse";
// import Dashboard from "./components/Dashboard";
import Testimonial from "./Tesimonial";
import Footer from "./Footer";

const HomeSection = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <HowToUse></HowToUse>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default HomeSection;
