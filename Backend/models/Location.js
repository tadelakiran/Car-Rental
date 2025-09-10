import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number },
    lng: { type: Number },
    type: { type: String, enum: ["hub", "pickup", "drop", "parking"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Location", locationSchema);
