const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

connectDB();
const app = express();
const port = process.env.PORT || 5000;
const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM productdetails";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "smarthomesDB",
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

app.use("/api", require("./routes/userRouter"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
