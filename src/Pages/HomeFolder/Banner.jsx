import newoffer from '../../assets/newoffer.png'
import banner from '../../assets/portrat.png'

const Banner = () => (
  <div
    className="w-full h-[300px] relative flex items-center"
    style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    {/* Content */}
    <div className="relative z-10 w-full flex items-center justify-between px-12 h-full">
      {/* Left Side */}
      <div className="flex flex-col justify-center h-full max-w-lg pl-[4rem]">
        <img
          src={newoffer} // "new! OFFERS" + arrow image
          alt="New Offers"
          className="h-32 w-auto mb-2"
        />
        <p className="text-[#5e4b39] text-base mt-2 mb-5">
          Shop more, save more. Get fast, free delivery right to your door.
        </p>
        <button className="bg-primary px-6 py-2 font-bold text-white w-36 shadow hover:bg-rose transition">
          SHOP NOW
        </button>
      </div>
      {/* Spacer for right-side alignment */}
      <div className="w-[40%]"></div>
    </div>
  </div>
);

export default Banner;
