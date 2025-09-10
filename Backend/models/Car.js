import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    registrationNo: { type: String, unique: true, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    fuelType: { type: String, enum: ["petrol", "diesel", "electric", "hybrid"], required: true },
    transmission: { type: String, enum: ["manual", "automatic"], required: true },
    seats: { type: Number, required: true },
    mileagePolicy: { type: String, enum: ["km_per_day", "per_km"], required: true },
    images: [{ type: String }],
    currentLocation: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
    status: { type: String, enum: ["available", "booked", "maintenance"], default: "available" },
  },
  { timestamps: true }
);

export default mongoose.model("Car", carSchema);
