import React from "react";
import Header from "./Components/Header/index";
import MainHeader from "./Components/Navigation/mainheader";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hello from the frontend!</h1>
      <MainHeader />
      <Header />
    </div>
  );
};

export default App;
