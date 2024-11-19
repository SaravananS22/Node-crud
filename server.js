const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ProductRoute = require("./routes/product.route.js");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Middleware for product routes
app.use("/api/products", ProductRoute);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Connection failed: ${error.message}`);
  });
