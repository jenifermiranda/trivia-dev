import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchQuestionsAPI } from '../services/fetchAPI';

// tipagem das coisas
interface Question {
  type: String;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Options {
  answer: string;
  level: Level;
  value: string;
}

interface Answer {
  answer: string;
  level: Level;
  value: string;
}

type Level = 'easy' | 'medium' | 'hard';

interface Props {
  dispatch: (action: any) => void; // Substitua 'any' pelo tipo real da ação
}

function Game() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [actualQuestion, setActualQuestion] = useState<Question>();
  const [questions, setQuestions] = useState([]);
  const [randomOptions, setRandomOptions] = useState<Options[]>();
  // const [redirect, setRedirect] = useState(false);
  const [counter, setCounter] = useState<number>(10);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [allAnswers, setAllAnswers] = useState(false);

  // faz uma requisição a uma API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchQuestionsAPI();
        if (results.length > 0) {
          setQuestions(results);
          getActualQuestion(results)
        } 
      } catch (error) {
        console.log('Erro ao buscar perguntas.', error);
      }
    };

    fetchData();
  }, []);

  // contador
  const timer = () => {
  useEffect(() => {
    const second = 10000;

    const time = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));

      setAllAnswers((prevAllAnswers) => {
        if (counter === 0 || showAnswer) {
          clearInterval(time);
          return true;
        }
        return prevAllAnswers;
      });
    }, second);

    return () => clearInterval(time);
  }, [counter, showAnswer]);
}

  // randomiza questoes
  function shuffleArray<T>(array: T[]) {
    const shuffleOptions = array.sort(() => {
      const NEGATIVE_NUM = -1;
      return Math.random() + Math.random() * NEGATIVE_NUM;
    });
    // retorna o msm array embaralhado
    return shuffleOptions;
  }

  // atualiza questao
  const getActualQuestion = (questions: Question[]) => {
    const actualQuestion = questions[questionIndex];
    const randomOptions = getRandomOptions(actualQuestion);
    setActualQuestion(actualQuestion);
    setRandomOptions(randomOptions);
    useEffect(() => {
      timer();
    }, []);
  };

  // retorna as questoes certas e erradas
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
    // setActualQuestion(true);
    setQuestionIndex(questionIndex + 1);
    setShowAnswer(false);
    setAllAnswers(false);
    setCounter(10);

    getActualQuestion(questions);
  }

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
                ? isRight ? 'green' : 'red'
                : 'white';
              return (
                <button
                  key={index}
                  onClick={() => updateScore(option)}
                  style={{ backgroundColor: color }}
                  disabled={allAnswers}
                >
                  {option.value}
                </button>
              );
            })}
          </div>
        </div>
      )}
        <button
        onClick={handleClick}
        >
          Próxima
        </button>
    </section>
  )
}

export default Game