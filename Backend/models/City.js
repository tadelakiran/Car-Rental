const mongoose = require('mongoose');

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

module.exports=mongoose.model("City", citySchema);
