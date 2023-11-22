const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");

//@route GET /myStore/reviews
//@access public
const getReviews = asyncHandler(async (req, res) => {
  const review = await Review.find();
  res.status(200).json(review);
});

//@route GET /mostLiked
//@access public
const mostLiked = asyncHandler(async (req, res) => {
  const review = await Review.aggregate()
    .sortByCount({ reviewRating: "desc" })
    .limit(5);
  res.status(200).json(review);
});

//@route GET /mostSoldZip
//@access public
const mostSoldZip = asyncHandler(async (req, res) => {
  const review = await Review.aggregate().sortByCount("retailerpin");
  res.status(200).json(review);
});

//@route GET /mostSold
//@access public
const mostSold = asyncHandler(async (req, res) => {
  const review = await Review.aggregate().sortByCount("productName");
  res.status(200).json(review);
});

//@route POST /myStore/reviews
//@access public
const postReviews = asyncHandler(async (req, res) => {
  const {
    title,
    userName,
    productName,
    productType,
    productMaker,
    reviewRating,
    reviewDate,
    reviewText,
    retailerpin,
    retailercity,
    userAge,
    userGender,
    userOccupation,
    price,
  } = req.body;

  if (
    !price ||
    !title ||
    !userName ||
    !productName ||
    !productType ||
    !productMaker ||
    !reviewRating ||
    !reviewDate ||
    !reviewText ||
    !retailerpin ||
    !retailercity ||
    !userAge ||
    !userGender ||
    !userOccupation
  ) {
    res.status(400);
    throw new Error("All fields are neccessary!");
  }

  const response = await Review.create({
    title,
    userName,
    productName,
    productType,
    productMaker,
    reviewRating,
    reviewDate,
    reviewText,
    retailerpin,
    retailercity,
    userAge,
    userGender,
    userOccupation,
    price,
  });

  res.status(201).json(response);
});

module.exports = { getReviews, postReviews, mostLiked, mostSoldZip, mostSold };
