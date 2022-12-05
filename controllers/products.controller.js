const ProductsModel = require("../models/products.model");

module.exports = {
  getActiveProducts: async () => {
    const products = await ProductsModel.find({ productStatus: "active" });
    return products;
  },
  createProduct: async (productData) => {
    const product = await ProductsModel.create(productData);
    return product;
  },
  getPendingOrders: async () => {
    const products = await ProductsModel.find({ orderPending: { $gt: 0 } });
    return products;
  },
  getPickedOrders: async () => {
    const products = await ProductsModel.find({ orderPicked: { $gt: 0 } });
    return products;
  },
  deleteProduct: async (productId) => {
    const response = await ProductsModel.updateOne(
      { _id: productId },
      { $set: { productStatus: "inactive" } }
    );
    return response;
  },
};
