const asyncHandler = require("express-async-handler");
const db = require("../config/sqlConnection");

//@route GET /products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  db.query("SELECT * from productdetails", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        results,
      });
    }
  });
});

//@route POST /products
//@access public
const create = asyncHandler(async (req, res) => {
  const productdetails = req.body;
  const result = db.query(
    "INSERT INTO productdetails(ProductType, Id, productName , productPrice , productImage, productManufacturer,productCondition, productDiscount, inventory)" +
      "VALUES(?,?,?,?,?,?,?,?,?)",
    [
      productdetails.ProductType,
      productdetails.Id,
      productdetails.productName,
      productdetails.productPrice,
      productdetails.productImage,
      productdetails.productManufacturer,
      productdetails.productCondition,
      productdetails.productDiscount,
      productdetails.inventory,
    ],
    (err, results) => {
      if (err) {
        return res.status(500).send(err.message);
      } else {
        return res.status(200).json({ message: "Product created" });
      }
    }
  );
});

//@route DELETE /products
//@access public
const remove = asyncHandler(async (req, res) => {
  const productdetails = req.body;
  db.query(
    `DELETE FROM productdetails WHERE id=?`,
    [productdetails.Id],

    (err, results) => {
      if (err) {
        return res.status(500).send(err.message);
      } else {
        return res.status(200).json({ message: "Product Deleted" });
      }
    }
  );
});

//@route PUT /products
//@access public
const putProducts = asyncHandler(async (req, res) => {
  const Id = req.params.id;
  const productdetails = req.body;

  db.query(
    "UPDATE productdetails SET ProductType=?, productName=?, productPrice=?, productImage=?, productManufacturer=?, productCondition=?, productDiscount=?, inventory=? WHERE Id = ?",
    [
      productdetails.ProductType,
      productdetails.productName,
      productdetails.productPrice,
      productdetails.productImage,
      productdetails.productManufacturer,
      productdetails.productCondition,
      productdetails.productDiscount,
      productdetails.inventory,
      Id,
    ],
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }

      res.status(200).json({ message: "Product updated successfully" });
    }
  );
});

module.exports = { getProducts, create, remove, putProducts };
