import React from "react";
import rectangle from "../assets/Rectangle.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-32 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(10,7,27,0.9), rgba(10,7,27,0.9)), url(${rectangle})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 container mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          CANADA IMMIGRATION GPT
        </h1>

        <p className="text-base md:text-lg mb-2">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
        </p>
        <p className="text-base md:text-lg mb-8">
          Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,
        </p>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <button className="bg-[#D4FF00] text-black px-8 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-[#c7f900] transition duration-300">
            Try CI GPT <span className="text-black text-xl rotate-45">↗</span>
          </button>

          <div className="flex gap-10 text-base font-semibold">
            <a
              href="#"
              className="relative text-white after:absolute after:block after:h-[2px] after:w-12 after:bg-white after:left-1/2 after:-translate-x-1/2 after:top-6"
            >
              How To Use ?
            </a>
            <a
              href="#"
              className="relative text-white after:absolute after:block after:h-[2px] after:w-12 after:bg-white after:left-1/2 after:-translate-x-1/2 after:top-6"
            >
              Testimonial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
