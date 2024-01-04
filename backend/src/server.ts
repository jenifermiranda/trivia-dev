import app from './app';
import { getAllQuestions } from './services/questions.service';

const PORT = 3001;
const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

app.get('/', async (req, res) => {
    const result = await getAllQuestions();
    res.json(result);
});

export default server;
