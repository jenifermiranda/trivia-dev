"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = {
    up: function (queryInterface) {
        return queryInterface.createTable('incorrect_answers', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            question_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answer: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable('incorrect_answers');
    }
};
