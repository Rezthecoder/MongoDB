const express = require("express");
const router = express.Router();
 const { getAllProducts,getAllProductsTesting } =require('../controllers/products')





router.route("/getproducts").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;
