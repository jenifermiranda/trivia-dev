export type Question = {
    id: number;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers?: {
        incorrect_answers_a: string;
        incorrect_answers_b: string;
        incorrect_answers_c: string;
        incorrect_answers_d: string;
    };
    incorrect_answers_a: string;
    incorrect_answers_b: string;
    incorrect_answers_c: string;
    incorrect_answers_d: string;
};

type incorrect_answers = {
    incorrect_answers_a: string;
    incorrect_answers_b: string;
    incorrect_answers_c: string;
    incorrect_answers_d: string;
};
