const express = require("express");

const orderController = require("../controllers/orderController");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", orderController.createOrder);
router.get("/list", orderController.getUserOrder);

module.exports = router;
