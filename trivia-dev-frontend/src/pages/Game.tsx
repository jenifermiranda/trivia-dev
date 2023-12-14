import { useEffect, useState } from 'react';
import Header from '../components/Header';

function Game() {
  const [questions, setQuestions] = useState([]);
  const [redirect, setRecirect] = useState(false);
  const [counter, setCounter] = useState(10);
  const [showAnswer, setShowAnswer] = useState(false);
  const [allAnswers, setAllAnswers] = useState(false);

  // faz uma requisição a uma API
  useEffect(() => {
    const fechData = async () => {
      try {
        const { results } = await fetchQuestionsAPI();
        if (results.length > 0) {
          
        }
      }
    }
  }, []);

  // contador
  useEffect(() => {
    const second = 1000;

    const time = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter -1 : 0));

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

  return (
    <section>
      <Header />
      <h2>
        Tempo:
        {' '}
        {/* {contador} */}
      </h2>
        <h2>Categoria</h2>
        <h3>Questão</h3>
        <button>
          Próxima
        </button>
    </section>
  )
}

export default Game