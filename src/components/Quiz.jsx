import { useState } from "react";

import QUESTIONS from "../questions.js";
import quizIsCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizIsCompleteImg} alt="trophy icon" />
        <h2>Quiz is complete</h2>
      </div>
    );
  }

  const currentQuestion = { ...QUESTIONS[activeQuestionIndex] };
  const shuffledAnswers = [...currentQuestion.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

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
          {shuffledAnswers.map((answer) => (
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
