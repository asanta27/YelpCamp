var mongoose = require("mongoose");


var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    createdAt: { type: Date, default: "2018-1-1" }
});

module.exports = mongoose.model("Comment", commentSchema);