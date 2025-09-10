const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const RefreshToken = require("../models/RefreshToken");

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};

const generateRefreshToken = async (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const salt = await bcrypt.genSalt(10);
  const tokenHash = await bcrypt.hash(token, salt);

  await RefreshToken.create({
    user: userId,
    tokenHash,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return token;
};

module.exports = { generateAccessToken, generateRefreshToken };
