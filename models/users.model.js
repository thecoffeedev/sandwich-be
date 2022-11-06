const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  type: { type: String, enum: ["user", "admin"] },
});

const UserModel = Mongoose.model("users", UserSchema);

module.exports = UserModel;
