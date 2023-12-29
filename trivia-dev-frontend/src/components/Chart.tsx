import React, { useContext, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import GlobalContext from '../context/GlobalContext';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const { rightAnswers, allQuestions } = useContext(GlobalContext);

  const hits = (rightAnswers.length / (allQuestions.length)) * 100;
  const error = 100 - hits;

  const data = {
    labels: [`% ${hits} de Erro`, `% ${error} de acerto`],
    datasets: [
      {
        label: 'Percentage of hits',
        data: [rightAnswers.length, allQuestions.length - rightAnswers.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
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
