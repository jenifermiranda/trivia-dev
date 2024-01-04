"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('questions', [
            {
                difficulty: "easy",
                category: "Docker",
                question: "O que é o Docker?",
                correct_answer: "Uma plataforma de virtualização",
                incorrect_answers_id_a: 1,
                incorrect_answers_id_b: 2,
                incorrect_answers_id_c: 3,
                incorrect_answers_id_d: 4,
                // incorrect_answers_id: [ 1, 2, 3, 4 ]
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "Qual é a principal vantagem do Docker em comparação com a virtualização tradicional?",
                correct_answer: "Maior eficiência no uso de recursos",
                incorrect_answers_id_a: 5,
                incorrect_answers_id_b: 6,
                incorrect_answers_id_c: 7,
                incorrect_answers_id_d: 8,
                // incorrect_answers_id: [ 5, 6, 7, 8 ]
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "O que são imagens Docker?",
                correct_answer: "Pacotes de software autocontidos",
                incorrect_answers_id_a: 9,
                incorrect_answers_id_b: 10,
                incorrect_answers_id_c: 11,
                incorrect_answers_id_d: 12,
                // incorrect_answers_id: [ 9, 10, 11, 12 ]
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "Como os contêineres Docker diferem das máquinas virtuais tradicionais?",
                correct_answer: "Eles compartilham o mesmo kernel do sistema operacional hospedeiro",
                // incorrect_answers_id: [ 11, 12, 13, 14 ]
                incorrect_answers_id_a: 11,
                incorrect_answers_id_b: 12,
                incorrect_answers_id_c: 13,
                incorrect_answers_id_d: 14,
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "Qual comando é usado para construir uma imagem Docker a partir de um arquivo Dockerfile?",
                correct_answer: "docker build",
                // incorrect_answers_id: [ 17, 18, 19, 20 ]
                incorrect_answers_id_a: 17,
                incorrect_answers_id_b: 18,
                incorrect_answers_id_c: 19,
                incorrect_answers_id_d: 20,
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "O que é um registro Docker?",
                correct_answer: "Um repositório centralizado para armazenar e compartilhar imagens Docker",
                // incorrect_answers_id: [ 21, 22, 23, 24 ]
                incorrect_answers_id_a: 21,
                incorrect_answers_id_b: 22,
                incorrect_answers_id_c: 23,
                incorrect_answers_id_d: 24,
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "O que é o Docker Compose usado para fazer?",
                correct_answer: "Orquestrar e gerenciar múltiplos contêineres",
                // incorrect_answers_id: [ 25, 26, 27, 28 ]
                incorrect_answers_id_a: 25,
                incorrect_answers_id_b: 26,
                incorrect_answers_id_c: 27,
                incorrect_answers_id_d: 28,
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "Qual é a função do Docker Swarm?",
                correct_answer: "Orquestração de contêineres",
                // incorrect_answers_id: [ 29, 30, 31, 32 ]
                incorrect_answers_id_a: 29,
                incorrect_answers_id_b: 30,
                incorrect_answers_id_c: 31,
                incorrect_answers_id_d: 32,
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "O que é um volume Docker?",
                correct_answer: "Uma unidade de armazenamento persistente fora do ciclo de vida do contêiner",
                // incorrect_answers_id: [ 33, 34, 35, 36 ]
                incorrect_answers_id_a: 33,
                incorrect_answers_id_b: 34,
                incorrect_answers_id_c: 35,
                incorrect_answers_id_d: 36,
            },
            {
                difficulty: "easy",
                category: "Docker",
                question: "Qual é o propósito do Docker Hub?",
                correct_answer: "Um repositório público para compartilhar imagens Docker",
                // incorrect_answers_id: [ 37, 38, 39, 40 ]
                incorrect_answers_id_a: 37,
                incorrect_answers_id_b: 38,
                incorrect_answers_id_c: 39,
                incorrect_answers_id_d: 40,
            }
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('questions', {});
    }
};
