import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('questions', [
      {
        id: 1,
        difficulty: "easy",
        category: "Docker",
        question: "O que é o Docker?",
        correct_answer: "Uma plataforma de virtualização",
        incorrect_answers_a: "Uma linguagem de programação",
        incorrect_answers_b: "Um sistema operacional",
        incorrect_answers_c: "Um gerenciador de banco de dados",
        incorrect_answers_d: "Um sistema para automação de deploys"
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "Qual é a principal vantagem do Docker em comparação com a virtualização tradicional?",
        correct_answer: "Maior eficiência no uso de recursos",
        incorrect_answers_a: "Maior consumo de recursos",
        incorrect_answers_b: "Menor isolamento entre os contêineres",
        incorrect_answers_c: "Mais difícil de escalar",
        incorrect_answers_d: "Nenhuma diferença significativa",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "O que são imagens Docker?",
        correct_answer: "Pacotes de software autocontidos",
        incorrect_answers_a: "Representações visuais de contêineres",
        incorrect_answers_b: "Arquivos de configuração do Docker",
        incorrect_answers_c: "Plugins para o Docker",
        incorrect_answers_d: "Ferramentas de monitoramento",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "Como os contêineres Docker diferem das máquinas virtuais tradicionais?",
        correct_answer: "Eles compartilham o mesmo kernel do sistema operacional hospedeiro",
        incorrect_answers_a: "Eles são mais lentos",
        incorrect_answers_b: "Eles ocupam mais espaço em disco",
        incorrect_answers_c: "Eles não podem ser escalonados horizontalmente",
        incorrect_answers_d: "Eles não são portáteis",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "Qual comando é usado para construir uma imagem Docker a partir de um arquivo Dockerfile?",
        correct_answer: "docker build",
        incorrect_answers_a: "docker run",
        incorrect_answers_b: "docker create",
        incorrect_answers_c: "docker compose",
        incorrect_answers_d: "docker pull",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "O que é um registro Docker?",
        correct_answer: "Um repositório centralizado para armazenar e compartilhar imagens Docker",
        incorrect_answers_a: "Um componente do sistema operacional",
        incorrect_answers_b: "Uma biblioteca de funções Docker",
        incorrect_answers_c: "Um tipo especial de contêiner",
        incorrect_answers_d: "Um serviço de monitoramento Docker",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "O que é o Docker Compose usado para fazer?",
        correct_answer: "Orquestrar e gerenciar múltiplos contêineres",
        incorrect_answers_a: "Criar imagens Docker",
        incorrect_answers_b: "Executar comandos no terminal Docker",
        incorrect_answers_c: "Instalar o Docker no sistema",
        incorrect_answers_d: "Monitorar o desempenho do Docker",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "Qual é a função do Docker Swarm?",
        correct_answer: "Orquestração de contêineres",
        incorrect_answers_a: "Construção de imagens Docker",
        incorrect_answers_b: "Configuração de redes no Docker",
        incorrect_answers_c: "Gerenciamento de registros Docker",
        incorrect_answers_d: "Análise de logs no Docker",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "O que é um volume Docker?",
        correct_answer: "Uma unidade de armazenamento persistente fora do ciclo de vida do contêiner",
        incorrect_answers_a: "Uma versão específica do Docker",
        incorrect_answers_b: "Uma unidade de processamento dentro de um contêiner",
        incorrect_answers_c: "Um componente do sistema operacional hospedeiro",
        incorrect_answers_d: "Um tipo especial de imagem Docker",
      },
      {
        difficulty: "easy",
        category: "Docker",
        question: "Qual é o propósito do Docker Hub?",
        correct_answer: "Um repositório público para compartilhar imagens Docker",
        incorrect_answers_a: "Um ambiente de desenvolvimento integrado para Docker",
        incorrect_answers_b: "Uma ferramenta de monitoramento de contêineres",
        incorrect_answers_c: "Um serviço de nuvem para executar contêineres",
        incorrect_answers_d: "Um sistema operacional otimizado para contêineres",
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('questions', {});
  }
};