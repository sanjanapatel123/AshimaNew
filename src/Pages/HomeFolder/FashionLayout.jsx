import banner1 from "../../assets/Group 328.png";
import banner3 from "../../assets/dancing-team-studio.png";
import blackgirl from "../../assets/fashionale.png";
import couple from "../../assets/couple.png";

const images = {
  main: banner1, // Replace with relevant image
  women: blackgirl,
  couple: couple,
  kids: banner3,
};

export default function FashionLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap">
      {/* Left main block */}
      <div className="w-full md:w-1/2 bg-gradient-to-tr from-pink-400 via-cyan-400 to-yellow-400 flex items-center justify-center relative p-8">
        <img
          src={images.main}
          alt="Main Fashion"
          className="absolute right-0 bottom-0 w-full h-full object-cover opacity-80"
          style={{ zIndex: 1 }}
        />
        {/* <div className="relative z-10 text-left max-w-xs">
          <div className="mb-2">
            <span className="inline-block rounded bg-yellow-400 py-1 px-3 text-sm font-semibold text-white shadow">
              FASHION
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-2">
            NEW <br />
            FASHON
          </h1>
        </div> */}
      </div>

      {/* Right blocks grid */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 pl-4">
        <div className="flex gap-4">
          {/* Women Trendy */}
          <div className="bg-black relative flex-1 overflow-hidden shadow">
            <img
              src={images.women}
              alt="Women Trendy"
              className="object-cover w-full h-32 md:h-72 opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="text-white text-lg font-bold mb-1">
                Women <br />
                Trendy
              </span>
              <button className="py-1 px-3 bg-white text-black rounded text-xs font-bold w-fit">
                SHOP NOW
              </button>
              <span className="absolute top-4 right-2 text-xs text-gray-300 rotate-90">
                fashion shoes
              </span>
            </div>
          </div>
          {/* Find your Style */}
          <div className="bg-gray-800 relative flex-1 overflow-hidden shadow">
            <img
              src={images.couple}
              alt="Find your Style"
              className="object-cover w-full h-32 md:h-72 opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className="text-white text-lg font-bold mb-1">
                Find your <br />
                style
              </span>
              <button className="py-1 px-3 bg-white text-black text-xs font-bold w-fit">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-stretch">
          {/* Kids Playful Fashion (left, larger) */}
          <div className="bg-white relative flex-1  overflow-hidden shadow flex">
            <img
              src={images.kids}
              alt="Kids Fashion"
              className="object-cover w-full h-32 md:h-72 opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4 h-full w-full">
              <span className="text-pink-600 text-xl md:text-2xl font-bold">
                Playful
              </span>
              <div>
                <span className="text-black text-2xl font-bold">FASHION</span>
                <button className="ml-4 py-1 px-3 bg-black text-white text-xs font-bold">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
