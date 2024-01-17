//Initial Entry Point for API

//Create express variable to be an instance of the express framework
const express = require('express')
//Create/Initialize variable app which will make api request/initialiaze server 
const app = express()

//access body being used in routes/posts.js
app.use(express.json());

//imports model(table)
const db = require('./models')

//Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

//api request to access endpoints
'localhost:3001/posts'

//creates models(tables)
//go over tables that exists in the models folder, check if they exist in the database and if they don't crate a table while api starts
db.sequelize.sync().then(()=> {
    //entry point of api
    //starts api
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});