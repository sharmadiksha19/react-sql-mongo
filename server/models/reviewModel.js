const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
    },
    userName: {
      type: String,
      required: [true, "Please provide title"],
    },
    productName: {
      type: String,
      required: [true, "Please provide title"],
    },
    productType: {
      type: String,
      required: [true, "Please provide title"],
    },
    productMaker: {
      type: String,
      required: [true, "Please provide title"],
    },
    reviewRating: {
      type: Number,
      required: [true, "Please provide title"],
    },
    reviewDate: {
      type: Date,
      required: [true, "Please provide title"],
    },
    reviewText: {
      type: String,
      required: [true, "Please provide title"],
    },
    retailerpin: {
      type: String,
      required: [true, "Please provide title"],
    },
    retailercity: {
      type: String,
      required: [true, "Please provide title"],
    },
    userAge: {
      type: String,
      required: [true, "Please provide title"],
    },
    userGender: {
      type: String,
      required: [true, "Please provide title"],
    },
    userOccupation: {
      type: String,
      required: [true, "Please provide title"],
    },
    price: {
      type: Number,
      required: [true, "Please provide title"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("review", reviewSchema);
