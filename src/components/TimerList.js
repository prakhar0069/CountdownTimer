import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CountdownTimer from "./CountdownTimer";

const TimerList = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = () => {
    setTimers((prevTimers) => [...prevTimers, { id: uuidv4(), startTime: 60 }]);
  };

  const removeTimer = (timerId) => {
    setTimers((prevTimers) =>
      prevTimers.filter((timer) => timer.id !== timerId)
    );
  };

  const handleTimerEnd = (timerId) => {
    removeTimer(timerId);
  };

  return (
    <div>
      <button onClick={addTimer}>Add Timer</button>
      {timers.map((timer) => (
        <div key={timer.id}>
          <CountdownTimer
            startTime={timer.startTime}
            onTimerEnd={() => handleTimerEnd(timer.id)}
          />
          <button onClick={() => removeTimer(timer.id)}>Remove Timer</button>
        </div>
      ))}
    </div>
  );
};

export default TimerList;
