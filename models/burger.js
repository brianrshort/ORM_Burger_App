var orm = require("../config/orm.js");

//A model object that uses the ORM to manipulate, add, and destroy information in the burgers table
var burger = {

  //Read all burgers table
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  
