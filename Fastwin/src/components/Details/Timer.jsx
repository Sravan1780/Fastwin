import React from 'react';

function Timer({ time }) {
  return (
    <div className="rotate">
      <h1 id="time">{time}</h1>
    </div>
  );
}

export default Timer;
