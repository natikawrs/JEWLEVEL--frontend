const AppError = require("../utils/appError");
const { Order, OrderItem, Product, User } = require("../models");

exports.createOrder = async (req, res, next) => {
  try {
    // axios.post('/cart',{[{ear},{neck}]})
    // axios.post("/cart", { orderInfo, arriteminfo });

    const {
      firstName,
      lastName,
      address,
      street,
      subDistrict,
      district,
      city,
      zipcode,
      country,
      cardNumber,
      expiredDate,
      cvc,
      subTotal
    } = req.body.orderInfo;

    const cartBack = req.body.arriteminfo;
    // cartBack[0],cartBack[1]

    // const orderItems = JSON.parse(req.body.orderItems);

    // const isEmail = validator.isEmail(String(email));
    // const isMobile = validator.isMobilePhone(String(mobile));

    if (!firstName) {
      throw new AppError("first name is required", 400);
    }
    if (!lastName) {
      throw new AppError("last name is required", 400);
    }
    if (!address) {
      throw new AppError("address is required", 400);
    }
    if (!street) {
      throw new AppError("2 is required", 400);
    }
    if (!subDistrict) {
      throw new AppError("3 is required", 400);
    }
    if (!district) {
      throw new AppError("4is required", 400);
    }
    if (!city) {
      throw new AppError("5 is required", 400);
    }
    if (!zipcode) {
      throw new AppError("6 is required", 400);
    }
    if (!country) {
      throw new AppError("7 is required", 400);
    }
    if (!cardNumber) {
      throw new AppError("8 is required", 400);
    }
    if (!expiredDate) {
      throw new AppError("9 is required", 400);
    }
    if (!cvc) {
      throw new AppError("10 is required", 400);
    }
    // if (!subTotal) {
    //   throw new AppError("11 is required", 400);
    // }
    const userId = req.user.id;

    const newOrder = await Order.create({
      firstName,
      lastName,
      address,
      street,
      subDistrict,
      district,
      city,
      zipcode,
      country,
      cardNumber,
      expiredDate,
      cvc,
      userId,
      subTotal
    });
    console.log(cartBack);
    await Promise.all(
      cartBack.map(async (item) => {
        await OrderItem.create({
          quantity: item.quantity,
          totalPrice: item.totalPrice,
          productId: item.productId,
          orderId: newOrder.id
        });
      })
    );
    const orderItemRes = await OrderItem.findAll({
      where: { orderId: newOrder.id }
    });
    // const orderItems = JSON.parse(req.body.orderItems);
    // console.log(req.body.orderItems);
    // for (let item of orderItems) {
    //   item.orderId = newOrder.id;
    //   await OrderItem.create(item);
    // }

    res.status(201).json({ message: "create order success", orderItemRes });
  } catch (err) {
    next(err);
  }
};

exports.getUserOrder = async (req, res, next) => {
  try {
    const userId = req.user.id;
    // console.log(userId);
    const orders = await Order.findAll({
      where: { userId },
      include: [{ model: OrderItem, include: { model: Product } }]
    });
    res.status(200).json({ orders: orders });
  } catch (err) {
    next(err);
  }
};
