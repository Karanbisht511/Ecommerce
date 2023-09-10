require('dotenv')
const JWT = require("jsonwebtoken");

const { sign, verify } = JWT;

const secretKey = process.env.JWT_SECRET;

function generateToken(payload) {
  return sign(payload, secretKey, { expiresIn: "1h" });
}

function verifyToken(token) {
  try {
    return verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
