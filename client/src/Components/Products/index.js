import React from "react";
import "./products.css";
import axios from "axios";
import ProductCard from "../Products/productcard";
import ModalContent from "../Products/modalcontent";

const Products = () => {
  const [storeproducts, setstoreproducts] = React.useState();
  const [showmodal, setshowmodal] = React.useState(false);
  const [selected, setselected] = React.useState({});
  React.useEffect(() => {
    axios.get("http://localhost:5000/api/v1/getproducts").then(
      (response) => {
        setstoreproducts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const clickedCard = (e) => {
    setselected({ ...selected, [e.target.name]: e.target.value });
    setshowmodal(true);

  };

  const showproducts = () => {
    return storeproducts.map((p) => (
      <div key={p._id} className="product-card">
        <h2>Product Catalogue</h2>
        <h2>{p.prodName}</h2>
        <p>{p.price}</p>

        <button
          className="btn"
          name={p.prodName}
          value={p.price}
          onClick={(e) => clickedCard(e)}
        >
          Click
        </button>
      </div>
    ));
  };

  return (
    <>
      <div className="container">
        {storeproducts ? showproducts() : <p>Loading</p>}
      </div>
      <ProductCard show={showmodal}>
        <div id="modal-box" className="modal-box">
          <button className="btn" onClick={() => setshowmodal(false)}>
            Close
          </button>
          <ModalContent selected={selected} />
          <div>
            <button className="btn">Pay</button>
          </div>
        </div>
      </ProductCard>
    </>
  );
};

export default Products;
