import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="min-h-screen flex justify-center items-center flex-col px-4 mt-5"
        style={{
          background: "linear-gradient(135deg, #0A071B 0%, #211143 100%)",
        }}
      >
        <h1 className="text-[#D4FF00] text-center font-archivo font-bold text-[30px] mb-1">
          USER NAME,
        </h1>
        <h2 className="text-3xl md:text-4xl font-archivo text-white font-semibold mb-6 text-center">
          WELCOME TO CI GPT
        </h2>

        <p className="text-gray-400 text-center font-poppins max-w-2xl mb-10 text-[14px]">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s,
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Express Entry Visa",
            "PNP",
            "CRS Score",
            "Tourist Visa",
            "Express Entry Visa",
            "PNP",
            "CRS Score",
            "Tourist Visa",
          ].map((item, index) => (
            <button
              key={index}
              className="border border-[#322b5b] bg-transparent  text-white px-8 py-4 rounded-md text-sm hover:bg-[#D4FF00] hover:text-black font-poppins text-[20px] font-[300] transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
