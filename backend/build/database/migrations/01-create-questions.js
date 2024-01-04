"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
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
            incorrect_answers_id_a: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answers_id_b: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answers_id_c: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answers_id_d: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('questions');
    }
};
