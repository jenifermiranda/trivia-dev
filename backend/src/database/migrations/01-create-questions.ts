import { DataTypes, Model, QueryInterface } from "sequelize"
import { Question } from "../../types/Question"

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Question>>('questions', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            difficulty: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            question: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            correct_answer: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            incorrect_answers_a: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            incorrect_answers_b: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            incorrect_answers_c: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            incorrect_answers_d: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        })
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('questions')
    }
};