var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//Read all entries in the burgers table on the main page
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Post function to create a new row in the burger table in the database
router.post("/", function(req, res) {
  burger.create([
    "burger"
  ], [
    req.body.burger
  ], function(result) {
    res.redirect("/");
  });
});

