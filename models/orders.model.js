const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    sandwichId: { type: Schema.Types.ObjectId, ref: "products" },
    drinkId: { type: Schema.Types.ObjectId, ref: "products" },
    snackId: { type: Schema.Types.ObjectId, ref: "products" },
    status: { type: String, enum: ["pending", "done"] },
    totalPrice: { type: Number },
    name: { type: String },
    address: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const OrdersModel = Mongoose.model("orders", OrderSchema);

module.exports = OrdersModel;
