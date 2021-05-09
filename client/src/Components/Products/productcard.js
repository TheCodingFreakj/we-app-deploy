import React from "react";
import "./products.css";

const ProductCard = ({ id, name }) => {
  return (
    <div className="product-card">
      <h2>This is the product</h2>
      {name}
    </div>
  );
};

export default ProductCard;
