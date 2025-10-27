import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { GiFruitBowl } from "react-icons/gi";

export default function Navbar() {
  const navList = [
    "Women",
    "Men",
    "Kids",
    "Accessories",
    "Pages",
    "Brand",
    "Sale",
    "Blog",
  ];
  const category = ["All Categories", "Groceries", "Drinks", "Chocolates"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isShopByDropdownOpen, setIsShopByDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm border-b bg-white">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <GiFruitBowl className="w-8 h-8 sm:w-10 sm:h-10 text-[#F7A600]" />
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-[#F7A600]">
              FOODMART
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">
              GROCERY STORE
            </p>
          </div>
        </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden lg:flex relative items-center bg-gray-100 rounded-lg px-4 py-2 w-[500px] max-w-full">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-sm text-gray-700 font-medium mr-2 focus:outline-none cursor-pointer"
            >
              All Categories
              <FiChevronDown className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-8 left-0 w-40 bg-white border shadow-md z-10">
                <ul className="text-sm text-gray-700">
                  {category.map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="flex-1 bg-transparent outline-none text-sm text-gray-600"
          />
          <FiSearch className="text-gray-500" />
        </div>

        {/* Right: Support + Icons */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          <div className="hidden sm:block text-right">
            <p className="text-xs text-gray-500">For Support?</p>
            <p className="text-sm font-semibold text-black">+91 9022467707</p>
          </div>

          <div className="bg-gray-100 p-1.5 rounded-full">
            <FiUser className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>
          <div className="bg-gray-100 p-1.5 rounded-full">
            <FiHeart className="w-5 h-5 text-gray-700 cursor-pointer" />
          </div>

          <div className="hidden sm:block text-right">
            <p className="text-xs text-gray-500">Your Cart</p>
            <p className="text-sm font-semibold text-black">$1290.00</p>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-1.5 rounded-md border text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Menu (hidden on mobile) */}
      <nav className="hidden lg:flex items-center space-x-8 px-6 py-3 border-t text-sm text-gray-700">
        <div className="relative">
          <button
            onClick={() => setIsShopByDropdownOpen(!isShopByDropdownOpen)}
            className="flex items-center font-medium cursor-pointer"
          >
            Shop by Departments
            <FiChevronDown className="ml-1" />
          </button>
          {isShopByDropdownOpen && (
            <div className="absolute top-7 left-0 w-40 bg-white border shadow-md z-20">
              <ul className="text-sm text-gray-700">
                {category.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {navList.map((link) => (
          <a key={link} href="#" className="hover:text-[#F7A600]">
            {link}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-3 space-y-3 text-sm text-gray-700">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setIsShopByDropdownOpen(!isShopByDropdownOpen)}
              className="flex items-center justify-between font-medium"
            >
              Shop by Departments
              <FiChevronDown />
            </button>
            {isShopByDropdownOpen && (
              <div className="mx-3 space-y-2">
                {category.map((item) => (
                  <a key={item} href="#" className="block hover:text-[#F7A600]">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navList.map((link) => (
            <a key={link} href="#" className="block hover:text-[#F7A600]">
              {link}
            </a>
          ))}

          {/* Mobile Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mt-3">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-600"
            />
          </div>
        </div>
      )}
    </header>
  );
}
