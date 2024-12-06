import { Request, Response } from "express";
import { Cart } from "../Model/cart";

export const getCart = async (req: Request, res: Response) => {
  try {
    const { tokenDecoded } = req.body;

    const cartItems = await Cart.find({ user: tokenDecoded?.userId });
    if (cartItems !== null) {
      res.status(200).json(cartItems);
    } else {
      res.json({ message: "Cart is Empty" });
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { products,tokenDecoded } = req.body;

    const cartItems = await Cart.findOneAndUpdate(
      { user: tokenDecoded?.userId },
      products
    );
    console.log(cartItems);
    res.json({
      message: "Products are added to cart",
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const remove = (req: Request, res: Response) => {};

export const update = async (req: Request, res: Response) => {
  try {
    const { products,tokenDecoded } = req.body;

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
  } catch (error: any) {
    console.log(error.message);
  }
};
