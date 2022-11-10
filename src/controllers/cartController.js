const { where } = require("sequelize");
const { Cart, Product } = require("../models");
const AppError = require("../utils/appError");

exports.createCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    // const { id } = req.params;

    const userId = req.user.id;
    // console.log(userId);
    const cart = await Cart.findOne({
      where: { userId, productId }
    });
    // console.log(cart);
    if (cart) {
      throw new AppError("already have this item in cart", 400);
    }

    const item = {
      userId,
      productId,
      quantity: 1
    };

    await CartItem.create(item);

    const JoinCartData = await Cart.findOne({
      where: { userId, productId },
      include: [
        {
          model: Product
        }
      ]
    });

    const {
      Product: { name, price }
    } = JoinCartData;

    res.status(200).json({ JoinCartData });
  } catch (err) {
    next(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    // const items = await CartItem.findAll({
    //   where: { userId: req.user.id },
    //   include: Product,
    // });

    const JoinCartData = await Cart.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Product
        }
      ]
    });

    res.status(201).json({ JoinCartData });
  } catch (err) {
    next(err);
  }
};

exports.deleteCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;

    await Cart.destroy({ where: { id: cartId } });
    res.status(200).json({ message: "success Delete" });
  } catch (err) {
    next(err);
  }
};

exports.updateCart = async (req, res, next) => {
  try {
    const { cartItem } = req.body;
    const item = await Cart.update(cartItem, { where: { id: cartItem.id } });
    // console.log(res);
    res.status(200).json({ item });
  } catch (err) {
    next(err);
  }
};

exports.getTotalPrice = async (req, res, next) => {
  try {
    const JoinCartData = await Cart.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Product,
          attributes: ["price"]
        }
      ]
    });

    const totalPrice = JoinCartData.reduce(
      (a, c) => a + c?.quantity * c?.Product?.price,
      0
    );

    console.log(totalPrice);

    res.status(201).json({ totalPrice });
  } catch (err) {
    next(err);
  }
};
