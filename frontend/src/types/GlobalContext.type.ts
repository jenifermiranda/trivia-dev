import { Dispatch, SetStateAction } from 'react';
import Question from './Question.type';
import FormLogin from './FormLogin.type';
import Answer from './Answer.type';

export type GlobalContextType = {
  userScore: number;
  setUserScore: Dispatch<SetStateAction<number>>;
  questions: Question[];
  setQuestions: Dispatch<SetStateAction<Question[]>>;
  allQuestions: Question[];
  setAllQuestions: Dispatch<SetStateAction<Question[]>>;
  rightAnswers: Answer[];
  setRightAnswers: Dispatch<SetStateAction<Answer[]>>;
  wrongAnswers: Question[];
  setWrongAnswers: Dispatch<SetStateAction<Question[]>>;
  formLogin: FormLogin;
  setformLogin: Dispatch<SetStateAction<FormLogin>>;
};
