import useRecodeResults from "@/hooks/zustand/useRecodeResults";
import { timer } from "@/utils/timer";

function Result() {
  const { correctAnswers, incorrectAnswers, startTime, endTime } =
    useRecodeResults();

    const { hours, minutes, seconds } = timer(startTime, endTime);

  return (
    <>
      <div>정답 수 {correctAnswers}</div>
      <div>오답 수 {incorrectAnswers}</div>
      <div>문제 풀이에 걸린 시간은 {hours}시간 {minutes}분 {seconds}초 입니다.</div>
    </>
  );
}

export default Result;
