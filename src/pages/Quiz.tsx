import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import MultipleChoice from "@/components/quiz/MultipleChoice";

import { quizRequests } from "@/apis/quiz/quiz.api";
import { MultipleChoiceProps } from "@/apis/quiz/quiz.type";

function Quiz() {
  const navigate = useNavigate();

  const [quizNumber, setQuizNumber] = useState(0);
  const [quizList, setQuizList] = useState<MultipleChoiceProps[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === quizList[quizNumber].correct_answer;
    setIsCorrect(correct);
  };

  const handleNextClick = () => {
    toast(isCorrect ? 'Correct!' : 'Incorrect!');
    
    setTimeout(() => {
      if (quizNumber + 1 < quizList.length) {
        setSelectedAnswer(null);
        setIsCorrect(null);

        setQuizNumber((prevNumber) => prevNumber + 1);
      } else {
        navigate('/result');
      }
    }, 500); 
  };

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const { results } = await quizRequests();
        setQuizList(results);
        console.log(results);
      } catch (error) {
        // setError('Failed to fetch data');
      } finally {
        // setLoading(false);
      }
    };

    getQuiz();
  }, []);

  if (!quizList.length) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Quiz Questions</h1>
        <MultipleChoice
          question={quizList[quizNumber].question}
          category={quizList[quizNumber].category}
          correct_answer={quizList[quizNumber].correct_answer}
          difficulty={quizList[quizNumber].difficulty}
          incorrect_answers={quizList[quizNumber].incorrect_answers}
          handleAnswerClick={handleAnswerClick}
        />
      <button 
        onClick={handleNextClick}
        disabled={!selectedAnswer}
      >
        다음 문제
      </button>
      <Toaster />
    </div>
  );
}

export default Quiz;
