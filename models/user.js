const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

const User = new mongoose.model(`users`, userSchema);

module.exports = User;