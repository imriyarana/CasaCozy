const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
console.log(mapToken);
const GeocodingClient= mbxGeocoding({acessToken: mapToken});

module.exports.index =  async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.new = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({path:"reviews", populate:{path:"author"},})
    .populate("owner");
    if(!listing){
        req.flash("err", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.create = (async (req, res) => {
    let response = await GeocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit:2
    })
    .send();
    


    let url = req.file.path;
    let filename = req.file.finename;
    const newListing = new Listing(req.body.Listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};

    newListing.geometry =response.body.features[0].geometry; 

    let savedListing = await newListing.save();
    console.log(savedListing);
    
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
});

module.exports.edit= async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("err", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImage = listing.image.url;
    res.render("listings/edit.ejs", { listing, originalImage});
};

 module.exports.update= async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.Listing });

   if(typeof req.file !=="undefined"){
    let url = req.file.path;
    let filename = req.file.finename;
    listing.image = {url,filename};
    await listing.save();
   }
    req.flash("success", "listing updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroy = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "listing deleted!");
    res.redirect("/listings");
};