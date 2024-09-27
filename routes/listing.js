const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner, validateListing} = require("../middlewares.js");
const listingController = require("../controller/listing.js");
const multer = require("multer");
const {storage} = require("../cloudconfig.js");
const upload = multer({storage});



//index-route
router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedIn,upload.single("Listing[image]"),validateListing, wrapAsync(listingController.create));

//new-route
router.get("/new", isLoggedIn,validateListing,(listingController.new));

// show,update,destroy
router.route("/:id").get(wrapAsync(listingController.show))
.put(isLoggedIn,isOwner,upload.single("Listing[image]"),validateListing,wrapAsync(listingController.update))
.delete(isLoggedIn,isOwner,wrapAsync( listingController.destroy));


//edit-route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.edit));


module.exports = router;
