import { useState, useEffect } from "react";

export default function QuestionTimer({ timeoutTimer, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeoutTimer);

  useEffect(() => {
    console.log("setting a timeout");
    setTimeout(onTimeout, timeoutTimer);
  }, [onTimeout, timeoutTimer]);

  useEffect(() => {
    console.log("setting an interval");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timeoutTimer} />
  );
}
