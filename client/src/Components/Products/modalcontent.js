import React from "react";
import "./products.css";

const ModalContent = (props) => {
  let productnames = Object.keys(props.selected);
  console.log(productnames);
  return Object.keys(props.selected).map((key, i) => (
    <div className="order-summary" key={i}>
      <span className="prod-name"> {key}</span>
      <span className="price"> {props.selected[key]}</span>
      <span className="quantity">
        <select>
          <option value="1">--+--</option>
        </select>
      </span>
    </div>
  ));
};

export default ModalContent;
