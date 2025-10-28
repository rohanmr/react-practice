import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection/Hero";
import CategorySection from "../components/CategorySection/CategorySection";
import products from "../data.js";
import ProductCard from "../components/ProductCard/ProductCard";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(products);
  }, []);
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 lg:px-16 gap-6">
        {product.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
