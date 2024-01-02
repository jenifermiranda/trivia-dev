import { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import GlobalContext from '../context/GlobalContext';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const { wrongAnswers } = useContext(GlobalContext);

  // Array com todas as categorias das questões erradas
  const categories: string[] = [];
  wrongAnswers.forEach((question) => {
    categories.push(question.category);
  });
  // console.log(categories);
  

  // Função para contar a quantidade de vezes que cada categoria se repete
function counterCategories(categories: string[]) {
  const counter: Record<string, number> = {};

  categories.forEach(category => {
    counter[category] = (counter[category] || 0) + 1;
  });
  const result = Object.values(counter).map(chave => chave);
  return result;
}
// console.log(counterCategories(categories));


function getRandomNumber(): number {
  return Math.floor(Math.random() * 256);
}

function getRandomColor(): string {
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();
  return `rgb(${r}, ${g}, ${b}, 0.6)`;
}

const colors: string[] = [];
for (let i = 0; i < categories.length; i += 1) {
  colors.push(getRandomColor());
}

// Array com todas as categorias das questões erradas sem repetição
const categoriesUnique: string[] = [];
wrongAnswers.forEach((question) => {
  if (!categoriesUnique.includes(question.category))
  categoriesUnique.push(question.category);
});
// console.log(colors);


  const data = {
    labels: categoriesUnique,
    datasets: [
      {
        label: 'Percentage of errors per category',
        data: counterCategories(categories),
        backgroundColor: colors,
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
