const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");

async function createUser(args) {
  try {
    const { name, email, phoneNumber, address, zipCode } = args.userInput;

    const user = await User.findOne({ email });

    if (user) {
      throw new Error("User already exists!");
    }

    const newUser = new User({ name, email, phoneNumber, address, zipCode });

    await newUser.save();

    var token = jwt.sign({ id: newUser._id }, keys.secretOrKey);
    token = "Bearer " + token;

    return { token, ...newUser._doc };
  } catch (err) {
    throw err;
  }
}

module.exports = { createUser };
