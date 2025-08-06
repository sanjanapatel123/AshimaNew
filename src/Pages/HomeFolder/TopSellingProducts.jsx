import React from "react";
import man from "../../assets/man.png";
import shoes from "../../assets/mens.png";
import jacket from "../../assets/women-white.png";
import women from "../../assets/dancing-team-studio.png";
import doll from "../../assets/3d-children.png";

const products = [
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: man,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: shoes,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: jacket,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: women,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: doll,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: man,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: shoes,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: jacket,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: women,
  },
  {
    title: "Men Regular Fit Self Design Light Shirt",
    price: "₹ 529.00",
    discount: "(off 35%)",
    rating: "4.2",
    reviews: "12K",
    image: doll,
  },
];

const tabs = ["Featured", "Latest", "Best Sellers"];

export default function TopSellingProducts() {
  return (
    <section className="px-6 py-10 font-montserrat">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Top Selling Products
      </h2>

      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-1 text-sm font-semibold ${
              tab === "Featured"
                ? "bg-darkpink text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 px-12">
        {products.map((item, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-1 rounded shadow text-gray-700">
                <span>{item.rating}</span> • <span>{item.reviews}</span>
              </div>
              <button className="absolute top-2 right-2">
                <svg
                  className="w-5 h-5 text-gray-400 hover:text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1 text-left">Nallakkar</p>
            <p className="text-sm font-medium text-gray-800 mt-1 text-left">
              {item.title}
            </p>
            <div className="flex justify-between items-center gap-2 mt-1">
              <span className="text-pink-600 font-semibold text-sm">
                {item.price}
              </span>
              <span className="text-gray-500 text-xs">{item.discount}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
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
    </section>
  );
}
