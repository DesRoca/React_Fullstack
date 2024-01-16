//Creates table

//Anonoymous function that creates model and export it from a file to access it in other files
module.exports = (sequelize, DataTypes) => {

    //Variable that represents model
    const Posts = sequelize.define("Posts", {
        //structure for table
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    //returns object that was created 
    return Posts;
};