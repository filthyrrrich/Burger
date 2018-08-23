const orm = require("../config/orm.js");

//Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){ 
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    devour: function(objColVals, condition, cb) {
        orm.devour("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;