var configDB = require("../../configDB");
var Foodcourtstall = require("../../database").Foodcourtstall;
var Foodcourt = require("../../database").Foodcourt;
var Foodcourtdish = require("../../database").Foodcourtdish;

exports.list = function (req, resp) {

    var whereClauseCat = (req.params.stall_id) ? {stall_id: parseInt(req.params.stall_id)} : {};

    Foodcourtdish
        .findAll({  
            where: whereClauseCat
        }).then(function (result) {
            resp
                .status(200)
                .type("application/json")
                .json(result);
        }).catch(function (err) {
            res.status(500).json({ error: true })
        });
}