const productService = require("../services/productService");

const { Product, Wishlist } = require("../models");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.findAllProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findOne({ where: { id: productId } });
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
};

exports.getWishList = async (req, res) => {
  const userId = req.user.id;
  const findWishListByUser = await Wishlist.findAll({
    where: { userId: userId },
    include: { model: Product },
    order: [["updatedAt", "DESC"]]
  });
  res.status(200).json({ findWishListByUser });
};

exports.toggleWishList = async (req, res, next) => {
  const userId = req.user.id;
  const { productId } = req.body;
  try {
    const removeWishList = await Wishlist.findOne({
      where: { userId, productId }
    });

    if (removeWishList) {
      // console.log(removeWishList);
      await removeWishList.destroy();
      return res.status(201).json({ removeWishList });
    }

    const addWishList = await Wishlist.create({
      userId,
      productId
    });

    return res.status(201).json({ addWishList });
  } catch (err) {}
};
