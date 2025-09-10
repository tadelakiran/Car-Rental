import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    pickupLocation: { type: mongoose.Schema.Types.ObjectId, ref: "Location", required: true },
    dropLocation: { type: mongoose.Schema.Types.ObjectId, ref: "Location", required: true },
    startDatetime: { type: Date, required: true },
    endDatetime: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "picked_up", "returned", "cancelled"],
      default: "pending",
    },
    totalAmount: { type: mongoose.Decimal128, required: true },
    paidAmount: { type: mongoose.Decimal128, default: 0.0 },
    depositTaken: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
