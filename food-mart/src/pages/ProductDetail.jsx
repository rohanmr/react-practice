import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return <div>Product Detaisls {id}</div>;
};

export default ProductDetail;
