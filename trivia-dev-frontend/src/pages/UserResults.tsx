// Tela de Resultados do Usuário
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from '../components/Chart';
import GlobalContext from '../context/GlobalContext';
import Question from '../types/Question.type';

function UserResults() {
  const navigate = useNavigate();

  const { userScore,
    formLogin,
    questions,
    rightAnswers,
    wrongAnswers,
    setWrongAnswers,
    allQuestions } = useContext(GlobalContext);

  useEffect(() => {
    const wrongs = allQuestions.filter((question) => rightAnswers
      .every((answer) => answer.value !== question.correct_answer));

    setWrongAnswers(wrongs);
  }, []);

  function handleSubmit() {
    navigate('/game');
  }

  return (
    <section>
      <h2>
        Resultados de
        {' '}
        {formLogin.name}
      </h2>
      <h3>
        Total de pontos dessa rodada:
        {' '}
        {userScore}
      </h3>
      <h3>
        Porcentagem de acertos:
        {' '}
        {((rightAnswers.length / (allQuestions.length)) * 100).toFixed(2)}
        %
      </h3>
      <h3>
        Questões que foram respondidas incorretamente:
        <br />
      </h3>
      {wrongAnswers.map((question, index) => (
        <div key={ index }>
          <h4>
            {question.category}
          </h4>
          <h4>
            {question.question}
          </h4>
          <h5>
            R.:
            {' '}
            {question.correct_answer}
          </h5>
        </div>
      ))}
      <Chart />
      <h3>Foque nesses assuntos para melhorar seu desempenho!</h3>
      <button
        id="playAgain"
        type="button"
        name="Play Again"
        onClick={ handleSubmit }
      >
        Play Again
      </button>
    </section>
  );
}

export default UserResults;
