const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema(
  {
    actor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    action: { type: String, required: true },
    meta: { type: Object }, // flexible JSON
  },
  { timestamps: true }
);

module.exports =  mongoose.model("AuditLog", auditLogSchema);
