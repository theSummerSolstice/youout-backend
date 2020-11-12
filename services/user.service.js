const User = require('../models/User');

exports.findUser = async (email) => {
  return await User.findOne({ email });
};

exports.createUser = async (name, email, image) => {
  return await User.create({ name, email, image });
};
