var User = require("../../database").User;


var bcrypt = require("bcrypt");
const saltRounds = 10;

exports.list = function (req, resp) {

    User
        .findAll({  
            attributes: ['usr_id', 'usr_name', 'usr_pwd']
        }).then(function (result) {
            resp
                .status(200)
                .type("application/json")
                .json(result);
        }).catch(function (err) {
            resp.status(500).json({ error: true });
        });
}

exports.create = function (req, resp) {
    if (!req.body.info) {
        resp.status(400).json({ error: true });
    } else {
        var newInfo = req.body.info;

        bcrypt.hash(newInfo.usr_pwd, saltRounds)
            .then(function (hash) {
                // Store hash in your password DB.
                newInfo.usr_pwd = hash;
                User
                    .create(newInfo)
                    .then(function (newRecord) {
                        console.log(newRecord);
                        delete newRecord.dataValues.usr_pwd;
                        resp
                            .status(200)
                            .type("application/json")
                            .json(newRecord);
                    })
                    .catch(function (err) {
                        resp.status(500).json({ error: true });
                    });
            })
            .catch(function (err) {
                resp.status(500).json({ error: true });
            });
    }
}