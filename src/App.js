import React from 'react';
import TimerList from './components/TimerList';
import WorldClock from './components/WorldClock';

const App = () => {
  return (
    <div>
      <h1>React Timer App</h1>
      <TimerList />
      <WorldClock />
    </div>
  );
};

export default App;
