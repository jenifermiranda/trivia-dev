import { Dispatch, SetStateAction } from 'react';
import Question from './Question.type';
import FormLogin from './FormLogin.type';
import Answer from './Answer.type';

export type GlobalContextType = {
  userScore: number;
  setUserScore: Dispatch<SetStateAction<number>>;
  questions: Question[];
  setQuestions: Dispatch<SetStateAction<Question[]>>;
  rightAnswers: Answer[];
  setRightAnswers: Dispatch<SetStateAction<Answer[]>>;
  formLogin: FormLogin;
  setformLogin: Dispatch<SetStateAction<FormLogin>>;
};
