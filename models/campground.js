var mongoose = require("mongoose");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   price: String,
   createdAt: { type: Date, default: "2018-1-1" },
   comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
       },
    ],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Campground", campgroundSchema);
