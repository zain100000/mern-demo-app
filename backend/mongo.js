const MongoClient = require("mongodb").MongoClient;

const url = `mongodb+srv://zain_2000:Theginyuforce05@cluster0.bu2dyud.mongodb.net/products_test?retryWrites=true&w=majority`;

const createProducts = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
    console.log("Product added:", result);
  } catch (error) {
    return res.status(500).json({ message: "Could not store data." });
  } finally {
    client.close();
  }

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.status(500).json({ message: "Could not Retrive data." });
  } finally {
    client.close();
  }

  res.json(products);
};

exports.createProducts = createProducts;
exports.getProducts = getProducts;
