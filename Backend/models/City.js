import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    state: { type: String },
    country: { type: String, required: true },
    timezone: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("City", citySchema);
