export type Question = {
    id: number;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers_id_a: number;
    incorrect_answers_id_b: number;
    incorrect_answers_id_c: number;
    incorrect_answers_id_d: number;
};