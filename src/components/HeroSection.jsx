import React from "react";
import herosection1 from "../assets/herosection1.jpg";
import herosection2 from "../assets/herosection2.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-32 px-4"
      style={{
        backgroundImage: ` url(${herosection1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 container mx-auto text-center text-white">
        <h1 className="text-[60px] md:text-5xl font-bold  mb-6 font-Archivo SemiExpanded text-[#fffffff]  leading-tight">
          CANADA IMMIGRATION GPT
        </h1>

        <p className=" md:text-lg mb-2 font-Poppins font-normal text-[22px] text-[#ffffff]">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry.
        </p>
        <p className=" md:text-lg mb-2 font-Poppins font-normal text-[22px] text-[#ffffff]">
          Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
          1500s,
        </p>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <button className="bg-[#DEFF16] text-[#0E0A1C] px-8 py-3 mt-2 w-[219px] h-[50px] rounded-full flex items-center gap-2 font-semibold hover:bg-[#DEFF16] transition duration-300">
            Try CI GPT{" "}
            <span className="text-[#0E0A1C]  font-semibold text-[20px] font-archivo rotate-45">
              ↗
            </span>
          </button>

          <div className="flex gap-10 text-base font-semibold">
            <a href="#" className="relative inline-block text-[#ffffff]">
              How To Use ?
              <img
                src={herosection2} // image ka path
                alt=""
                className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[80px]"
              />
            </a>

            <a href="#" className="relative inline-block text-[#ffffff]">
              Testimonial
              <img
                src={herosection2} // image ka path
                alt=""
                className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[80px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
