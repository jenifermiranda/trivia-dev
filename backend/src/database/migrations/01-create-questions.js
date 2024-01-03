"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = {
    up: function (queryInterface) {
        return queryInterface.createTable('questions', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            difficulty: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            question: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            correct_answer: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            incorrect_answers_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable('questions');
    }
};
