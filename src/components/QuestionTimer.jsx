import { useState, useEffect } from "react";

export default function QuestionTimer({ timeoutTimer, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeoutTimer);

  useEffect(() => {
    console.log("setting a timeout");
    const timer = setTimeout(onTimeout, timeoutTimer);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeoutTimer]);

  useEffect(() => {
    console.log("setting an interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeoutTimer}
      className={mode}
    />
  );
}
