import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    actor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    action: { type: String, required: true },
    meta: { type: Object }, // flexible JSON
  },
  { timestamps: true }
);

export default mongoose.model("AuditLog", auditLogSchema);
