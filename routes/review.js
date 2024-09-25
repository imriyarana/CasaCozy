const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview,isLoggedIn,isAuthor} = require("../middlewares.js");
const reviewController = require("../controller/review.js");
// Reviews
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));
    
    //Delete-review Route
    router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;