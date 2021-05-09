import React from "react";
import "./mainheader.css";

const MainHeader = (props) => {
  console.log(props);
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
