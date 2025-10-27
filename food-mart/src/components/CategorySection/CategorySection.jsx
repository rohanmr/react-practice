import React from "react";
import {
  FiCoffee,
  FiBox,
  FiShoppingBag,
  FiDroplet,
  FiShoppingCart,
  FiPackage,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function CategorySection() {
  const categories = [
    { name: "Breads & Sweets", icon: <FiCoffee className="text-[#d39b3f]" /> },
    {
      name: "Fruits & Veges",
      icon: <FiShoppingBag className="text-[#d39b3f]" />,
    },
    { name: "Juices & Drinks", icon: <FiDroplet className="text-[#e65353]" /> },
    { name: "Meat & Poultry", icon: <FiPackage className="text-[#e68b3f]" /> },
    { name: "Packaged Goods", icon: <FiBox className="text-[#86b43f]" /> },
    {
      name: "Fresh Greens",
      icon: <FiShoppingCart className="text-[#3f9f5f]" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
          Category
        </h2>

        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-[#F7A600] font-medium"
          >
            View All Categories →
          </a>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
              <FiChevronLeft className="text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
              <FiChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:scale-[1.1] transition flex flex-col items-center justify-center py-8 cursor-pointer"
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
