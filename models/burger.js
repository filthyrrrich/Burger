const orm = require("../config/orm.js");

//Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAll: function(cb) {
        orm.all("burgers", function(res){ 
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.devour("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;