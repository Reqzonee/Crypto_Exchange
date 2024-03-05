// server/models/User.js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirmpassword:String

});

const User = mongoose.model("users", UserSchema);

module.exports = User;
