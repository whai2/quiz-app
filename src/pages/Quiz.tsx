import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import MultipleChoice from "@/components/quiz/MultipleChoice";

import useRecodeResults from "@/hooks/zustand/useRecodeResults";
import { useGetQuiz } from "@/hooks/query/useGetQuiz";

function Quiz() {
  const navigate = useNavigate();

  // 지역 상태
  const [quizNumber, setQuizNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // 서버 상태
  const { data } = useGetQuiz();

  // 전역 상태
  const { addCorrectAnswer, addIncorrectAnswer, setEndTime } =
    useRecodeResults();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === data.results[quizNumber].correct_answer;
    setIsCorrect(correct);
  };

  const handleNextClick = () => {
    toast(isCorrect ? "정답입니다!" : "오답입니다.");

    if (isCorrect) {
      addCorrectAnswer(quizNumber);
    } else {
      addIncorrectAnswer(quizNumber);
    }

    setTimeout(() => {
      if (quizNumber + 1 < data.results.length) {
        setSelectedAnswer(null);
        setIsCorrect(null);

        setQuizNumber((prevNumber) => prevNumber + 1);
      } else {
        setEndTime(new Date()); // 끝나는 시간 기록
        navigate("/result");
      }
    }, 500);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Quiz Questions</h1>
      <MultipleChoice
        question={data.results[quizNumber].question}
        category={data.results[quizNumber].category}
        correct_answer={data.results[quizNumber].correct_answer}
        difficulty={data.results[quizNumber].difficulty}
        incorrect_answers={data.results[quizNumber].incorrect_answers}
        handleAnswerClick={handleAnswerClick}
        clickedAnswer={selectedAnswer}
      />
      <button onClick={handleNextClick} disabled={!selectedAnswer}>
        다음 문제
      </button>
      <Toaster />
    </div>
  );
}

export default Quiz;
