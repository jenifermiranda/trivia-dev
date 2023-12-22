import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchQuestionsAPI } from '../services/fetchAPI';
import Question from '../types/Question';
import Options from '../types/Options';
import Answer from '../types/Answer';
import Level from '../types/Level';

function GameCopy() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [actualQuestion, setActualQuestion] = useState<Question>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [randomOptions, setRandomOptions] = useState<Options[]>();
  // const [redirect, setRedirect] = useState(false);
  const [counter, setCounter] = useState<number>(10);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [allAnswers, setAllAnswers] = useState<boolean>(false);

  // embaralha as alternativas
  const shuffleArray = (optionsAnswers: Options[]): Options[] => {
    const NEGATIVE_NUM = -1;
    const shuffleOptions = optionsAnswers
      .sort(() => Math.random() + Math.random() * NEGATIVE_NUM);
    return shuffleOptions;
  };

  // retorna as alternativas certas e erradas ordenadas aleatoriamente
  const getRandomOptions = (question: Question): Options[] => {
    const options: Options[] = [
      {
        answer: 'right',
        level: question.difficulty as Level,
        value: question.correct_answer,
      },
      ...question.incorrect_answers.map((answer) => ({
        answer: 'wrong',
        level: question.difficulty as Level,
        value: answer,
      })),
    ];

    return shuffleArray(options);
  };

  // atualiza questao
  const getActualQuestion = (questionsAPI: Question[]) => {
    const currQuestion = questionsAPI[questionIndex];
    const newRandomOptions = getRandomOptions(currQuestion);
    setActualQuestion(currQuestion);
    setRandomOptions(newRandomOptions);
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  // faz uma requisição a uma API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchQuestionsAPI();
        if (results.length > 0) {
          setQuestions(results);
          getActualQuestion(results);
        }
      } catch (error) {
        console.log('Erro ao buscar perguntas.', error);
      }
    };

    fetchData();
  }, []);

  // contador
  useEffect(() => {
    const time = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
      setAllAnswers((prevAllAnswers) => {
        if (counter === 0 || showAnswer) {
          clearInterval(time);
          return true;
        }
        return prevAllAnswers;
      });
    }, 1000);

    return () => clearInterval(time);
  }, [counter, showAnswer]);

  // atualiza a pontuacao
  const updateScore = (answer: Answer) => {
    if (answer.answer === 'right') {
      const points = 10;
      const level: Record<Level, number> = { easy: 1, medium: 2, hard: 3 };
      const score = points + counter * Number(level[answer.level]);
    }
    setShowAnswer(true);
  };

  // funcao do botao PROXIMO
  const handleClick = () => {
    getActualQuestion(questions);
    setShowAnswer(false);
    setAllAnswers(false);
    // setActualQuestion(true);
    setCounter(10);

    // getActualQuestion(questions);
  };

  return (
    <section>
      <Header />
      <h2>
        Tempo:
        {' '}
        {counter}
      </h2>
      {actualQuestion && (
        <div>
          <h2>{actualQuestion.category}</h2>
          <h3>{actualQuestion.difficulty}</h3>
          <h3>{actualQuestion.question}</h3>
          <div>
            {randomOptions && randomOptions.map((option, index) => {
              const isRight = option.answer === 'right';
              const color = showAnswer
                ? (isRight ? 'green' : 'red')
                : 'white';
              return (
                <button
                  key={ index }
                  onClick={ () => updateScore(option) }
                  style={ { backgroundColor: color } }
                  disabled={ allAnswers }
                >
                  {option.value}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <button
        onClick={ handleClick }
      >
        Próxima
      </button>
    </section>
  );
}

export default GameCopy;
