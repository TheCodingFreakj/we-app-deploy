const express = require("express");
const router = express.Router();
const {
  addproducts,
  getproducts,
} = require("../controllers/productsController");

router.post("/add-product", addproducts);
router.get("/getproducts", getproducts);
// router.get("/getproduct", getproducts);

module.exports = router;
