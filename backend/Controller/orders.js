const Order = require("../Model/order");
const Product = require("../Model/product");

// this api will map userid and product id
// and do computation for left stock
// and update the stocks in products collection
exports.buyProducts = async (req, res) => {
  try {
    // add request validations
    const reqBody = req.body;

    // if user already exist then update the order

    const orderDetails = await Order.find({ username: reqBody.username });
    console.log("order Details:", orderDetails);

    if (orderDetails.length < 1) {
      await placeOrder(reqBody);
    } else {
      updateOrder(reqBody,orderDetails[0]);
    }

    res.status(200).json({ message: "Order is placed" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error });
  }
};

const calculateAmount = (items, initialAmount = 0) => {
  console.log("items:", items);

  let totalAmount = items.reduce((totalAmount, i) => {
    console.log("amount:", totalAmount);

    return i.quantity * i.product.price + totalAmount;
  }, initialAmount);

  return totalAmount;
};

const getItemsAndUpdateStock = async (items) => {
  return await Promise.all(
    items.map(async (p) => {
      const pdetails = await Product.findById(p.productId);
      console.log("product details:", pdetails);
      await Product.findOneAndUpdate(
        { _id: p.productId },
        { stockQuantity: pdetails.stockQuantity - parseInt(p.quantity) }
      );

      return {
        productId: p.productId,
        quantity: p.quantity,
        unitPrice: p.unitPrice,
      };
    })
  );
};

const placeOrder = async (reqBody) => {
  // console.log("reqBody:",reqBody);
  const totalAmount = calculateAmount(reqBody.items);
  console.log("totalAmount:", totalAmount);

  const items = await getItemsAndUpdateStock(reqBody.items);
  const order = new Order({
    username: reqBody.username,
    status: reqBody.status,
    totalAmount: totalAmount,
    orderDate: new Date().getDate(),
    shippingAddress: reqBody.address,
    items: items,
  });
  await order.save();
};

const updateOrder = async (reqBody, currentOrder) => {

  const totalAmount = calculateAmount(reqBody.items, currentOrder.totalAmount);
  console.log("totalamount:", totalAmount);

  const items = await getItemsAndUpdateStock(reqBody.items);
  const order = new Order({
    username: reqBody.username,
    status: reqBody.status,
    totalAmount: totalAmount + reqBody.totalAmount,
    orderDate: new Date().getDate(),
    shippingAddress: reqBody.address,
    items: [items, ...reqBody.items],
  });
  await order.save();
};
