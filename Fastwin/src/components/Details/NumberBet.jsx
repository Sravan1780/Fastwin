import React from 'react'

function NumberBet({ onSelectNum }) {
  
  const handleNumber = (col) => {
    onSelectNum(col); 
};
  return (
    <div>
      <div className='numbers'>
        <button onClick={() => handleNumber(1)} >1</button>
        <button onClick={() => handleNumber(2)} >2</button>
        <button onClick={() => handleNumber(3)} >3</button>
        <button onClick={() => handleNumber(4)} >4</button>
        <button onClick={() => handleNumber(5)} >5</button>
      </div>
      <div className='numbers'>
        <button onClick={() => handleNumber(6)} >6</button>
        <button onClick={() => handleNumber(7)} >7</button>
        <button onClick={() => handleNumber(8)} >8</button>
        <button onClick={() => handleNumber(9)} >9</button>
        <button onClick={() => handleNumber(10)} >10</button>
      </div>
    </div>
  )
}

export default NumberBet;