import mongoose from "mongoose";

const carPricingSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true, unique: true },
    city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
    baseRatePerDay: { type: mongoose.Decimal128, required: true },
    ratePerHour: { type: mongoose.Decimal128, required: true },
    depositAmount: { type: mongoose.Decimal128, default: 0.0 },
    minRentalHours: { type: Number, default: 1 },
    extraKmCharge: { type: mongoose.Decimal128, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("CarPricing", carPricingSchema);
