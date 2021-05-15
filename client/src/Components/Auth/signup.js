import React from "react";
import "./auth.css";
import axios from "axios";

const Signup = () => {
  const [form, setform] = React.useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const { username, name, email, password } = form;
  const handlechange = (e) => {
    console.log(e.target);
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    axios
      .post("http://localhost:5000/api/v1/signup", {
        form,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <form id="form-id" onSubmit={handleSubmit}>
      <label>username</label>
      <input
        type="text"
        id="name"
        name="username"
        value={username}
        required
        onChange={handlechange}
      ></input>
      <label>name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        required
        onChange={handlechange}
      ></input>

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

export default Signup;
