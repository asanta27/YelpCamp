var express    = require("express"),
    router     = express.Router(),
    Campground = require("../models/campground"),
    middleware =require("../middleware");

// renders all campgrounds
router.get("/", function(req,res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

// create new campground
router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var price = req.body.price;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    
    var newCampground = {
        name: name,
        image: image,
        description: description,
        price: price,
        author: author
    };
    
   Campground.create(newCampground, function(err, createdCampground){
        if(err){
            console.log(err);
        } else {
            console.log("New: " + createdCampground.name);
            req.flash("success", "New campground added!");
            res.redirect("/campgrounds");
        }
    });
});

// new campground form
router.get("/new", middleware.isLoggedIn, function(req, res) {
   res.render("campgrounds/new");
});

// Shows more info about one campground
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
            req.flash("error", "Error");
            res.render("/")
        } else {
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// edit campground
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                console.log(err);
                req.flash("error", "Error");
                res.render("campgrounds/");
            } else {
                res.render("campgrounds/edit", {campground: foundCampground});
            }
        });
});

// update campground
router.put("/:id", middleware.checkCampgroundOwnership,function(req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            console.log(err);
            req.flash("error", "Error");
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Campground updated!");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// remove campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            req.flash("error", "Error");
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Campground removed!");
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;