import { useState } from 'react';
import GlobalContext from './GlobalContext';
import { GlobalProviderProps } from '../types/GlobalProvider.type';
import Question from '../types/Question.type';
import FormLogin from '../types/FormLogin.type';
import Answer from '../types/Answer.type';

function GlobalProvider({ children }: GlobalProviderProps) {
  const [userScore, setUserScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [rightAnswers, setRightAnswers] = useState<Answer[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [formLogin, setformLogin] = useState<FormLogin>({
    name: '',
    email: '',
  });

  return (
    <GlobalContext.Provider
      value={ {
        userScore,
        setUserScore,
        questions,
        setQuestions,
        allQuestions,
        setAllQuestions,
        rightAnswers,
        setRightAnswers,
        wrongAnswers,
        setWrongAnswers,
        formLogin,
        setformLogin,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
