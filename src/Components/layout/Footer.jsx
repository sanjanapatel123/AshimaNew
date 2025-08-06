import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/whitelogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left: Logo and Description */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-3">
            {/* <div className="font-bold text-2xl">N</div>
            <span className="font-medium text-lg tracking-widest">Nallakkar</span> */}
            <img src={logo} alt="" />
          </div>
          <p className="mb-4 text-xs font-light leading-relaxed">
            At Nallakkar, we create original, quality products with cultural
            authenticity, designed in-house to meet your modern needs. We're
            more than a brand; we're "good people" building good things with
            good intent, dedicated to elevating your everyday moments.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 text-lg">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="hover:text-gray-200" />
            </a>
            <a href="#" aria-label="X">
              <FaXTwitter className="hover:text-gray-200" />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp className="hover:text-gray-200" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-gray-200" />
            </a>
            <a href="#" aria-label="Email">
              <FaRegEnvelope className="hover:text-gray-200" />
            </a>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div>
            <div className="font-semibold mb-3 text-base">ABOUT</div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nallakkar Stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-base">HELP</div>
            <ul className="space-y-2">
              <li>
                <Link to={'/PaymentSecurity'} className="hover:underline">
                  Payments
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-base">Product Details</div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Toys
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Home Decors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Contact Details */}
        <div className="md:w-1/4">
          <div className="font-semibold mb-3 text-base">Reach Us</div>
          <div className="mb-2 flex items-start gap-2">
            <GoLocation className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
            <span className="text-xs leading-tight">
              Flat No.: 1, Ward Number 8/5, Karyappa Badavane, Lingenahlli.,
              Madhugiri, <br />
              Tumakuru, Karnataka-572132.
              <br />
              Nearby Landmark: Assistant Executive Engineer Office.
            </span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <FiPhone className="w-4 h-4 text-white flex-shrink-0" />
            <span className="text-xs">+91-8884665337</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMail className="w-4 h-4 text-white flex-shrink-0" />
            <span className="text-xs">support@nallakkar.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-200 bg-primary">
        <div className="flex flex-wrap gap-6 w-full md:w-auto justify-center items-center">
          <a href="#" className="hover:underline">
            Returns Policy
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
