//Boilerplate language for express, handlebars, and mysql

var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Pulling in the controller
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Starting up the server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
