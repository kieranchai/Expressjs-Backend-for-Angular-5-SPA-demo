var Sequelize = require("sequelize");

module.exports = function (database) {
    return database.define(
        "foodcourtdish",
        {
            fc_id: {
                type: Sequelize.INTEGER,
                primaryKey: false,
                allowNull: false,
                references: {
                    model: 'foodcourts',
                    key: 'fc_id'
                }
            },
            stall_id: {
                type: Sequelize.INTEGER,
                primaryKey: false,
                allowNull: false,
                references: {
                    model:'foodcourtstall',
                    key:'stall_id'
                }
            },
            dish_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            dish_name: {
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
            },
            stall_img01: {
                type: Sequelize.STRING(50),
                primaryKey: true,
                allowNull: false
            },
            availability: {
                type: Sequelize.STRING(50),
                primaryKey: false,
                allowNull: false
            },
            price: {
                type: Sequelize.STRING(50),
                primaryKey: false,
                allowNull: false
            }
        },
        {
            tableName: 'foodcourtdish',
            timestamps: false
        }
    );

}