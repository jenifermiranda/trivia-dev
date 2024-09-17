import { Router } from 'express';
import questionsController from '../controllers/questions.controller';

const questionsRouter = Router();

questionsRouter.get('/questions', questionsController.getAllQuestions);

export default questionsRouter;