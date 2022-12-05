var express = require("express");
const OrdersModel = require("../models/orders.model");
const ProductsModel = require("../models/products.model");
var router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const { userId, sandwichId, drinkId, snackId, totalPrice, name, address } =
      req.body;
    const order = await OrdersModel.create({
      userId,
      sandwichId,
      drinkId,
      snackId,
      totalPrice,
      name,
      address,
    });
    const updateProducts = await ProductsModel.updateMany(
      { _id: { $in: [sandwichId, drinkId, snackId] } },
      { $inc: { orderPending: 1 } }
    );
    res.status(200).send({
      status: "success",
      message: "Order has been created successfully",
      data: order,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/completeOrder", async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await OrdersModel.findOne({ _id: orderId });
    const updateProducts = await ProductsModel.updateMany(
      { _id: { $in: [sandwichId, drinkId, snackId] } },
      { $inc: { orderPending: 1 } }
    );
    res.status(200).send({
      status: "success",
      message: "Order has been created successfully",
      data: order,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/current", async (req, res, next) => {
  try {
    const orders = await OrdersModel.find({ status: "pending" });
    res.status(200).send({
      status: "success",
      message: "Current orders have been fetched successfully",
      data: orders,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/completed", async (req, res, next) => {
  try {
    const orders = await OrdersModel.find({ status: "done" });
    res.status(200).send({
      status: "success",
      message: "Completed orders have been fetched successfully",
      data: orders,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
