var Sequelize = require("sequelize");

module.exports = function(database) {
    return database.define(
        "foodcourtstall",
        {
            stall_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            fc_id: {
                type: Sequelize.INTEGER,
                primaryKey: false,
                allowNull: false,
                references: {
                    model: 'foodcourts',
                    key: 'fc_id'
                }
            },
            stall_name: {
                type: Sequelize.STRING(50),
                primaryKey: false,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            }
        },
        {
            tableName: "foodcourtstall",
            timestamps: false
        }
    );

}