import React from "react";
import MainNav from "../Navigation/mainnav";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Products from "../Products/index";
import AddProd from "../Products/addproducts";
import Cart from "../Cart/index";
import Home from "../Home/index";
import Signin from "../Auth/login";
import Signup from "../Auth/signup";
import "./styles.css";

const Herosection = () => {
  return (
    <div className="hero-section">
      <Router>
        <h1 className="main-nav-title">
          <Link to="/products">Cart system</Link>
        </h1>
        <MainNav />
        <div className="Wrapper">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/new" exact>
              <AddProd />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/signin" exact>
              <Signin />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Herosection;
