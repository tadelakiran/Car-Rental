import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: mongoose.Decimal128, required: true },
    currency: { type: String, default: "INR" },
    provider: { type: String, enum: ["razorpay", "stripe", "payu"], required: true },
    providerPaymentId: { type: String },
    status: { type: String, enum: ["created", "paid", "failed", "refunded"], required: true },
    method: { type: String }, // card, upi, netbanking
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
