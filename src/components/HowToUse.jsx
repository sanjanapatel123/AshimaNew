import React from "react";

const HowToUse = () => {
  const data = [
    {
      img: "https://via.placeholder.com/300x400.png?text=Image+1",
      title: "Video Title",
    },
    {
      img: "https://via.placeholder.com/300x400.png?text=Image+2",
      title: "Video Title",
    },
    {
      img: "https://via.placeholder.com/300x400.png?text=Image+3",
      title: "Video Title",
    },
    {
      img: "https://via.placeholder.com/300x400.png?text=Image+4",
      title: "Video Title",
    },
  ];

  return (
    <section className="py-20 bg-[#0A071B] text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-14 relative inline-block">
          HOW TO USE?
          <span className="block h-[2px] w-16 bg-[#D4FF00] mx-auto mt-2"></span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#181530] rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt="Video"
                className="w-full h-[350px] object-cover"
              />
              <div className="py-3 text-center text-sm">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
