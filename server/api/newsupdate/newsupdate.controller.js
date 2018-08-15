var configDB = require("../../configDB");
var News = require("../../database").News;

exports.list = function (req, resp) {

    News
        .findAll(
            
        ).then(function (result) {
            resp
                .status(200)
                .type("application/json")
                .json(result);
        }).catch(function (err) {
            res.status(500).json({ error: true })
        });
}