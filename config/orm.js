//Requiring the connection to get to the database
var connection = require("../config/connection.js");

//Helper function to pull in a specific number of questions marks to manipulate and shape the SQL queries
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

