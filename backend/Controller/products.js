const Product = require("../Model/product");
const Category = require("../Model/category");

const getAllProducts = async (req, res) => {
  try {
    console.log(req?.body?.filter);
    const { category, rating } = req?.body?.filter;
    let products = null;
    console.log(category + "  " + rating);

    if (category === "All" && rating === "All") {
      products = await Product.find({});
    }
    if (category === "All" && rating !== "All") {
      console.log("second");
      products = await Product.find({ "review.rating": rating });
    } else {
      console.log("reached");
      products = await Product.find({ "category": category });
    }

    if (!products) {
      res.status(400).json({ message: "No products for these filters" });
      return;
    }
    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getProduct =  (req, res) => {};

const add = async (req, res) => {
  try {
    const { product } = req?.body;

    const categoryExit = await Category.find({ name: product?.category });
    console.log(categoryExit);
    if (categoryExit.length===0) {
      res.status(200).json({ message: "This category doesnot exist" });
      return;
    }

    // Add validation here
    const newProduct = new Product({
      name: product?.name,
      description: product?.description,
      price: product?.price,
      stockQuantity: product?.stockQuantity,
      category: product?.category, //reference
      review: {
        rating: product?.review?.rating,
        reviewerCount: product?.review?.reviewerCount,
      },
      images: product.images,
    });
    newProduct.save();
    res.status(200).json({ message: "New Product added" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const remove = (req, res) => {
  const { body } = req;
  res.send(body);
};

const update = (req, res) => {
  const { body } = req;
  res.send(body);
};

module.exports = { getAllProducts, getProduct, add, remove, update };
