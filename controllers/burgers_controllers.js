const express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
       var hbsObject = {
           burger: data
       };
       console.log(hbsObject);
       res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create("name", req.body.name, function(result) {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.devour({ devoured: req.body.devoured}, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});



module.exports = router;