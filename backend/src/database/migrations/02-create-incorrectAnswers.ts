import { DataTypes, Model, QueryInterface } from "sequelize"
import { IncorrectAnswer } from "../../types/IncorrectAnswer"

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<IncorrectAnswer>>('incorrect_answers', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            question_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            incorrect_answer: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        })
    }, 
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('incorrect_answers')
    }
};