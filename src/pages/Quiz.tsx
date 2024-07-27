import { useState, useEffect } from "react";

import MultipleChoice from "@/components/quiz/MultipleChoice";

import { quizRequests } from "@/apis/quiz/quiz.api";
import { MultipleChoiceProps } from "@/apis/quiz/quiz.type";

function Quiz() {
  // const [quizNumber, setQuizNumber] = useState(0);
  const [quizList, setQuizList] = useState([]);

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

  return (
    <div>
      <h1>Quiz Questions</h1>
      <ul>
        {!!quizList.length &&
          quizList.map((quiz: MultipleChoiceProps, index) => (
            <MultipleChoice
              question={quiz.question}
              category={quiz.category}
              correct_answer={quiz.correct_answer}
              difficulty={quiz.difficulty}
              incorrect_answers={quiz.incorrect_answers}
              key={index}
            />
          ))}
      </ul>
    </div>
  );
}

export default Quiz;
