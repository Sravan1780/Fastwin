import React, { useState, useEffect } from 'react';

function Balance({ amount, colorSet,number, randomOut, bettingAmt,time ,gameid}) {
  const [amt, setAmt] = useState(amount);

  useEffect(() => {
    const resultAmount = () => {
      let isWin = false;
      if (bettingAmt >= 10) {
        if (colorSet === 'red' && randomOut % 2 === 0) {
          isWin = true;
        } else if (colorSet === 'green' && randomOut % 2 === 1) {
          isWin = true;
        }
      }
      if (number !== 0) {
        setAmt((prev) => prev + (5 * bettingAmt));
      } else {
        if (isWin && bettingAmt >= 10) {
          setAmt((prev) => prev + bettingAmt);
        } else if(bettingAmt>=10) {
          setAmt((prev) => prev - bettingAmt);
        }
      }
    };
    resultAmount();
  }, [randomOut]);

  const timerStyle = {
    fontSize: '35px',
  }

  // Get today's date
  const today = new Date();

  // Get individual components of the date
  const day = String(today.getDate()).padStart(2, '0'); // Ensure day is two digits
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
  const year = today.getFullYear();

  // Format date in different styles
  const formattedDate2 = `${year}${month}${day}`; // YYYY-MM-DD


  return (
    <div className="bal">
      <div>
        <p>Game id : { `${formattedDate2}${gameid}`}</p>
        <label>Balance: <span id="amount1">{amt}</span></label>
      </div>
      <h2 style={timerStyle}>{ time}</h2>
    </div>
  );
}

export default Balance;