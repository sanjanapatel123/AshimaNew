import React from "react";

const ContactCard = () => (
  <div className="flex justify-center py-12 bg-white font-montserrat">
    <div className="bg-white shadow-md rounded-lg px-8 py-6 flex flex-col sm:flex-row items-center sm:items-start w-full max-w-3xl">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">Get in touch with us</h2>
        <p className="mb-1">
          Have a question about our latest styles or your order?
        </p>
        <p className="">
          <span className="font-semibold">Reach out to us anytime</span> - we're
          here to help you shine!
        </p>
      </div>
      <div className="flex mt-7 sm:mt-0 sm:ml-8 space-x-4">
        <button className="bg-rose text-white font-semibold py-2 px-6 transition">
          Contact Us
        </button>
        <button className="bg-primary hover:bg-rose text-white font-semibold py-2 px-6 transition">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default ContactCard;
