import express from 'express';
import questionsRouter from './routers/questions.router';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(questionsRouter);

export default app;