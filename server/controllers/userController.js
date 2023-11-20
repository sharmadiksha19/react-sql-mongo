const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//@desc Register User
//@route POST /api/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, repassword, usertype } = req.body;
  if (!username || !password || !repassword || !usertype) {
    res.status(400);
    throw new Error("All fields are Mandatory!");
  }
  const userAvailable = await User.findOne({ username });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }
  //hash password
  const hashedpassowrd = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedpassowrd);
  const user = await User.create({
    username,
    password: hashedpassowrd,
    repassword: hashedpassowrd,
    usertype,
  });
  console.log(`User Created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, username: user.username });
  } else {
    res.status(400);
    throw new Error("User data not valid!");
  }
  res.json({ message: "Registered the user" });
});

//@desc Login users
//@route POST /api/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  // Check if the username exists
  if (!username || !password) {
    res.status(401);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare.password, user.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email password not correct");
  }
});

//@desc Current users infor
//@route POST /api/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user.username);
});

module.exports = { registerUser, loginUser, currentUser };
