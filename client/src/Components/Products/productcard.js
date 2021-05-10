import React from "react";
import "./products.css";

const ProductCard = (props) => {
  if (!props.show) {
    return null;
  }
 

  return (
    <>
      <div>{props.children}</div>;
    </>
  );
};

export default ProductCard;
