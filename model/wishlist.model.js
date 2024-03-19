const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    hotelId:{type:String, required:true}
});

const Wishlist = mongoose.model("Whishlist", wishlistSchema);
module.exports = Wishlist;
