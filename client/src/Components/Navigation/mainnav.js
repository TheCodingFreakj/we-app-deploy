import React from "react";
import "./mainnav.css";
import MainHeader from "./mainheader";
import { Link } from "react-router-dom";
import Navlinks from "./navlinks";
const MainNav = (props) => {
  return (
    <MainHeader>
      <button className="main-nav-menu-button">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-nav-title">
        <Link to="/products">Cart system</Link>
      </h1>
      <nav>
        <Navlinks />
      </nav>
    </MainHeader>
  );
};

export default MainNav;
