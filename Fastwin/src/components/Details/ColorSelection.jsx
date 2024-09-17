import React, { useState } from 'react';

function ColorSelection({ onSelectColor }) {
    const [color, setColor] = useState("");

    const handleColorSelect = (col) => {
        setColor(col);
        onSelectColor(col); // Call the callback function with the selected color
    };

    return (
        <div style={{textAlign:"center"}}>
            <div>
                <button className="red" onClick={() => handleColorSelect("red")}>Red</button>
                <button className="green" onClick={() => handleColorSelect("green")}>Green</button>
            </div>
            <div className='numbers'>
                <button onClick={() => handleColorSelect(1)} >1</button>
                <button onClick={() => handleColorSelect(2)} >2</button>
                <button onClick={() => handleColorSelect(3)} >3</button>
                <button onClick={() => handleColorSelect(4)} >4</button>
                <button onClick={() => handleColorSelect(5)} >5</button>
            </div>
            <div className='numbers'>
                <button onClick={() => handleColorSelect(6)} >6</button>
                <button onClick={() => handleColorSelect(7)} >7</button>
                <button onClick={() => handleColorSelect(8)} >8</button>
                <button onClick={() => handleColorSelect(9)} >9</button>
                <button onClick={() => handleColorSelect(10)} >10</button>
            </div>
        </div>
    );
}

export default ColorSelection;
