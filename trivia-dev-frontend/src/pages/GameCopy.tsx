import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { fetchQuestionsAPI } from '../services/fetchAPI';
import Question from '../types/Question';
import Options from '../types/Options';
import Answer from '../types/Answer';
import Level from '../types/Level';

function GameCopy() {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [actualQuestion, setActualQuestion] = useState<Question>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [randomOptions, setRandomOptions] = useState<Options[]>();
  const [counter, setCounter] = useState<number>(10);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [allAnswers, setAllAnswers] = useState<boolean>(false);
  const [userScore, setUserScore] = useState(0);
  const [errorAPI, setErrorAPI] = useState<boolean>(false);
  const [timeAnswer, setTimeAnswer] = useState(0);

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
        setErrorAPI(true);
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
      setUserScore(score + userScore);
    }
    setShowAnswer(true);
    setTimeAnswer(counter);
  };

  // funcao do botao PROXIMO
  const handleClick = () => {
    if (questionIndex === questions.length - 1) {
      navigate('/results');
    }
    getActualQuestion(questions);
    setShowAnswer(false);
    setAllAnswers(false);
    setCounter(10);
  };

  return (
    <section>
      <Header />
      {errorAPI ? <h2>Erro ao buscar perguntas. Tente novamente mais tarde!</h2> : (
        <div>
          <h2>
            Tempo:
            {' '}
            {showAnswer ? timeAnswer : counter}
          </h2>
          {actualQuestion && (
            <div>
              <h2>{actualQuestion.category}</h2>
              <h3>{actualQuestion.difficulty}</h3>
              <h3>{actualQuestion.question}</h3>
              <div>
                {randomOptions && randomOptions.map((option, index) => {
                  const isRight = option.answer === 'right';
                  let color = 'white';
                  if (showAnswer) {
                    color = isRight ? 'green' : 'red';
                  }
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
            disabled={ !allAnswers }
          >
            {
          questionIndex === questions.length - 1
            ? 'Ver resultados'
            : 'Próxima'
        }
          </button>
        </div>
      )}
    </section>
  );
}

export default GameCopy;
