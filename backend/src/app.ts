import express from 'express';
import questionsRouter from './routers/questions.router';

const app = express();

app.use(express.json());

app.use(questionsRouter);

export default app;