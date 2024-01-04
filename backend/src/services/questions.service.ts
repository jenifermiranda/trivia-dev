import QuestionModel from '../database/models/question.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Question } from '../types/Question';
import { Sequelize } from 'sequelize';

// async function getAllQuestions(): Promise<ServiceResponse<Question[]>> {
//     try {
//         const questions = await QuestionModel.findAll({
//             // include: 'incorrect_answers',
//         });
//         return {
//             status: 'SUCCESSFUL',
//             data: questions,
//         };
//     } catch (error) {
//         return {
//             status: false,
//             error,
//         };
//     }
// }

export async function getAllQuestions() {
  return await QuestionModel.findAll();
}

// export async function getAllQuestions() {
//     return QuestionModel.findAll({
//         attributes: [
//             'id',
//             'difficulty',
//             'category',
//             'question',
//             'correct_answer',
//             [Sequelize.fn('GROUP_CONCAT', Sequelize.col('questions.incorrect_answer')), 'Incorrect_answers']
//         ],
//         group: ['questions.id', 'difficulty', 'category', 'question', 'correct_answer'],
//         raw: true
//     }).catch(error => {
//         console.error(error);
//     });
// }



console.log(getAllQuestions());
