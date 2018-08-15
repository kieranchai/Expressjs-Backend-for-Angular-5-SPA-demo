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
var News = require("../server/models/news.model")(database);
var Feedback = require("../server/models/feedback.model")(database);
var Foodcourtstall = require("../server/models/foodcourtstall.model")(database);
var Foodcourt = require("../server/models/Foodcourt.model")(database);
var Foodcourtdish = require("../server/models/foodcourtdish.model")(database);
var User = require("../server/models/user.model")(database);
Foodcourt.hasMany(Foodcourtstall, {
     foreignKey: 'fc_id'
});
Foodcourt.hasMany(Foodcourtdish, {
    foreignKey: 'fc_id'
})
Foodcourtstall.hasMany(Foodcourtdish, {
    foreignKey: 'stall_id'
})

database
    .sync({
        force: configDB.seed
    })
    .then(function () {
        console.log("Database in Sync Now");
        require("./seed")();
    });

// Expose Models

module.exports = {
 News : News,
 User: User,
 Feedback: Feedback,
 Foodcourt: Foodcourt,
 Foodcourtstall: Foodcourtstall,
 Foodcourtdish: Foodcourtdish
};    



