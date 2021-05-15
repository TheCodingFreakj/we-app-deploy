import React from "react";
import "./auth.css";
// import axios from "axios";

const Signin = () => {
  const [form, setform] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = form;
  const handlechange = (e) => {
    console.log(e.target);
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <form id="form-id" onSubmit={handleSubmit}>
      <label>email</label>
      <input
        type="text"
        id="name"
        name="email"
        value={email}
        required
        onChange={handlechange}
      ></input>

      <label>Password</label>
      <input
        type="text"
        id="name"
        name="password"
        value={password}
        required
        onChange={handlechange}
      ></input>
      <input type="submit" className="favorite styled" />
    </form>
  );
};

export default Signin;
