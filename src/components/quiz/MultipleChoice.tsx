import { useMemo } from "react";

import { MultipleChoiceProps } from "@/apis/quiz/quiz.type";
import { shuffleArray, decodeHtmlEntities } from "./quiz.util";

import styled from 'styled-components';

interface MultipleChoiceWithHandlerProps extends MultipleChoiceProps {
  handleAnswerClick: (answer: string) => void;
  clickedAnswer: string | null;
}

interface AnswerButtonProps {
  isClicked: boolean;
}

function MultipleChoice({
  question,
  category,
  correct_answer,
  difficulty,
  incorrect_answers,
  handleAnswerClick,
  clickedAnswer
}: MultipleChoiceWithHandlerProps) {
  const allAnswers = useMemo(
    () => shuffleArray([...incorrect_answers, correct_answer]),
    [incorrect_answers, correct_answer]
  );

  return (
    <li className="multiple-choice">
      <h2>{decodeHtmlEntities(question)}</h2>
      <p>Category: {decodeHtmlEntities(category)}</p>
      <p>Difficulty: {decodeHtmlEntities(difficulty)}</p>
      <ul>
        {allAnswers.map((answer, index) => (
          <li key={index}>
            <S.AnswerButton onClick={() => handleAnswerClick(answer)} isClicked={clickedAnswer === answer}>
              {decodeHtmlEntities(answer)}
            </S.AnswerButton>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default MultipleChoice;

const S = {
  AnswerButton: styled.button<AnswerButtonProps>`
    background-color: ${props => (props.isClicked ? 'skyblue' : 'white')};
    color: ${props => (props.isClicked ? 'white' : 'black')};
    border: 1px solid ${props => (props.isClicked ? 'skyblue' : 'black')};
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  `
};