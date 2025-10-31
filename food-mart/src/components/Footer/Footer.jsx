import React from "react";
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";
import { GiFruitBowl } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-white  mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Social Icons */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <GiFruitBowl className="w-10 h-10 text-[#F7A600]" />
            <div>
              <h1 className="text-xl font-bold text-[#F7A600]">FOODMART</h1>
              <p className="text-xs text-gray-500 tracking-wide">
                GROCERY STORE
              </p>
            </div>
          </div>

          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-[#F7A600] hover:text-white transition-all"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-[#F7A600] hover:text-white transition-all"
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-[#F7A600] hover:text-white transition-all"
            >
              <FiYoutube />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-[#F7A600] hover:text-white transition-all"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Ultras</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Our Journals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Affiliate Programme
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Ultras Press
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Cookie Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F7A600]">
                Delivery Information
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Subscribe Us</h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#F7A600]"
            />
            <button className="bg-[#F7A600] text-white px-4 rounded-r-md hover:bg-[#e69900] transition-all text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © 2023 Foodmart. All rights reserved.{" "}
        <span className="block md:inline">
          Free HTML Template by{" "}
          <a href="#" className="hover:text-[#F7A600] font-medium">
            TemplatesJungle
          </a>{" "}
          Distributed by{" "}
          <a href="#" className="hover:text-[#F7A600] font-medium">
            ThemeWagon
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
