// import React, { useEffect, useState } from 'react';
// import './Game.css';
// import Header from './Details/Header';
// import Balance from './Details/Balance';
// import Timer from './Details/Timer';
// import Result from './Details/Result';
// import ColorSelection from './Details/ColorSelection';
// import MoneyEnterArea from './Details/MoneyEnterArea';
// import Records from './Details/Records';

// function Game() {
//   const [balance, setBalance] = useState(100);
//   const [time, setTime] = useState(20);
//   const [color, setColor] = useState('');
//   const [inputMoney, setInputMoney] = useState(0);
//   const [message, setMessage] = useState('');
//   const [resultNumber, setResultNumber] = useState('');
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setTime((prevTime) => {
//         if (prevTime === 1) {
//           handleResult();
//           return 30;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timerInterval);
//   }, []);

//   const handleColorSelect = (selectedColor) => {
//     if (time > 10) {
//       setColor(selectedColor);
//       setMessage('');
//     } else {
//       setMessage('Time is too low to select color');
//     }
//   };

//   const handleConfirm = (amount) => {
//     if (amount < 10) {
//       setMessage('Minimum betting 10Rs');
//     } else if (amount > balance) {
//       setMessage('Not sufficient money');
//     } else {
//       setInputMoney(Number(amount));
//       setMessage('Betting confirmed');
//     }
//   };

//   const handleResult = () => {
//     const randomNum = Math.floor(Math.random() * 10) + 1;
//     const isWin = (randomNum % 2 === 0 && color === 'red') || (randomNum % 2 !== 0 && color === 'green');
//     setResultNumber(randomNum);
//     setHistory([...history, { number: randomNum, color: randomNum % 2 === 0 ? 'red' : 'green' }]);
//     if (isWin) {
//       setBalance(balance + inputMoney);
//       setMessage(`Win - Chose: ${color}`);
//     } else {
//       setBalance(balance - inputMoney);
//       setMessage(`Loss - Chose: ${color}`);
//     }
//     setColor('');
//     setInputMoney(0);
//   };

//   useEffect(() => {
//     localStorage.setItem('balance', balance);
//   }, [balance]);

//   return (
//     <div className="container">
//       <Header />
//       <Balance amount={balance} />
//       <Timer time={time} />
//       <Result message={message} />
//       <div id="resultInfo">{resultNumber}</div>
//       <ColorSelection onSelectColor={handleColorSelect} />
//       <MoneyEnterArea onConfirm={handleConfirm} />
//       <Records history={history} />
//     </div>
//   );
// }

// export default Game;
// import React, { useState, useEffect } from 'react';

// function Game() {
//   const [counter, setCounter] = useState(0);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(time + 1);
//       if (time >= 20) {
//         setCounter(counter + 5);
//         setTime(0);
//       }
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, [time, counter]);

//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <p>Time: {time} seconds</p>
//     </div>
//   );
// }

// export default Game;

import React, { useState, useEffect } from 'react';

const JetGame = () => {
  const [money, setMoney] = useState(0);
  const [jetHeight, setJetHeight] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let gameLoop;
    if (isGameRunning) {
      gameLoop = setInterval(() => {
        setJetHeight((prevHeight) => prevHeight + 1);
        setMoney((prevMoney) => prevMoney + jetHeight);

        // Random chance of crashing
        if (Math.random() < 0.02) {
          endGame(true);
        }
      }, 100);
    }

    return () => clearInterval(gameLoop);
  }, [isGameRunning, jetHeight]);

  const startGame = () => {
    setMoney(0);
    setJetHeight(0);
    setIsGameRunning(true);
    setGameOver(false);
  };

  const stopGame = () => {
    endGame(false);
  };

  const endGame = (crashed) => {
    setIsGameRunning(false);
    setGameOver(true);
    if (crashed) {
      setMoney(0);
    }
  };

  return (
    <div>
      <h1>Jet Prediction Game</h1>
      <p>Money: ${money}</p>
      <p>Jet Height: {jetHeight}</p>
      {!isGameRunning && !gameOver && (
        <button onClick={startGame}>Start Game</button>
      )}
      {isGameRunning && (
        <button onClick={stopGame}>Cash Out</button>
      )}
      {gameOver && (
        <div>
          <p>Game Over! {money > 0 ? `You won $${money}!` : 'The jet crashed!'}</p>
          <button onClick={startGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default JetGame;