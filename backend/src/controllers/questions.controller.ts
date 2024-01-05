import {Request, Response} from 'express';
import questionsService from '../services/questions.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getAllQuestions(_req: Request, res: Response) {
    const result = await questionsService.getAllQuestions();
    return res.status(mapStatusHTTP('SUCCESSFUL')).json(result);
}

export default {
    getAllQuestions,
}