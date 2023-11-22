const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrderById,
  addOrder,
  removeOrder,
} = require("../controllers/orderController");

router.get("/", getOrders);
router.get("/:orderid", getOrderById);
router.post("/", addOrder);
router.delete("/", removeOrder);

module.exports = router;
