require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const notFound = require("./middlewares/notFound");
const error = require("./middlewares/error");
const authenticate = require("./middlewares/authenticate");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);
app.use("/user", authenticate, userRoute);
app.use("/product", productRoute);
app.use("/cart", authenticate, cartRoute);
app.use("/order", authenticate, orderRoute);

app.use(notFound);
app.use(error);

// const db = require("./models/index");
// const {
//   sequelize,
//   Cart,
//   Chat,
//   Order,
//   OrderItem,
//   Product,
//   Review,
//   User,
//   Wishlist
// } = require("./models");
// db.sequelize.sync({ force: true });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));
