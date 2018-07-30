var Sequelize = require('sequelize');
var configDB = require("./configDB");
var database;
database = new Sequelize(
    configDB.mysql.database,
    configDB.mysql.username,
    configDB.mysql.password, {
        host: configDB.mysql.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

// include the models

// var Furniture = require("./server/models/furniture.model")(database);
// var Category = require("./server/models/category.model")(database);

// Category.hasMany(Furniture, {
//     foreignKey: 'cat_id'
// });

database
    .sync({
        force: configDB.seed
    })
    .then(function () {
        console.log("Database in Sync Now");
        require("./seed")();
    });

// Expose Models

// module.exports = {

//     Category: Category,
//     Furniture: Furniture

// };    



