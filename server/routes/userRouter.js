const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

const validateToken = require("../middleware/validateTokenHandler");
//get
router.post("/register", registerUser);
//post
router.post("/login", loginUser);
//current
router.get("/current", validateToken, currentUser);

module.exports = router;
