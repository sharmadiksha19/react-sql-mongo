const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/mongodbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mysql = require("mysql2");

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use("/myStore/reviews", require("./routes/reviewRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/order", require("./routes/orderRoutes"));
app.use("/user", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
