export type Question = {
    id: number;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers_id: number;
};