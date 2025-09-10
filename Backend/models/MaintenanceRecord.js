const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    cost: { type: mongoose.Decimal128 },
    status: { type: String, enum: ["scheduled", "in_progress", "completed"], default: "scheduled" },
  },
  { timestamps: true }
);

module.exports= mongoose.model("MaintenanceRecord", maintenanceSchema);
