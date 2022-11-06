const bcrypt = require("bcrypt");
const UserModel = require("../models/users.model");

const saltRounds = 10;

const createUser = async (username, password, type) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  const user = await UserModel.create({ username, password: hash, type });
  return user;
};

const userLogin = async (username, password) => {
  const user = await UserModel.findOne({ username: username });
  const authenticated = bcrypt.compareSync(password, user.password);
  if (authenticated) {
    return true;
  } else {
    return false;
  }
};

module.exports = { createUser, userLogin };
