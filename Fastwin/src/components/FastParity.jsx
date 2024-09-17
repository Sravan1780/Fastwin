import React, { useEffect, useState, useRef, useContext, useLayoutEffect } from 'react';
import './fastParity.css';
import Header from './Details/Header';
import Balance from './Details/Balance';
import Timer from './Details/Timer';
import Result from './Details/Result';
import ColorSelection from './Details/ColorSelection';
import MoneyEnterArea from './Details/MoneyEnterArea';
import Records from './Details/Records';
import NumberBet from './Details/NumberBet';
import { ThemeContext } from '../contexts/ThemeContext';

function FastParity() {
    const { balance,setBalance } = useContext(ThemeContext);

    // const [balance, setBalance] = useState(100);
    const [time, setTime] = useState(20);
    const [history, setHistory] = useState([]);
    const [showDiv, setShowDiv] = useState(false);
    const [inputMoney, setInputMoney] = useState(0);
    const [temp, setTemp] = useState(false);
    const [para, setPara] = useState(null);
    const [entry, setEntry] = useState(false);
    const [color, setColor] = useState('');
    const [gameId, setGameId] = useState(1);
    const [counter, setCounter] = useState(1);
    const [number,setNumber] = useState(0);

    const tempColorRef = useRef("");
    const tempMoney = useRef(0);
    const randomOne = useRef(0);
    const resultProcessed = useRef(false); // New ref to ensure handleResult is called once

    const buttonStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '93%',
        textAlign: 'center',
        padding: '10px',
        margin: '5px',
        backgroundColor: '#fff',
        display: showDiv ? 'block' : 'none',
    };

    const resultPara = {
        position: 'absolute',
        color: 'white',
        left: '42%',
        top: '55%',
        display: temp ? 'block' : 'none',
    };

    const stylePara = {
        textAlign: 'center',
        background: 'black',
        fontSize: '14px',
        padding: '5px',
    };

    useLayoutEffect(() => {
        const timeInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 1) {
                    if (!resultProcessed.current) {
                        setGameId((prev) => prev + 1);
                        handleResult();
                        resultProcessed.current = true;
                    }
                    return 20;
                }
                if (prevTime === 20) {
                    tempColorRef.current = "";
                    tempMoney.current = 0;
                    randomOne.current = 0;
                    setColor("");
                    setInputMoney(0);
                    setEntry(false);
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timeInterval);
    }, [time]);

    useEffect(() => {
        if (time === 20) {
            resultProcessed.current = false; // Reset flag when the timer resets
        }
    }, [time]);

    const handleConfirm = () => {
        setShowDiv(false);
        setTemp(true);
        setTimeout(() => {
            setTemp(false);
        }, 3000);
        if (inputMoney < 10) {
            setPara(<p style={stylePara}>Low balance</p>);
        } else if (inputMoney > balance) {
            setPara(<p style={stylePara}>Not sufficient balance</p>);
        } else {
            setBalance(balance - inputMoney);
            alert(balance - inputMoney);
            setPara(<p style={stylePara}>Success</p>);
        }
    };

    const handleColorSelect = (col) => {
        if (!entry && time > 10) {
            tempColorRef.current = col;
            setColor(col);
            setShowDiv(true);
            console.log(`temp : ${tempColorRef.current}`);
            setEntry(true);
        }
    };
    const handleNumberSelect = (num) => {
        if (!entry && time > 10) {
            tempColorRef.current = col;
            setNumber(num);
            setShowDiv(true);
            console.log(`temp : ${tempColorRef.current}`);
            setEntry(true);
        }
    };

    useEffect(() => {
        tempMoney.current = inputMoney;
    }, [inputMoney]);

    const handleResult = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        randomOne.current = randomNum;

        console.log("col :", tempColorRef.current);
        console.log("Random number :", randomOne.current);
        console.log("money ref :", inputMoney);

        const money = inputMoney;
        console.log("money :", money);
        
        setHistory((prevHistory) => [
            ...prevHistory,
            { number: randomNum, color: randomNum % 2 === 0 ? 'red' : 'green' }
        ]);
        
        setTemp(true);
        setTimeout(() => {
            setTemp(false);
        }, 3000);
        
        let isWin = false;
        
        if (inputMoney>= 10 && tempColorRef.current > 0 && tempColorRef.current < 11) {
            setBalance(balance + (money*5));
            setPara(<p style={stylePara}>Win {randomNum} - choose: {tempColorRef.current}</p>);
            return;
        }

        if (inputMoney >= 10) {
            if (tempColorRef.current === 'red' && randomNum % 2 === 0) {
                isWin = true;
            } else if (tempColorRef.current === 'green' && randomNum % 2 === 1) {
                isWin = true;
            }
        }

        if (isWin && inputMoney >= 10) {
            setBalance(balance + money);
            setPara(<p style={stylePara}>Win {randomNum} - choose: {tempColorRef.current}</p>);
        } else if (inputMoney >= 10) {
            setBalance(balance - money);
            setPara(<p style={stylePara}>Loss {randomNum} - choose: {tempColorRef.current}</p>);
        }
    };

    return (
        <div className="container">
            <Header />
            <Balance amount={balance} colorSet={color} number={ number} randomOut={randomOne.current} bettingAmt={inputMoney} time={time} gameid={gameId}  />
            <ColorSelection onSelectColor={handleColorSelect} />
            {/* <NumberBet onSelectNum={handleNumberSelect}/> */}
            <div style={resultPara}>{para}</div>
            <div className="record">Records</div>
            <Records history={history} random={randomOne.current} gameid={ gameId} counter={ counter}/>
            {color && (
                <div style={{ ...buttonStyle, border: `2px solid ${color}` }}>
                    <p>Enter the betting amount </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex' }}>
                            <input type="number" placeholder='enter money' onChange={(e) => setInputMoney(Number(e.target.value))} />
                            <button onClick={handleConfirm} style={{ margin: '0px', borderRadius: '1px', color: 'white', backgroundColor: 'rgba(0, 128, 255, 0.909)' }}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FastParity;
