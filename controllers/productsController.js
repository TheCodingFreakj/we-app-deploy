const Product = require("../models/product");
const getproducts = async (req, res, next) => {
  const products = await Product.find().sort({ price: -1 });
  res.json(products);
};

const addproducts = async (req, res, next) => {
  console.log(req.body);
  const { prodName, price, desc, available_products } = req.body;
  try {
    let oldproduct = await Product.findOne({ prodName });
    if (oldproduct) {
      return res.status(400).json({
        errors: [{ msg: "Duplicate Product Item" }],
      });
    }
    const newProduct = new Product({
      prodName: prodName,
      price: price,
      desc: desc,
      available_products: available_products,
    });
    const product = await newProduct.save();
    res.json({ products: product, message: "products added" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { addproducts, getproducts };
