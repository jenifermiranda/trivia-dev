import { useContext, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import GlobalContext from '../context/GlobalContext';
import Category from '../types/Category.type';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const { rightAnswers, allQuestions, wrongAnswers } = useContext(GlobalContext);

  const [chartCategory, setChartCategory] = useState<Category[]>();

  const categories:Category[] = [];
  wrongAnswers.forEach((question) => {
    categories.push(question.category);
  });
  console.log(categories);
  setChartCategory(categories);

  const hits = (rightAnswers.length / (allQuestions.length)) * 100;
  const error = 100 - hits;

  const data = {
    labels: [`% ${error} de Erro`, `% ${hits} de acerto`],
    datasets: [
      {
        label: 'Percentage of hits',
        data: [allQuestions.length - rightAnswers.length, rightAnswers.length],
        backgroundColor: [
          'rgba(255, 0, 0, 0.2)', // vermelho - erro
          'rgba(42, 230, 42, 0.2)', // verde - acerto
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)', // vermelho - erro
          'rgba(42, 230, 42, 1)', // verde - acerto
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={ data } />
    </div>
  );
}

export default Chart;
