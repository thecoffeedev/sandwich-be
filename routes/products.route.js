var express = require("express");
const {
  getActiveProducts,
  createProduct,
  getPendingOrders,
  getPickedOrders,
  deleteProduct,
} = require("../controllers/products.controller");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await getActiveProducts();
    res.status(200).send({
      status: "success",
      message: "active products have been fetched successfully",
      data: products,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const {
      productName,
      productDescription,
      productCategory,
      productPrice,
      productImage,
    } = req.body;

    const product = await createProduct({
      productName,
      productDescription,
      productCategory,
      productPrice,
      productImage,
    });
    res.status(200).send({
      status: "success",
      message: "Product have been created successfully",
      data: product,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/pending", async (req, res, next) => {
  try {
    const products = await getPendingOrders();
    res.status(200).send({
      status: "success",
      message: "Pending products have been fetched successfully",
      data: products,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/picked", async (req, res, next) => {
  try {
    const products = await getPickedOrders();
    res.status(200).send({
      status: "success",
      message: "Picked products have been fetched successfully",
      data: products,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/picked/update", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/delete", async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const response = await deleteProduct(productId);
    res.status(200).send({
      status: "success",
      message: "The product have been deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
