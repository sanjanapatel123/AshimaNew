import React from "react";
import MarketImg from "../assets/Market_Product.png";
import lock from "../assets/Lock_Market.png";
import icon from "../assets/market1.png";
import marketIcon from "../assets/marketicon.png";

const MarketProduct = () => {
  return (
    <>
      <div className="flex  bg-[#047670] h-[652]p-4 lg:p-0">
        {/* Left Image Section */}
        <div className="flexlg:w-1/2 items-center justify-center lg:justify-start p-10 lg:pl-20">
          <img
            src={MarketImg}
            alt="Lost Connections Book"
            className=" max-w-[700px]  rounded-tl-[4px] rounded-tr-[4px] mt-8"
          />
        </div>

        {/* Right Content Section */}
        <div className="relative lg:absolute  lg:w-[460px] bg-white rounded-md shadow-lg p-6  lg:mt-8   lg:left-[50%] xl:left-[931px] border-[#047670] ">
          <div className="text-[13px] font-roboto text-[#000000]">e Book</div>

          <div className="w-full text-2xl lg:text-[30px] tracking-[0.02em] capitalize font-impact mt-2">
            Premium Glow Up Akademi <br />
            Metodu (% 50 Ozel Indirim)
            <div className="text-[12px] text-[#1E1E1E] font-Jost mb-2">
              By <span>Glow Up Academy</span>
            </div>
          </div>

          <div className="text-2xl lg:text-[32px] font-impact text-[#047670]">
            Try 129{" "}
            <span className="text-base text-[#1E1E1E] font-jost">| 1 File</span>
          </div>

          <button className="w-full bg-[#047670] hover:bg-[#005b4f] text-white border border-[#047670] rounded-[12px] px-[10px] py-[10px] flex items-center justify-center gap-[10px] text-lg lg:text-[22px] mt-4">
            Buy Now
          </button>

          {/* Unlock Access */}
          <button className="w-full lg:w-[214px] mx-auto lg:ml-20 h-[32.33px] bg-white rounded-[4px] text-sm lg:text-[18px] text-[#1E1E1E] flex items-center justify-center gap-4 mt-4">
            <img src={lock} alt="lock" className="w-[24px] h-[24px]" />
            Unlock And Access
          </button>

          {/* AiSkills Trial */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-[#FFFFFF] px-3 py-2 rounded text-sm lg:text-[18px] mt-4 gap-2">
            <span className="font-impact">AI SKILLS</span>
            <span className="bg-white text-[#047670] px-2 py-1 rounded text-lg lg:text-[22px] font-roboto">
              1 Month Of AiSkills
            </span>
            <span className="bg-[#047670] text-[#FFFFFF] text-lg lg:text-[22px] font-Roboto Condensed rounded-[8px] w-[89px] h-[35px] text-center">
              Free
            </span>
          </div>

          {/* PDF Download */}
          <div className="flex items-center border border-gray-300 justify-center gap-[12px] font-roboto mt-4 p-2">
            <img src={icon} alt="icon" className="w-6 h-6" />
            <a
              href="#"
              className="flex items-center justify-center text-[#047670] py-2 rounded-[12px] text-sm lg:text-[22px] truncate"
            >
              Premium Glowup.PDF (128mb)
            </a>
            <img src={lock} alt="lock" className="w-6 h-6" />
          </div>

          {/* Notes */}
          <p className="text-sm lg:text-[18px] leading-[20px] font-roboto text-[#1E1E1E] mt-4 capitalize">
            Purchase Will Be Made Through Superpeer, Part Of The Skillshare
            Family.
          </p>
          <img src={marketIcon} alt="market icon" className="mt-2" />

          <p className="text-sm lg:text-[18px] text-[#1E1E1E] mt-2 font-roboto">
            All Memberships Will Be Billed Automatically On A Recurring Basis
            Until Canceled. If Eligible For A Free Trial, Cancel Before The
            Trial Ends To Avoid Being Charged. Offer Only Valid For New Paid
            Subscribers. See Full Terms Of Service Here.
          </p>
        </div>
      </div>
      {/* About This Product Section */}
      <div className="lg:w-[796px] bg-white p-4 rounded-md shadow text-[#1E1E1E] mt-8 lg:mt-20 lg:ml-20">
        <h2 className="text-2xl lg:text-[26px] font-impact mb-4">
          About This Product
        </h2>
        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Sorularınızdan Bıktınız Mı? Glow Up Akademi Metodu Size Yardımcı
          Olacaktır. 🚀
        </p>
        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Glow Up Akademi Metodu Göz Çevresindeki İyileşmelerden (Puffiner
          [şeyi] Tutan, Heaving Straightening Kadar Gözle Görüldü) Her Şeyi
          Anlayın. Kullanmanız Gereken Cilt Bakım Ürünleri, Size Sürülene Kadar
          Ne İşe Yaradıklarını, Size Güvenlik Veriyoruz...
        </p>
        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Ürün Ekstra Olarak Yazan Günlük Rutininizi Ve Tavsiyelerinizi De
          İçeriyor. 🧴
        </p>
        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Ürün Şuanki Sınırlı Stoklu İndirimde Ve Hızlı Eriştiği Değerlere
          Yükseleceğini, O Yüzden Elini Çabuk Tut!
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-full lg:w-[870px] bg-black text-white px-6 py-8 lg:py-16 mt-8 lg:mt-20 ">
        <div className="w-full lg:w-[738px] h-auto bg-black text-white p-4 lg:p-6 lg:ml-10">
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            {[
              "WHAT TYPES OF DIGITAL PRODUCTS ARE AVAILABLE ON AISKILLS?",
              "ARE THE DIGITAL PRODUCTS ON AISKILLS BEGINNER-FRIENDLY?",
              "HOW DO I ACCESS MY PURCHASED DIGITAL PRODUCTS?",
              "CAN I GET A REFUND IF I'M NOT SATISFIED WITH A DIGITAL PRODUCT?",
              "CAN INSTRUCTORS SELL THEIR OWN DIGITAL PRODUCTS ON AISKILLS?",
              "ARE THERE ANY FREE DIGITAL PRODUCTS AVAILABLE?",
              "CAN I USE AISKILLS DIGITAL PRODUCTS FOR COMMERCIAL PROJECTS?",
              "DO I NEED SPECIAL SOFTWARE TO USE THE DIGITAL PRODUCTS?",
            ].map((question, index) => (
              <div
                key={index}
                className="border-b border-white pb-2 flex justify-between items-center text-sm lg:text-[16px] font-roboto"
              >
                {question}
                <span className="text-lg lg:text-[24px] font-roboto">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      



      
    </>
  );
};

export default MarketProduct;
