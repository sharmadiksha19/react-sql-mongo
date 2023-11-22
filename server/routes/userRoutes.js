const express = require("express");
const router = express.Router();

const {
  addUser,
  loginUser,
  removeUser,
} = require("../controllers/userController");

router.post("/register", addUser);

router.post("/login", loginUser);

router.delete("/delete/:username", removeUser);

module.exports = router;
