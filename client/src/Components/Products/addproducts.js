import React from "react";
import "./products.css";
import axios from "axios";
//https://dev.to/rmiyazaki6499/deploying-a-production-ready-react-express-app-on-aws-62m#connecting-to-your-ec2-instance
const AddProd = () => {
  const [products, setproducts] = React.useState({
    prodName: "",
    price: "",
    desc: "",
    available_products: "",
  });
  const [loading, setloading] = React.useState(false);
  const { prodName, price, desc, available_products } = products;
  const [storeproducts, setstoreproducts] = React.useState();

  React.useEffect(() => {
    axios.get("http://localhost:5000/api/v1/getproducts").then(
      (response) => {
        setloading(true);
        setstoreproducts(response.data);
        setloading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const handlechange = (e) => {
    setproducts({ ...products, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/v1/add-product", {
        prodName: products.prodName,
        price: products.price,
        desc: products.desc,
        available_products: products.available_products,
      })
      .then(
        (response) => {
          setloading(true);
          console.log(response.data);
          setloading(false);

          setproducts("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="flex-container">
      <div className="flex-items">
        <form id="form-id" onSubmit={handleSubmit}>
          <label>Add product name</label>
          <input
            type="text"
            id="name"
            name="prodName"
            value={prodName}
            required
            onChange={handlechange}
          ></input>

          <label>Add product price</label>
          <input
            type="number"
            id="name"
            name="price"
            value={price}
            required
            onChange={handlechange}
          ></input>

          <label>Add product desc</label>
          <input
            type="textarea"
            id="name"
            name="desc"
            value={desc}
            required
            rows="40"
            cols="50"
            onChange={handlechange}
          ></input>

          <label>Product Availability</label>
          <input
            type="number"
            id="name"
            name="available_products"
            value={available_products}
            required
            onChange={handlechange}
          ></input>
          <input type="submit" className="favorite styled" />
        </form>
      </div>
      <div className="flex-items">
        <h2>category one</h2>
        {storeproducts
          ? storeproducts.map((p) => (
              <div>
                <div className="flex-items secondary">{p.prodName}</div>
                <button className="flex-items btn-style-1">Edit</button>
                <button className="flex-items btn-style-2">Delete</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default AddProd;
