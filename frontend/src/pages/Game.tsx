import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestionsAPI } from '../services/fetchAPI';
import GlobalContext from '../context/GlobalContext';
import Header from '../components/Header';
import Question from '../types/Question.type';
import Options from '../types/Options.type';
import Answer from '../types/Answer.type';
import Level from '../types/Level.type';
import '../styles/Game.css';
import Footer from '../components/Footer';

function Game() {
  const navigate = useNavigate();

  // Estados globais - Aplicação
  const { userScore, setUserScore } = useContext(GlobalContext);
  const { questions, setQuestions } = useContext(GlobalContext);
  const { allQuestions, setAllQuestions } = useContext(GlobalContext);
  const { rightAnswers, setRightAnswers } = useContext(GlobalContext);

  // Estados Locais - Pagina Game
  const [questionIndex, setQuestionIndex] = useState(0);
  const [actualQuestion, setActualQuestion] = useState<Question>();
  const [randomOptions, setRandomOptions] = useState<Options[]>();
  const [counter, setCounter] = useState<number>(30);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [allAnswers, setAllAnswers] = useState<boolean>(false);
  const [errorAPI, setErrorAPI] = useState<boolean>(false);
  const [timeAnswer, setTimeAnswer] = useState(0);

  // Embaralha as alternativas
  const shuffleArray = (optionsAnswers: Options[]): Options[] => {
    const NEGATIVE_NUM = -1;
    const shuffleOptions = optionsAnswers
      .sort(() => Math.random() + Math.random() * NEGATIVE_NUM);
    return shuffleOptions;
  };

  // Retorna as alternativas certas e erradas ordenadas aleatoriamente
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

  // Atualiza questao
  const getActualQuestion = (questionsAPI: Question[]) => {
    const currQuestion = questionsAPI[questionIndex];
    const newRandomOptions = getRandomOptions(currQuestion);
    setActualQuestion(currQuestion);
    setRandomOptions(newRandomOptions);
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  // Executa requisição a API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchQuestionsAPI();
        console.log(results);
        if (results.length > 0) {
          setAllQuestions((prevAllQuestions) => [...prevAllQuestions,
            ...results.slice(0, (results.length - 1))]);
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

  // Temporizador - 30s
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

  // Atualiza a pontuacao
  const updateScore = (answer: Answer) => {
    if (answer.answer === 'right') {
      const points = 10;
      const level: Record<Level, number> = { easy: 1, medium: 2, hard: 3 };
      const score = points + counter * Number(level[answer.level]);
      setUserScore(score + userScore);
      setRightAnswers((prevRightAnswers) => [...prevRightAnswers, answer]);
    }
    setShowAnswer(true);
    setTimeAnswer(counter);
  };

  // Função do botao PROXIMO
  const handleClick = () => {
    if (questionIndex === questions.length - 1) {
      navigate('/results');
    }
    getActualQuestion(questions);
    setShowAnswer(false);
    setAllAnswers(false);
    setCounter(30);
  };

  return (
    <section className="game-page-and-header">
      <Header />
      <div className="game-page-only">
        {errorAPI ? <h2>Erro ao buscar perguntas. Tente novamente mais tarde!</h2> : (
          <div className="game-page">
            {actualQuestion && (
              <div className="question-and-answers">
                <div className="question-side">
                  <img
                    src="/src/images/logo_trivia-dev.png"
                    alt="logo"
                    className="logo"
                  />
                  <h2 className="category">{actualQuestion.category}</h2>
                  {/* <h2>
                    Questão:
                    {' '}
                    {questionIndex}
                  </h2> */}
                  <h3>{actualQuestion.difficulty}</h3>
                  <h1>
                    Questão:
                    {' '}
                    {questionIndex}
                    {' '}
                    {actualQuestion.question}
                  </h1>
                  <h2>
                    Tempo:
                    {' '}
                    {showAnswer ? timeAnswer : counter}
                  </h2>
                </div>
                <div className="answers-side">
                  {randomOptions && randomOptions.map((option, index) => {
                    const isRight = option.answer === 'right';
                    let color = 'white';
                    if (showAnswer) {
                      color = isRight ? 'green' : 'red';
                    }
                    return (
                      <button
                        className="button-answer"
                        key={ index }
                        onClick={ () => updateScore(option) }
                        style={ { backgroundColor: color } }
                        disabled={ allAnswers }
                      >
                        {option.value}
                      </button>
                    );
                  })}
                  <button
                    className="button-next"
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
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}

export default Game;
