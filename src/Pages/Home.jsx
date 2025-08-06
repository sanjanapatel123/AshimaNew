import { Helmet } from "react-helmet-async";
import modelImg from "../assets/Home1.png";
import NallakkarSVG from "../assets/NALLAKKAR.png";
import categories from "../assets/categories.png";
import TopSellingProducts from "./HomeFolder/TopSellingProducts";
import FashionLayout from "./HomeFolder/FashionLayout";
import Banner from "./HomeFolder/Banner";
import AboutNallakkar from "./HomeFolder/AboutNallakkar";
import Features from "./HomeFolder/Features";
import Testimonial from "./HomeFolder/Testimonial";
import ContactCard from "./HomeFolder/ContactCard";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Nallakkar</title>
      </Helmet>

      <section className="h-[530px] relative bg-white overflow-hidden shadow-[0px_3px_6px_rgba(0,0,0,0.16)] border-b-2 py-14">
        <img
          src={NallakkarSVG}
          alt="NALLAKKAR"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-[5rem] py-20 gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 font-[Montserrat]">
            <h2 className="font-bold text-[25px]">
              Your Next Look Starts Here —
              <span className="text-[#EC3557] font-bold">NALLAKKAR</span>
            </h2>
            <p className=" text-gray-700 font-semibold leading-tight mt-44 text-[20px]">
              Step into the world of NALLAKKAR – where tradition meets modern
              elegance. From timeless weaves to bold essentials, discover your
              next signature look.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#1a214c] text-white font-semibold text-sm hover:bg-[#EC3557] transition">
              SHOP NOW
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[400px] lg:w-[450px] flex justify-center md:justify-end">
            <img src={modelImg} alt="Model" className="object-contain" />
          </div>
        </div>
      </section>

      <section className="text-center h-[280px] font-[Montserrat] mt-12">
        <h2 className="text-[30px] mb-1 font-semibold">
          Best For Your Categories
        </h2>
        <p className="text-[20px] font-normal mb-5">
          Your Favorite Categories, Only the Best Inside
        </p>
        <div className="flex justify-center gap-6 mt-6 overflow-x-auto">
          {/* {[
            { name: "Kids", img: "https://i.ibb.co/XXyQJDg/kids.png" },
            { name: "Women", img: "https://i.ibb.co/vmMnwQq/women.png" },
            { name: "Toys", img: "https://i.ibb.co/JQ7XZCw/toys.png" },
            {
              name: "Accessories",
              img: "https://i.ibb.co/smSCDZ5/accessories.png",
            },
            { name: "Home Decors", img: "https://i.ibb.co/LvKfzX2/home.png" },
          ].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <span className="text-sm mt-2">{cat.name}</span>
            </div>
          ))} */}
          <img src={categories} alt="" style={{ width: "600px" }} />
        </div>
      </section>

      {/* Banner Grid */}
      <FashionLayout></FashionLayout>

      {/* Top Selling Products */}
      <TopSellingProducts></TopSellingProducts>

      {/* Banner */}
      <Banner></Banner>

      {/* AboutNallakkar */}
      <AboutNallakkar></AboutNallakkar>

      {/* features */}
      <Features></Features>

      {/* Testimonial */}
      <Testimonial></Testimonial>

      {/* ContactCard */}
      <ContactCard></ContactCard>
    </>
  );
}
