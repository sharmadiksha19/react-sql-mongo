const asyncHandler = require("express-async-handler");

const db = require("../config/sqlConnection");

//@route GET /order
//@access public
const getOrders = asyncHandler(async (req, res) => {
  db.query("SELECT * from orders", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

//@route GET /order/:id
//@access public
const getOrderById = asyncHandler(async (req, res) => {
  const orderId = req.params.orderid;
  db.query(
    "SELECT * from orders where orderId= ?",
    [orderId],
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          order: results,
        });
      }
    }
  );
});

//@route DELETE /order
//@access public
const removeOrder = asyncHandler(async (req, res) => {
  const { orderId, username } = req.body;
  db.query(
    "DELETE from orders where orderId= ? and userName= ?",
    [orderId, username],
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({ message: "Order deleted successfully" });
      }
    }
  );
});

//@route POST /order
//@access public
const addOrder = asyncHandler(async (req, res) => {
  const orderData = req.body;

  const values = [
    orderData.orderId,
    orderData.userName,
    orderData.orderName,
    orderData.orderPrice,
    orderData.userAddress,
    orderData.creditCardNo,
    orderData.purchaseDate,
    orderData.shipDate,
    orderData.quantity,
    0,
    15,
    null,
    "",
  ];

  db.query(
    "INSERT INTO orders " +
      "(orderId, userName, orderName, orderPrice, userAddress, creditCardNo, purchaseDate, shipDate, quantity, shippingCost, discount, saleAmount, storeId, storeAddress)" +
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    values,
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          order: results,
        });
      }
    }
  );
});

module.exports = {
  getOrders,
  getOrderById,
  addOrder,
  removeOrder,
};
