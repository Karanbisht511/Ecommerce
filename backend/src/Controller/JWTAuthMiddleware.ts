import { verifyToken } from "../Utils/JWTFunctions";
import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Promise<void> | Response<any, Record<string, any>> => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const decoded = verifyToken(token);
    req.body.tokenDecoded = decoded; // You can use req.user for a more conventional approach
    return next(); // Ensure that next() is called properly
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" }); // Fixed typo here
  }
};
