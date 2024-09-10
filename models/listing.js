const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema ({
    title : String,
    description : String,
    image : {
        type: String,
        default : "https://www.istockphoto.com/photo/kyoto-japan-in-spring-gm902966276-249052241?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fkyoto&utm_medium=affiliate&utm_source=unsplash&utm_term=kyoto%3A%3A%3A",
        set : (v)=>
            v===""?"https://www.istockphoto.com/photo/kyoto-japan-in-spring-gm902966276-249052241?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fkyoto&utm_medium=affiliate&utm_source=unsplash&utm_term=kyoto%3A%3A%3A":v
    },
    price : Number,
    location : String,
    country : String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref:"Review"
    }]
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){}
    await Review.deleteMany({_id:{$in:listing.reviews}});
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;