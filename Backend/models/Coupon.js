import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true, required: true },
    type: { type: String, enum: ["percentage", "flat"], required: true },
    value: { type: mongoose.Decimal128, required: true },
    validFrom: { type: Date, required: true },
    validTo: { type: Date, required: true },
    usageLimit: { type: Number },
    minBookingValue: { type: mongoose.Decimal128 },
    perUserLimit: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("Coupon", couponSchema);
