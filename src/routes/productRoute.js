const express = require("express");

const productController = require("../controllers/productController");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/getwishlist", authenticate, productController.getWishList);
router.get("/:productId", productController.getProduct);
router.post("/togglewishlist", authenticate, productController.toggleWishList);

module.exports = router;
