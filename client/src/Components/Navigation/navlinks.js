import React from "react";
import "./navlinks.css";
import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/products" exact>
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/products/new">Add Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
