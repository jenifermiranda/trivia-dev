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
            incorrect_answers_id_a: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answers_id_b: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answers_id_c: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answers_id_d: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        })
    }, 
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('questions')
    }
};