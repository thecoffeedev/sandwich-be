const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ProductSchema = new Schema(
  {
    productName: { type: String },
    productDescription: { type: String },
    productCategory: { type: String, enum: ["sandwich", "drink", "snack"] },
    productPrice: { type: Number },
    productImage: { type: String },
    productStatus: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    orderPending: { type: Number, default: 0 },
    orderPicked: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const ProductsModel = Mongoose.model("products", ProductSchema);

module.exports = ProductsModel;
