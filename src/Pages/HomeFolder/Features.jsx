import {
  FaShippingFast,
  FaLeaf,
  FaHandsHelping,
  FaShieldAlt,
} from "react-icons/fa";

export default function Features() {
  return (
    <div className="flex flex-row justify-between items-start font-montserrat bg-white px-8 py-12">
      {/* Fast Shipping */}
      <div className="flex-1 flex flex-col items-start mr-8">
        <div className="flex justify-center items-center gap-2">
          {" "}
          <FaShippingFast className="text-2xl mb-2" />
          <h2 className="font-bold text-2xl mb-2">Fast Shipping</h2>
        </div>

        <p className="leading-tight">
          Get your order fast with our lightning-quick shipping! We&apos;re
          committed to getting your items to you as soon as possible.
        </p>
      </div>
      {/* Create Unique */}
      <div className="flex-1 flex flex-col items-start mr-8">
        <div className="flex justify-center items-center gap-2">
          {" "}
          <FaLeaf className="text-2xl mb-2" />
          <h2 className="font-bold text-2xl mb-2">Create Unique</h2>
        </div>

        <p className="leading-tight">
          Uncover unique treasures and experiences tailored just for you.
          We&apos;re here to help you find what you truly love.
        </p>
      </div>
      {/* Flexibility And Patience */}
      <div className="flex-1 flex flex-col items-start mr-8">
        <div className="flex justify-center items-center gap-2">
          {" "}
          <FaHandsHelping className="text-2xl mb-2" />
          <h2 className="font-bold text-2xl mb-2 text-nowrap">Flexibility And Patience</h2>
        </div>

        <p className="leading-tight">
          Your needs come first. We offer flexible solutions and the patience to
          ensure you&apos;re always satisfied.
        </p>
      </div>
      {/* Quality And Security */}
      <div className="flex-1 flex flex-col items-start">
        <div className="flex justify-center items-center gap-2">
          {" "}
          <FaShieldAlt className="text-2xl mb-2" />
          <h2 className="font-bold text-2xl mb-2">Quality And Security</h2>
        </div>

        <p className="leading-tight">
          Experience peace of mind with our unwavering commitment to top-tier
          quality and ironclad security. Your satisfaction and safety are our
          highest priorities.
        </p>
      </div>
    </div>
  );
}
