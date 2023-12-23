import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchQuestionsAPI } from '../services/fetchAPI';
import Question from '../types/Question.type';
import Options from '../types/Options.type';
import Answer from '../types/Answer.type';
import Level from '../types/Level.type';

function Game() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [actualQuestion, setActualQuestion] = useState<Question>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [randomOptions, setRandomOptions] = useState<Options[]>();
  // const [redirect, setRedirect] = useState(false);
  const [counter, setCounter] = useState<number>(10);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [allAnswers, setAllAnswers] = useState<boolean>(false);

  // faz uma requisição a uma API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchQuestionsAPI();
        if (results.length > 0) {
          setQuestions(results);
          setActualQuestion(results[questionIndex]);
          setRandomOptions(getRandomOptions(results[questionIndex]));
        }
      } catch (error) {
        console.log('Erro ao buscar perguntas.', error);
      }
    };

    fetchData();
  }, [questionIndex]);

  // contador
  //   useEffect(() => {
  //     const time = setInterval(() => {
  //       setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  //       setAllAnswers((prevAllAnswers) => {
  //         if (counter === 0 || showAnswer) {
  //           clearInterval(time);
  //           return true;
  //         }
  //         return prevAllAnswers;
  //       });
  //     }, 1000);

  //     return () => clearInterval(time);
  //   }, [counter, showAnswer]);

  // retorna as alternativas certas e erradas
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

  // randomiza questoes
  function shuffleArray<T>(array: T[]) {
    const NEGATIVE_NUM = -1;
    const shuffleOptions = array.sort(() => Math.random() + Math.random() * NEGATIVE_NUM);
    // retorna o msm array embaralhado
    return shuffleOptions;
  }

  // atualiza questao
  const getActualQuestion = (questions: Question[]) => {
    const currQuestion = questions[questionIndex];
    const randomOptions = getRandomOptions(currQuestion);
    setActualQuestion(currQuestion);
    setRandomOptions(randomOptions);
  };

  // atualiza a pontuacao
  const updateScore = (answer: Answer) => {
    if (answer.answer === 'right') {
      const points = 10;
      const level: Record<Level, number> = { easy: 1, medium: 2, hard: 3 };
      const score = points + counter * Number(level[answer.level]);
      console.log(score);
      // dispatch(updateScore(score));
    }
    setShowAnswer(true);
  };

  // funcao do botao PROXIMO
  const handleClick = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
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

export default Game;
