import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import useRecodeResults from "@/hooks/zustand/useRecodeResults";
import { timer } from "@/utils/timer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Result() {
  const { correctAnswers, incorrectAnswers, startTime, endTime } =
    useRecodeResults();

  const { hours, minutes, seconds } = timer(startTime, endTime);

  const data = {
    labels: ["정답", "오답"],
    datasets: [
      {
        label: '정답과 오답 수',
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div>정답 수 {correctAnswers}</div>
      <div>오답 수 {incorrectAnswers}</div>
      <div>문제 풀이에 걸린 시간은 {hours}시간 {minutes}분 {seconds}초 입니다.</div>
      <Bar data={data} options={options} />
    </>
  );
}

export default Result;
