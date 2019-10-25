const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ""
  },
  application: {
    type: String,
    default: ""
  },
  registrationDate: {
    type: String,
    default: ""
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },

  avatar: {
    type: String,
    default: ""
  },

  address: {
    type: String,
    default: ""
  },
  permissions: {
    type: Number,
    default: 1
  },
  appVersion: {
    type: String,
    default: ""
  },
  lastLocation: {
    type: String,
    default: ""
  },
  lastActive: {
    type: String,
    default: ""
  },
  date: {
    type: String,
    default: Date.now
  },
  role: {
    type: String,
    default: "user", //user, restaurant, admin
  }
});

module.exports = User = mongoose.model("users", UserSchema);
