var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define(
        "feedback",
        {
            feedback_id : {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            subject: {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            },
            useremail: {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            },
            fcenquired: {
                type: Sequelize.STRING(500),
                primaryKey: false,
                allowNull: false
            },
            usermessage: {
                type: Sequelize.STRING(3000),
                primaryKey: false,
                allowNull: false
            }
        },
        {
            tableName: 'feedback',
            timestamps: false
        }
    );



}