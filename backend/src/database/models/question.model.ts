import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import { Question } from '../../types/Question';
import db from './index'

export type QuestionInputtableFields = Optional<Question, 'id'>

type QuestionSequelizeModelCreator = ModelDefined<Question, QuestionInputtableFields>;

export type QuestionSequelizeModel = Model<Question, QuestionInputtableFields>;

const QuestionModel: QuestionSequelizeModelCreator = db.define('Question', { 
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
}, {
  tableName: 'questions',
  timestamps: false,
  underscored: true,
});

export default QuestionModel;