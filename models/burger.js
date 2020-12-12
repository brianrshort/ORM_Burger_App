var orm = require("../config/orm.js");

//A model object that uses the ORM to manipulate, add, and destroy information in the burgers table
var burger = {

  //Read all burgers table
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  
//Make a new row in the burgers table
create: function(cols, vals, cb) {
  orm.create("burgers", cols, vals, function(res) {
    cb(res);
  });
},


//Update an individual row in the burgers table
update: function(objColVals, condition, cb) {
  orm.update("burgers", objColVals, condition, function(res) {
    cb(res);
  });
},


//Delete/destroy a row in the burgers table
delete: function(condition, cb) {
  orm.delete("burgers", condition, function(res) {
    cb(res);
  });
}
};


module.exports = burger;
