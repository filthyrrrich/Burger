const express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
       var hbsObject = {
           burger: data
       };
       res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name",req.body.burger_name, 
    function(result) {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({devoured: req.body.devoured}, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;