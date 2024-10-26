import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({
  questionText,
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeoutTimer={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
