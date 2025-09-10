const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, unique: true, sparse: true, lowercase: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String }, // hashed password
    role: {
      type: String,
      enum: ["user", "admin", "ops", "finance"],
      default: "user",
    },
    kycStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
    dlNumber: { type: String },
    dlExpiry: { type: Date },
    dlImageUrl: { type: String },
    walletBalance: { type: mongoose.Decimal128, default: 0.0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User",userSchema);
