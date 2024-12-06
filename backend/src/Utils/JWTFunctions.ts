import dotenv from "dotenv";
dotenv.config();
import JWT from 'jsonwebtoken'

const { sign, verify } = JWT;

const secretKey = process.env.JWT_SECRET;

export function generateToken(payload: any) {
  return sign(payload, secretKey, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  try {
    return verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

