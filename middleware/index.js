var Campground = require("../models/campground"),
    Comment    = require("../models/comment");
    
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
           if(err){
               req.flash("error", "Could not find campground!");
               res.redirect("back");
           }  else {
               
               if (!foundCampground) {
                    req.flash("error", "Item not found.");
                    return res.redirect("back");
                }
                
                if(foundCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You do not own this campground!");
                    return res.redirect("back");
                }
           }
        });
    } else {
        req.flash("error", "Please Login First!");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                console.log(err);
                req.flash("error", "Could not find comment!");
                res.redirect("back");
            } else {
                
                 if (!foundComment) {
                    req.flash("error", "Item not found.");
                    return res.redirect("back");
                }
                
                if(foundComment.author.id.equals(req.user._id)){ 
                     return next();
                } else {
                     req.flash("error", "You do not own this comment!");
                     res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "Please Login First!");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Login First!");
    res.redirect("/login");
};

module.exports = middlewareObj;