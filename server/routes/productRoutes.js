const express = require("express");
const router = express.Router();

const {
  getProducts,
  create,
  remove,
  putProducts,
} = require("../controllers/ProductController");

router.route("/").get(getProducts).post(create);
router.route("/:id").delete(remove).put(putProducts);

module.exports = router;
