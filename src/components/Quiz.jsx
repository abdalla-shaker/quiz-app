import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const currentQuestion = QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => {
      return [
        ...prevUserAnswer,
        {
          question: currentQuestion.text,
          questionID: currentQuestion.id,
          pickedAnswer: selectedAnswer,
        },
      ];
    });
  };

  console.log(userAnswers);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{currentQuestion.text}</h2>
        <ul id="answers">
          {currentQuestion.answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
