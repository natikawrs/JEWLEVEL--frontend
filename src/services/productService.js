const { Product } = require("../models");

exports.findAllProducts = async () => {
  const products = await Product.findAll({
    order: [["updatedAt", "DESC"]]
  });
  return products;
};

// exports.findProduct = async (productId) => {
//   const product = await Product.findOne({
//     where: { id: productId }
//   });
//   return product;
// };
