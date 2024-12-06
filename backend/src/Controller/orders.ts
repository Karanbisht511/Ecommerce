import { Request, Response } from "express";
import { IOrder, Order, Item } from "../Model/order";
import { Product } from "../Model/product";

interface BuyProductPayload {
  username: string;
  status: Enumerator<string>;
  //  "pending" | "shipped" | "delivered" | "cancelled"; // Using a union type for status options
  shippingAddress: Address;
  items: OrderItem[];
}

interface BuyProductResponse {
  username: string;
  status: Enumerator<string>;
  // "pending" | "shipped" | "delivered" | "cancelled"; // Using a union type for status options
  shippingAddress: Address;
  items: Item[];
  totalAmount: number;
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface OrderItem {
  productId: string;
  product: IProduct;
  quantity: number;
  unitPrice: number;
}

interface IProduct {
  name: string;
  description: string;
  price: number; // Can be number or string (price inconsistency in example)
  stockQuantity: number;
  category: string;
  review: Review;
  images: string[];
}

interface Review {
  rating: string | number; // Can be number or string
  reviewerCount: string | number; // Can be number or string
}

// this api will map userid and product id
// and do computation for left stock
// and update the stocks in products collection
export const buyProducts = async (req: Request, res: Response) => {
  try {
    // add request validations
    const reqBody = req.body;

    // if user already exist then update the order

    const orderDetails = await Order.find({ username: reqBody.username });
    console.log("order Details:", orderDetails);

    if (orderDetails.length < 1) {
      await placeOrder(reqBody);
    } else {
      updateOrder(reqBody, orderDetails[0]);
    }

    res.status(200).json({ message: "Order is placed" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error });
  }
};

const calculateAmount = (
  items: Array<OrderItem>,
  initialAmount: number = 0
) => {
  console.log("items:", items);

  let totalAmount = items.reduce(
    (totalAmount: number, i: OrderItem): number => {
      console.log("amount:", totalAmount);
      return i.quantity * i.product.price + totalAmount;
    },
    initialAmount
  );

  return totalAmount;
};

const getItemsAndUpdateStock = async (items: Array<OrderItem>) => {
  return await Promise.all(
    items.map(async (p) => {
      const pdetails = await Product.findById(p.productId);

      console.log("product details:", pdetails);
      await Product.findOneAndUpdate(
        { _id: p.productId },
        { stockQuantity: (pdetails?.stockQuantity as number) - p?.quantity }
      );

      return {
        productId: p.productId,
        quantity: p.quantity,
        unitPrice: p.unitPrice,
      };
    })
  );
};

const placeOrder = async (reqBody: BuyProductPayload) => {
  const totalAmount = calculateAmount(reqBody.items);
  console.log("totalAmount:", totalAmount);

  const items = await getItemsAndUpdateStock(reqBody.items);
  const order = new Order({
    username: reqBody.username,
    status: reqBody.status,
    totalAmount: totalAmount,
    orderDate: new Date().getDate(),
    shippingAddress: reqBody.shippingAddress,
    items: items,
  });
  await order.save();
};

const updateOrder = async (
  reqBody: BuyProductPayload,
  currentOrder: IOrder
) => {
  const totalAmount = calculateAmount(reqBody.items, currentOrder.totalAmount);
  console.log("totalamount:", totalAmount);

  const items = await getItemsAndUpdateStock(reqBody.items);
  const order = new Order({
    username: reqBody.username,
    status: reqBody.status,
    totalAmount: totalAmount,
    orderDate: new Date().getDate(),
    shippingAddress: reqBody.shippingAddress,
    items: [items, ...reqBody.items],
  });
  await order.save();
};
