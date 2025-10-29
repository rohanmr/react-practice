import React from "react";
import { FiHeart, FiStar, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[230px] sm:max-w-[250px] mx-auto p-4 relative">
      {/* Discount badge */}
      {product.discount && (
        <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">
          -{product.discount}
        </span>
      )}

      {/* Wishlist Icon */}
      <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-50">
        <FiHeart className="text-gray-600 w-4 h-4" />
      </button>

      {/* Product Image */}
      <div className="flex justify-center mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
        <Link to={`/product-details/${product.id}`}>{product.name}</Link>
      </h3>
      <div className="text-xs text-gray-500 mt-1">
        {product.unit}{" "}
        <span className="inline-flex items-center ml-1 text-yellow-500 font-medium">
          <FiStar className="w-3 h-3 mr-1" /> {product.rating}
        </span>
      </div>

      {/* Price */}
      <div className="mt-2 text-lg font-bold text-gray-900">
        Rs{product.price}
      </div>

      {/* Quantity & Cart */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center border rounded-md">
          <button className="p-1.5 text-gray-600 hover:text-[#F7A600]">
            <FiMinus />
          </button>
          <span className="px-2 text-sm">1</span>
          <button className="p-1.5 text-gray-600 hover:text-[#F7A600]">
            <FiPlus />
          </button>
        </div>

        <button className="text-sm font-medium text-[#F7A600] hover:underline">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
