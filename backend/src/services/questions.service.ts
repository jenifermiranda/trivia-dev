import QuestionModel from '../database/models/question.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Question } from '../types/Question';

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

async function getAllQuestions() {
    return await QuestionModel.findAll();
}

console.log(getAllQuestions());