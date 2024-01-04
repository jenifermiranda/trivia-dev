"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('incorrect_answers', [
            {
                question_id: 1,
                incorrect_answer: "Uma linguagem de programação"
            },
            {
                question_id: 1,
                incorrect_answer: "Um sistema operacional"
            },
            {
                question_id: 1,
                incorrect_answer: "Um gerenciador de banco de dados"
            },
            {
                question_id: 1,
                incorrect_answer: "Um sistema para automação de deploys"
            },
            {
                question_id: 2,
                incorrect_answer: "Maior consumo de recursos"
            },
            {
                question_id: 2,
                incorrect_answer: "Menor isolamento entre os contêineres"
            },
            {
                question_id: 2,
                incorrect_answer: "Mais difícil de escalar"
            },
            {
                question_id: 2,
                incorrect_answer: "Nenhuma diferença significativa"
            },
            {
                question_id: 3,
                incorrect_answer: "Representações visuais de contêineres"
            },
            {
                question_id: 3,
                incorrect_answer: "Arquivos de configuração do Docker"
            },
            {
                question_id: 3,
                incorrect_answer: "Plugins para o Docker"
            },
            {
                question_id: 3,
                incorrect_answer: "Ferramentas de monitoramento"
            },
            {
                question_id: 4,
                incorrect_answer: "Eles são mais lentos"
            },
            {
                question_id: 4,
                incorrect_answer: "Eles ocupam mais espaço em disco"
            },
            {
                question_id: 4,
                incorrect_answer: "Eles não podem ser escalonados horizontalmente"
            },
            {
                question_id: 4,
                incorrect_answer: "Eles não são portáteis"
            },
            {
                question_id: 5,
                incorrect_answer: "docker run"
            },
            {
                question_id: 5,
                incorrect_answer: "docker create"
            },
            {
                question_id: 5,
                incorrect_answer: "docker compose"
            },
            {
                question_id: 5,
                incorrect_answer: "docker pull"
            },
            {
                question_id: 6,
                incorrect_answer: "Um componente do sistema operacional"
            },
            {
                question_id: 6,
                incorrect_answer: "Uma biblioteca de funções Docker"
            },
            {
                question_id: 6,
                incorrect_answer: "Um tipo especial de contêiner"
            },
            {
                question_id: 6,
                incorrect_answer: "Um serviço de monitoramento Docker"
            },
            {
                question_id: 7,
                incorrect_answer: "Criar imagens Docker"
            },
            {
                question_id: 7,
                incorrect_answer: "Executar comandos no terminal Docker"
            },
            {
                question_id: 7,
                incorrect_answer: "Instalar o Docker no sistema"
            },
            {
                question_id: 7,
                incorrect_answer: "Monitorar o desempenho do Docker"
            },
            {
                question_id: 8,
                incorrect_answer: "Construção de imagens Docker"
            },
            {
                question_id: 8,
                incorrect_answer: "Configuração de redes no Docker"
            },
            {
                question_id: 8,
                incorrect_answer: "Gerenciamento de registros Docker"
            },
            {
                question_id: 8,
                incorrect_answer: "Análise de logs no Docker"
            },
            {
                question_id: 9,
                incorrect_answer: "Uma versão específica do Docker"
            },
            {
                question_id: 9,
                incorrect_answer: "Uma unidade de processamento dentro de um contêiner"
            },
            {
                question_id: 9,
                incorrect_answer: "Um componente do sistema operacional hospedeiro"
            },
            {
                question_id: 9,
                incorrect_answer: "Um tipo especial de imagem Docker"
            },
            {
                question_id: 10,
                incorrect_answer: "Um ambiente de desenvolvimento integrado para Docker"
            },
            {
                question_id: 10,
                incorrect_answer: "Uma ferramenta de monitoramento de contêineres"
            },
            {
                question_id: 10,
                incorrect_answer: "Um serviço de nuvem para executar contêineres"
            },
            {
                question_id: 10,
                incorrect_answer: "Um sistema operacional otimizado para contêineres"
            }
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('incorrect_answers', {});
    }
};
