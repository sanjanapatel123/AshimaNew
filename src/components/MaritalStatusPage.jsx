import Navbar from "./Navbar";

const MaritalStatusPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="min-h-screen flex justify-center items-center flex-col px-4"
        style={{
          background: "linear-gradient(135deg, #0A071B 0%, #211143 100%)",
        }}
      >
        <h1 className="text-[#D4FF00] text-center font-bold font-archivo text-3xl mb-1">
          USER NAME,
        </h1>
        <h2 className="text-3xl md:text-4xl text-white font-archivo font-semibold mb-6 text-center">
          WELCOME TO CI GPT
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mb-10 text-[18px]">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s,
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Married", "Divorce", "Single", "Other"].map((item, index) => (
            <button
              key={index}
              className="border border-[#322b5b] text-white px-10 py-4 rounded-md font-poppins text-[20px] font-[300] text-sm hover:bg-[#D4FF00] hover:text-black transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MaritalStatusPage;
