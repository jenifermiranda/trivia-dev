// Tela de Resultados do Usuário
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import Question from '../types/Question.type';

function UserResults() {
  const { userScore, formLogin, questions, rightAnswers } = useContext(GlobalContext);

  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);

  useEffect(() => {
    const wrongs = questions.filter((question) => rightAnswers
      .every((answer) => answer.value !== question.correct_answer));

    setWrongAnswers(wrongs);
  }, []);

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
        {(rightAnswers.length / (questions.length - 1)) * 100}
        %
      </h3>
      <h3>
        Questões que foram respondidas incorretamente:
        <br />
        Dica!!! Foque nesses assuntos para melhorar seu desempenho!
      </h3>
      {wrongAnswers.map((question, index) => (
        <div key={ index }>
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
    </section>
  );
}

export default UserResults;
