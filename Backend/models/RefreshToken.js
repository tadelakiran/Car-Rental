import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tokenHash: { type: String, required: true },
    revoked: { type: Boolean, default: false },
    expiresAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("RefreshToken", refreshTokenSchema);
