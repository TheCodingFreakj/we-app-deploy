import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Products from "../Products/index";
import AddProd from "../Products/addproducts";
import Cart from "../Cart/index";
import Home from "../Home/index";
const Header = () => {
  return (
    <>
      <Router>
        <main>
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
            <Redirect to="" />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default Header;
