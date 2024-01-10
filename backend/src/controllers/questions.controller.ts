import {Request, Response} from 'express';
import questionsService from '../services/questions.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getAllQuestions(_req: Request, res: Response) {
    const result = await questionsService.getAllQuestions();
    if (result) {
        result.forEach((question: any) => {
            question.dataValues.incorrect_answers = (question.dataValues as any).incorrect_answers?.split(';').filter((value: string) => value !== '');
        });
    }
    return res.status(mapStatusHTTP('SUCCESSFUL')).json(result);
}

export default {
    getAllQuestions,
}