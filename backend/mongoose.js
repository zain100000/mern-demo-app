const mongoose = require("mongoose");
const Product = require("./models/products");

mongoose
  .connect(
    "mongodb+srv://zain_2000:Theginyuforce05@cluster0.bu2dyud.mongodb.net/products_test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

exports.createProduct = createProduct;
