import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index'
import QuestionModel from './question.model';
import { IncorrectAnswer } from '../../types/IncorrectAnswer';

export type IncorrectAnswerInputtableFields = Optional<IncorrectAnswer, 'id'>

type IncorrectAnswerSequelizeModelCreator = ModelDefined<IncorrectAnswer, IncorrectAnswerInputtableFields>;

export type IncorrectAnswerSequelizeModel = Model<IncorrectAnswer, IncorrectAnswerInputtableFields>;

const IncorrectAnswerModel: IncorrectAnswerSequelizeModelCreator = db.define('IncorrectAnswer', { 
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
}, {
  tableName: 'incorrect_answers',
  timestamps: false,
  underscored: true,
});

export default IncorrectAnswerModel;

QuestionModel.hasMany(IncorrectAnswerModel, { foreignKey: 'question_id' });
IncorrectAnswerModel.belongsTo(QuestionModel, { foreignKey: 'question_id' });