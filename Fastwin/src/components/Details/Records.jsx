import React, { useState } from 'react';

function Records({ history, gameid }) {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div id="color-history">
                {history.map((record, index) => (
                    <div className='recordNumber'>
                        <div
                            key={index}
                            className={`dynamic-div ${record.color}`}
                        >
                            {record.number}
                        </div>
                        <div style={{color:"black"}}>{index+1}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Records;
