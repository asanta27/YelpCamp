var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Mary Jane Falls",
        image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png",
        description: "Lorem ipsum dolor sit amet, aliquid expetenda dissentiunt cu cum, quaeque eruditi perpetua cu ius. Ceteros pericula intellegam ea qui, habeo choro vis eu, ad liber persius apeirian duo. Et per cetero ancillae dissentiet, ius et sint iuvaret philosophia, vidit natum mentitum pri an. Illud ullamcorper has te, harum ubique gubergren id mel."
    },
    {
        name: "Caveman Rock",
        image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5253636.jpg",
        description: "Lorem ipsum dolor sit amet, aliquid expetenda dissentiunt cu cum, quaeque eruditi perpetua cu ius. Ceteros pericula intellegam ea qui, habeo choro vis eu, ad liber persius apeirian duo. Et per cetero ancillae dissentiet, ius et sint iuvaret philosophia, vidit natum mentitum pri an. Illud ullamcorper has te, harum ubique gubergren id mel."
    },
    {
        name: "Yellow Woods",
        image: "https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg",
        description: "Lorem ipsum dolor sit amet, aliquid expetenda dissentiunt cu cum, quaeque eruditi perpetua cu ius. Ceteros pericula intellegam ea qui, habeo choro vis eu, ad liber persius apeirian duo. Et per cetero ancillae dissentiet, ius et sint iuvaret philosophia, vidit natum mentitum pri an. Illud ullamcorper has te, harum ubique gubergren id mel."
    }
]


function seedDB(){
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("Removed campgrounds!");
    // data.forEach(function(seed){
    //     Campground.create(seed, function(err, campground){
    //         if(err){
    //             console.log(err)
    //         } else {
    //             console.log("Added a campground");
    //             Comment.create(
    //                 {
    //                     text: "This place is my favorite!",
    //                     author: "Elon Musk"
    //                 }, function(err, comment){
    //                 if(err){
    //                     console.log(err)
    //                 } else {
    //                     campground.comments.push(comment);
    //                     campground.save();
    //                     console.log("Added Comment");
    //                 }
    //             });
    //         }
    //     });
    // });
})}

module.exports = seedDB;
    




