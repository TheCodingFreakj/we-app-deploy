import React from "react";
import Herosection from "./Components/Header/index";
import Footer from "./Components/Footer/footer";
import MainHeader from "./Components/Navigation/mainheader";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MainHeader>
        <div className="upper-section">
          <Herosection />
        </div>
        <div className="mid-section">This is main contente</div>
        <div className="lower-section">
          <Footer />
        </div>
      </MainHeader>
    </div>
  );
};

export default App;
