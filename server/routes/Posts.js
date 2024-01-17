//Using Express library for routing system
const express = require("express");
//Route for Posts endpoint
const router = express.Router();
//Retrieves data from posts in model
const {Posts} = require("../models");

//get requests
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

//allows us to insert data into our database
//creates post request to post route
router.post("/", async (req, res) => {
    //grabs posts data from the body that is sent in the request
    const post = req.body;
    //calls sequelize function to create(inserts into posts table)
    await Posts.create(post);
    //return as response from api requests
    res.json(post);
});

//Used to access router from index.js
module.exports = router; 