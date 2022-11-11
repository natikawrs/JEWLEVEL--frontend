const express = require("express");

const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/", orderController.createOrder);
router.get("/list", orderController.getUserOrder);

module.exports = router;
