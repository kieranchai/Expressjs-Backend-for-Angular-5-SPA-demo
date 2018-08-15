var configDB = require("../../configDB");
var Feedback = require("../../database").Feedback;

exports.list = function (req, resp) {
    Feedback
        .findAll(  // select * from Feedback
        ).then(function (result) {
            resp
                .status(200)
                .type("application/json")
                .json(result);
        }).catch(function (err) {
            res.status(500).json({ error: true })
        });
}

exports.create = function (req, resp) {
    if (!req.body.info) {
        resp.status(400).json({error: true})
    } else {
        var newInfo = req.body.info;

        Feedback.create(newInfo)
        .then(function (newRecord) {
            resp.status(200).type("application/json").json(newRecord);
        }).catch(function (err) {
            resp.status(500).json({error:true})
        });
    }
}