//Initial Entry Point for API

//Create express variable to be an instance of the express framework
const express = require('express')
//Create/Initialize variable app which will make api request/initialiaze server 
const app = express()

//imports model(table)
const db = require('./models')

//creates models(tables)
//go over tables that exists in the models folder, check if they exist in the database and if they don't crate a table while api starts
db.sequelize.sync().then(()=> {
    //entry point of api
    //starts api
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});