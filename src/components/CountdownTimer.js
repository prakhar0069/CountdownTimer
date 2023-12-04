import React, { useState, useEffect } from "react";

const CountdownTimer = ({ startTime, onTimerEnd }) => {
  const [timeRemaining, setTimeRemaining] = useState(startTime);

  useEffect(() => {
    if (timeRemaining > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      onTimerEnd();
    }
  }, [timeRemaining, onTimerEnd]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <p>Time Remaining: {formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;
