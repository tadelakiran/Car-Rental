const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const RefreshToken = require("../models/RefreshToken");


const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, role: user.role }, 
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};


const generateRefreshToken = async (userId) => {

  const token = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  const tokenHash = await bcrypt.hash(token, 10);
  await RefreshToken.create({ user: userId, tokenHash });

  return token; 
};

module.exports = { generateAccessToken, generateRefreshToken };
