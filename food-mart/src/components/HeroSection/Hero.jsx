import React from "react";
import { FiArrowRight } from "react-icons/fi";
import heroImg1 from "../../assets/product-thumb-1.png";
import heroImg2 from "../../assets/ad-image-1.png";
import heroImg3 from "../../assets/ad-image-2.png";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Main Hero Banner */}
      <div className="relative bg-blue-50 rounded-2xl flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-between px-6 sm:px-10 py-8 sm:py-10 overflow-hidden">
        {/* Text Content */}
        <div className="max-w-xs sm:max-w-sm text-center sm:text-left">
          <p className="text-[#F7A600] font-medium mb-2 text-sm sm:text-base">
            100% Natural
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
            Fresh Smoothie <br className="hidden sm:block" /> & Summer Juice
          </h1>
          <p className="text-gray-600 text-sm mt-3 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            massa diam elementum.
          </p>
          <button className="border cursor-pointer border-gray-700 text-gray-800 px-4 sm:px-5 py-2 text-sm font-medium rounded hover:bg-gray-800 hover:text-white transition">
            SHOP NOW
          </button>
        </div>

        {/* Juice Bottle Image */}
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-0">
          <img
            src={heroImg1}
            alt="Smoothie Bottle"
            className="w-36 sm:w-44 md:w-56 lg:w-64 xl:w-72 drop-shadow-xl"
          />
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7A600] rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      {/* Right: Offer Cards */}
      <div className="grid grid-rows-2 gap-6">
        {/* Top Offer */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-green-50 rounded-2xl px-6 sm:px-8 py-6 sm:py-8 text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-700 font-medium text-base sm:text-lg">
              20% Off
            </p>
            <p className="text-xs tracking-widest text-gray-500 mt-1">SALE</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1">
              Fruits & Vegetables
            </h3>
            <button className="flex items-center justify-center cursor-pointer sm:justify-start gap-2 text-sm text-gray-700 mt-3 hover:text-[#F7A600] transition">
              Shop Collection <FiArrowRight />
            </button>
          </div>
          <img
            src={heroImg2}
            alt="Fruits & Vegetables"
            className="w-28 sm:w-32 md:w-36 lg:w-40"
          />
        </div>

        {/* Bottom Offer */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-red-50 rounded-2xl px-6 sm:px-8 py-6 sm:py-8 text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-700 font-medium text-base sm:text-lg">
              15% Off
            </p>
            <p className="text-xs tracking-widest text-gray-500 mt-1">SALE</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1">
              Baked Products
            </h3>
            <button className="flex items-center cursor-pointer justify-center sm:justify-start gap-2 text-sm text-gray-700 mt-3 hover:text-[#F7A600] transition">
              Shop Collection <FiArrowRight />
            </button>
          </div>
          <img
            src={heroImg3}
            alt="Baked Products"
            className="w-28 sm:w-32 md:w-36 lg:w-40"
          />
        </div>
      </div>
    </section>
  );
}
