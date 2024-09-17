import QuestionModel from '../database/models/question.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Question } from '../types/Question';
import { Sequelize } from 'sequelize';

async function getAllQuestions() {
  try{
    const questions = await QuestionModel.findAll({
      attributes: [
        'id',
        'difficulty',
        'category',
        'question',
        'correct_answer',
        [
          Sequelize.literal(
            'CONCAT(incorrect_answers_a, ";", incorrect_answers_b, ";", incorrect_answers_c, ";", incorrect_answers_d)'
          ),
          'incorrect_answers',
        ],
        // ----------
        // [Sequelize.fn('ARRAY', Sequelize.literal('ARRAY[incorrect_answers_a, incorrect_answers_b, incorrect_answers_c, incorrect_answers_d]')), 'incorrect_answers'],
      ],
  });
  return questions;
  } catch (error) {
    console.error(error);
  };
}

export default {
  getAllQuestions,
}
