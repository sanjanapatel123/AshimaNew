import React from "react";
import testimonial from "../../assets/Testimonial.png";

export default function Testimonial() {
  return (
    <div className="relative font-montserrat flex flex-col h-[535px] items-center justify-center bg-[#efefef] overflow-hidden">
      <img
        src={testimonial}
        alt="NALLAKKAR"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
      />
      {/* Heading */}
      <h2 className="relative z-10 text-2xl font-bold mt-5 mb-28 text-gray-800">
        What People Says
      </h2>
      {/* Testimonial card */}
      <div className="relative bg-white rounded shadow-md px-8 py-4 max-w-2xl flex flex-col items-center z-10">
        {/* Profile image */}
        <img
          src="https://randomuser.me/api/portraits/women/95.jpg"
          alt="profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg absolute -top-12"
        />
        <div className="mt-16 flex flex-col items-center">
          {/* Opening quote */}
          <div className="flex">
            <span className="text-2xl">“</span>
          </div>
          <p className="text-center text-base mt-2 mb-2">
            <span className="font-bold">— Priya S. Verified Buyer</span>
            <br />
            "I absolutely adore my new dress! The fit is perfect, and the fabric
            feels so luxurious. I received so many compliments when I wore it.
            Definitely my new favorite go-to for special occasions!"
          </p>
          {/* Closing quote */}
          <div className="flex">
            <span className="text-2xl ml-2">”</span>
          </div>
        </div>
        {/* Decorative dot grid, top right */}
        <div className="absolute top-4 right-6">
          <svg width="50" height="50">
            <circle cx="5" cy="5" r="2" fill="#9ca3af" />
            <circle cx="15" cy="5" r="2" fill="#9ca3af" />
            <circle cx="25" cy="5" r="2" fill="#9ca3af" />
            <circle cx="35" cy="5" r="2" fill="#9ca3af" />
            <circle cx="45" cy="5" r="2" fill="#9ca3af" />
            <circle cx="5" cy="15" r="2" fill="#9ca3af" />
            <circle cx="15" cy="15" r="2" fill="#9ca3af" />
            <circle cx="25" cy="15" r="2" fill="#9ca3af" />
            <circle cx="35" cy="15" r="2" fill="#9ca3af" />
            <circle cx="45" cy="15" r="2" fill="#9ca3af" />
          </svg>
        </div>
      </div>
      {/* Carousel dots */}
      <div className="mt-6 flex space-x-2 z-10">
        <span className="w-3 h-3 bg-pink-400 rounded-full block"></span>
        <span className="w-3 h-3 bg-pink-200 rounded-full block"></span>
      </div>

      <div className="flex justify-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-pinkLight hover:bg-pink text-sm text-white">
          &lt;
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-darkpink text-white text-sm">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-pinkLight hover:bg-pink text-sm text-white">
          &gt;
        </button>
      </div>
    </div>
  );
}
