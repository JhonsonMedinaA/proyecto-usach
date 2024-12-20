const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  lastName: String,
  direction: String,
  email: String,
  password: String,
  comune: String,
  region: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    require: true,
    default: "active",
  },
  rol: {
    type: String,
    enum: ["user"],
    require: true,
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);