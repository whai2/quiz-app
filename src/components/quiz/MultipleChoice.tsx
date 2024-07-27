import { MultipleChoiceProps } from "@/apis/quiz/quiz.type";
import { shuffleArray, decodeHtmlEntities } from "./quiz.util";

function MultipleChoice({
  question,
  category,
  correct_answer,
  difficulty,
  incorrect_answers,
}: MultipleChoiceProps) {
  const allAnswers = shuffleArray([...incorrect_answers, correct_answer]);

  return (
    <li className="multiple-choice">
      <h2>{decodeHtmlEntities(question)}</h2>
      <p>Category: {decodeHtmlEntities(category)}</p>
      <p>Difficulty: {decodeHtmlEntities(difficulty)}</p>
      <ul>
        {allAnswers.map((answer, index) => (
          <li key={index}>
            <button>{decodeHtmlEntities(answer)}</button>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default MultipleChoice;
