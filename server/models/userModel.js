const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the name"],
      unique: [true, "Username Already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the email"],
    },
    repassword: {
      type: String,
      required: [true, "Please add the confirm password"],
    },
    usertype: {
      type: String,
      required: [true, "Please add the phone"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userSchema);
