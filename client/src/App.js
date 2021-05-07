import React from "react";
import Header from "./Components/Header";
import axios from "axios";
import "./App.css";

const App = () => {
  const [res, setres] = React.useState({});

  React.useEffect(() => {
    axios.get("/api/v1/say-something").then((res) => {
      const response = res.data;
      setres(response);
    });
  });
  return (
    <div className="App">
      <h1>Hello from the frontend!</h1>
      <h1>{res.body}</h1>
      <Header />
    </div>
  );
};

export default App;
