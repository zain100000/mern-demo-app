const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(
    "mongodb+srv://zain_2000:Theginyuforce05@cluster0.bu2dyud.mongodb.net/products_test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProducts = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  let products;
  products = await Product.find().exec();

  res.json(products);
};

exports.createProducts = createProducts;
exports.getProducts = getProducts;
