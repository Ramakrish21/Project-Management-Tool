const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
    team: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);