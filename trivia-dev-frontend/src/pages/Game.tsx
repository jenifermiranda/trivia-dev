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
  level: string;
  value: string;
}

interface Answer {
  answer: string;
  level: string;
}

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
//   const timer = () => {
//   useEffect(() => {
//     const second = 10000;

//     const time = setInterval(() => {
//       setCounter((prevCounter) => (prevCounter > 0 ? prevCounter -1 : 0));

//       setAllAnswers((prevAllAnswers) => {
//         if (counter === 0 || showAnswer) {
//           clearInterval(time);
//           return true;
//         }
//         return prevAllAnswers;
//       });
//     }, second);

//     return () => clearInterval(time);
//   }, [counter, showAnswer]);
// }

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
    // timer();
  };

  // function getActualQuestion(questions: Question[]) {
  //   const actualQuestion = questions[questionIndex];
  //   const randomOptions = getRandomOptions(actualQuestion);
  //   setActualQuestion(actualQuestion);
  //   setRandomOptions(randomOptions);
  //   // timer();
  // };

  // retorna as questoes certas e erradas
  const getRandomOptions = (question: Question): Options[] => {
    const options: Options[] = [
      {
        answer: 'right',
        level: question.difficulty,
        value: question.correct_answer,
      },
      ...question.incorrect_answers.map((answer) => ({
        answer: 'wrong',
        level: question.difficulty,
        value: answer,
      })),
    ];
    // retornando [{...}, {...}, {...}]
    
    return shuffleArray(options);
  };

  // atualiza a pontuacao
  // const updateScore = (answer: Answer) => {
  //   if (answer.answer === 'right') {
  //     const points = 10;
  //     const level = { easy: 1, medium: 2, hard: 3 };
  //     const score = points + counter * level[answer.level];
  //     console.log(score);
  //     dispatch(updateScore(score));
  //   }
  //   setShowAnswer(true);
  // };

  // funcao do botao PROXIMO
  // const handleClick = () => {
  //   setActualQuestion(true);
  //   setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  //   setShowAnswer(false);
  //   setAllAnswers(false);
  //   setCounter(10);

  //   getActualQuestion();
  // }

  // Checa carregamento da página
  // if (redirect) return <Redirect to="/" />;
  // criar componente Redirect para redirecionar a pagina

  return (
    <section>
      <Header />
      <h2>
        Tempo:
        {' '}
        {counter}
      </h2>
      { }
        <h2>Categoria</h2>
        <h3>Questão</h3>
        <button>
          Próxima
        </button>
    </section>
  )
}

export default Game