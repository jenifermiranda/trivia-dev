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
    allowNull: false,
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
}, {
  tableName: 'questions',
  timestamps: false,
  underscored: true,
});

export default QuestionModel;