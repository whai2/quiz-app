import useRecodeResults from "@/hooks/zustand/useRecodeResults";
import { useGetQuiz } from "@/hooks/query/useGetQuiz";

import MultipleChoice from "@/components/quiz/MultipleChoice";

function IncorrectNote() {
  // 서버 상태
  const { data } = useGetQuiz();
  console.log(data);
  // 전역 상태
  const { incorrectAnswerList } = useRecodeResults();

  return (
    <ul>
      {incorrectAnswerList.map((incorrectQuizIndex, index) => (
        <li key={index}>
          <div>{incorrectQuizIndex+1}번 문제</div>
          <MultipleChoice
            question={data.results[incorrectQuizIndex].question}
            category={data.results[incorrectQuizIndex].category}
            correct_answer={data.results[incorrectQuizIndex].correct_answer}
            difficulty={data.results[incorrectQuizIndex].difficulty}
            incorrect_answers={
              data.results[incorrectQuizIndex].incorrect_answers
            }
            clickedAnswer={data.results[incorrectQuizIndex].correct_answer}
          />
        </li>
      ))}
    </ul>
  );
}

export default IncorrectNote;
