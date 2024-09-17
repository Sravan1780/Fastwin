import React from 'react';

function Result({ message }) {
  return (
    <div className="result">
      <p id="resultInfo">{message}</p>
    </div>
  );
}

export default Result;
