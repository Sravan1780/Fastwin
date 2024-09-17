import React, { useState } from 'react';

function MoneyEnterArea({ onConfirm }) {
  const [inputValue, setInputValue] = useState('');

  const handleConfirmClick = () => {
    onConfirm(inputValue);
    setInputValue('');
  };

  return (
    <div className="money-enter-area" id="hide-buttons">
      <div id="inputContainer">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="inputField"
        />
      </div>
      <div id="confirm">
        <input
          type="button"
          value="Confirm"
          id="confirmButton"
          onClick={handleConfirmClick}
        />
      </div>
    </div>
  );
}

export default MoneyEnterArea;
