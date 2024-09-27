const Cart = require("../Model/cart");

const getCart = async (req, res) => {
  try {
    const { tokenDecoded } = req;

    const cartItems = await Cart.find({ user: tokenDecoded?.userId });
    if (cartItems !== null) {
      res.status(200).json(cartItems);
    } else {
      res.json({ message: "Cart is Empty" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const addToCart =async (req, res) => {
  try {
    const { products } = req.body;
    const { tokenDecoded } = req;

    // const cartItems = new Cart({
    //   user: tokenDecoded?.userId,
    //   items: products,
    // });

    // cartItems.save();
// const update=products
    const cartItems = await Cart.findOneAndUpdate(
      { user: tokenDecoded?.userId },
      products
    );
console.log(cartItems);
    res.json({
      message: "Products are added to cart",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const remove = (req, res) => {};

const update = async (req, res) => {
  try {
    const { products } = req.body;
    const { tokenDecoded } = req;

    const update = products;

    const cartItems = await Cart.findOneAndUpdate(
      { user: tokenDecoded?.userId },
      update
    );

    console.log(cartItems);

    res.json({
      message: "cart is updated",
      data: cartItems,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getCart, addToCart, remove, update };
