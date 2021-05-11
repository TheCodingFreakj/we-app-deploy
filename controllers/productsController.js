const Product = require("../models/product");
const getproducts = async (req, res, next) => {
  const products = await Product.find().sort({ price: -1 });
  res.json(products);
};

const addproducts = async (req, res, next) => {
  console.log(typeof req.body);
  const { prodName, price, desc } = req.body;
  try {
    let oldproduct = await Product.findOne({ prodName });
    const newProduct = new Product({
      prodName: prodName,
      price: price,
      desc: desc,
    });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { addproducts, getproducts };
