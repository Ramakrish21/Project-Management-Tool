const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["To-Do", "In Progress", "Completed"],
      default: "To-Do",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
