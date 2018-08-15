var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define(
        "news",
        {
            news_id : {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            news : {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            }
        },
        {
            tableName: 'news',
            timestamps: false
        }
    );

}