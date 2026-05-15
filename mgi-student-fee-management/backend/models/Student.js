const mongoose = require("mongoose");

const feeSchema = mongoose.Schema({
  semester: String,
  totalFee: Number,
  paidFee: Number,
  dueFee: Number,
});

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    enrollmentNumber: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    course: String,

    branch: String,

    year: String,

    fees: [feeSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);