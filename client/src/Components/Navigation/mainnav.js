import React from "react";
import "./mainnav.css";

import Navlinks from "./navlinks";
const MainNav = (props) => {
  return (
    <>
      <button className="main-nav-menu-button">
        <span />
        <span />
        <span />
      </button>

      <nav>
        <Navlinks />
      </nav>
    </>
  );
};

export default MainNav;
