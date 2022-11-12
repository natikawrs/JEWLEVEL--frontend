const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/", cartController.createCart);
router.get("/list", cartController.getCart);
router.get("/totalPrice", cartController.getTotalPrice);
router.delete("/clear", cartController.clearCart);
router.delete("/:cartId", cartController.deleteCart);
router.patch("/", cartController.updateCart);
// router.delete("/clear", cartController.clearCart);

module.exports = router;
