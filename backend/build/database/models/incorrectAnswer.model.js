"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var index_1 = __importDefault(require("./index"));
var question_model_1 = __importDefault(require("./question.model"));
var IncorrectAnswerModel = index_1.default.define('IncorrectAnswer', {
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
}, {
    tableName: 'incorrect_answers',
    timestamps: false,
    underscored: true,
});
exports.default = IncorrectAnswerModel;
question_model_1.default.hasMany(IncorrectAnswerModel, { foreignKey: 'question_id' });
IncorrectAnswerModel.belongsTo(question_model_1.default, { foreignKey: 'question_id' });
