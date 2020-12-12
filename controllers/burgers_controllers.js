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

//Using an id to update a row in the burger table in the database
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  //console.log("condition", condition);
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//Delete/destroy a row of information in the burger table in the database
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


