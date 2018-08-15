var Sequelize = require("sequelize");



module.exports = function (database) {

    return database.define('users', {

        usr_id : {

            type: Sequelize.INTEGER,

            primaryKey: true,

            autoIncrement: true,

            allowNull: false

        },

        usr_name : {

            type: Sequelize.STRING(255),

            primaryKey: false,

            allowNull: false

        },

        usr_login : {

            type: Sequelize.STRING(255),

            primaryKey: false,

            allowNull: false

        },

        usr_number : {
            type: Sequelize.STRING(100),
            primaryKey: false,
            allowNull: false
        },

        usr_pwd : {

            type: Sequelize.STRING(255),

            primaryKey: false,

            allowNull: false

        }

    }, {

        tableName: 'users',

        timestamps: false

    });

}