const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/cart", cartController.createCart);
router.get("/cart", cartController.getCart);
router.get("/cart/totalPrice", cartController.getTotalPrice);
router.delete("/cart/:cartId", cartController.deleteCart);
router.patch("/cart", cartController.updateCart);

module.exports = router;
