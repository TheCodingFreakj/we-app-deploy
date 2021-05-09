import React from "react";
import "./products.css";
import axios from "axios";
import ProductCard from "../Products/productcard";

const Products = () => {
  const [storeproducts, setstoreproducts] = React.useState();
  React.useEffect(() => {
    axios.get("http://localhost:5000/api/v1/getproducts").then(
      (response) => {
        console.log(response.data);
        setstoreproducts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="container">
      {storeproducts ? (
        storeproducts.map((p) => <ProductCard id={p._id} name={p.prodName} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Products;
