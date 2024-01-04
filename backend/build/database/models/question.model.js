"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const QuestionModel = index_1.default.define('Question', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
    incorrect_answers_a: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    incorrect_answers_b: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    incorrect_answers_c: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    incorrect_answers_d: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'questions',
    timestamps: false,
    underscored: true,
});
exports.default = QuestionModel;
