import React, { useContext } from 'react';
import './Styles/FastwinHomePage.css';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

// import { BalanceProvider, useBalance } from '../contexts/Game';

// Import images
import homeScreenshot from '../assets/images/home_screenshot.jpg';
import inviteIcon from '../assets/images/invite-icon-20.jpg';
import batteryPower from '../assets/images/017_292_battery_power_charge_lightning-1024.webp';
import meIcon from '../assets/images/OIP.jpg';
import iplImage from '../assets/images/ipl_evn_x0.png';
import fastParity from '../assets/images/fast-parity.jpg';
import headTail from '../assets/images/head_tail_03.png';
import parity from '../assets/images/parity.jpg';
import dice from '../assets/images/dice.jpg';
import anb from '../assets/images/AnB.jpg';
import wheel from '../assets/images/wheel.png';
import mineSweeper from '../assets/images/MineSweeper.png';
import ludo from '../assets/images/ludo.png';

const FastwinHomePage = () => {

  const { balance } = useContext(ThemeContext);
  
  const handleWithdrawClick = () => {
    alert('Withdraw button clicked');
  };

  const handleRechargeClick = () => {
    alert('Recharge button clicked');
  };

  const handleCloseClick = () => {
    window.close();
  };

  return (
    <div className="HomeContainer">
      <div className="nav-bar" id="nav-bar">
        <div>
          <img src={homeScreenshot} alt="home" />
          <div className="nav-text">home</div>
        </div>
        <div>
          <img src={inviteIcon} alt="invite" />
          <div className="nav-text">invite</div>
        </div>
        <div>
          <img src={batteryPower} alt="recharge" />
          <div className="nav-text">recharge</div>
        </div>
        <div>
          <img src={meIcon} alt="Me" />
          <div className="nav-text">Me</div>
        </div>
      </div>

      <div>
        <h2 style={{textAlign:"center"}}>FastBetting</h2>
      </div>

      <div className="top-content">
        <div>
          <h3> Balance : $ { balance}</h3>
        </div>
        <div className="buttons">
          <button className="withdraw" onClick={handleWithdrawClick}>Withdraw</button>
          <button className="recharge" onClick={handleRechargeClick}>Recharge</button>
        </div>
      </div>

      <div className="ipl">
        <img className="ipl-img" src={iplImage} alt="IPL" />
      </div>

      <div className="img-container">
        <NavLink to="/fastParity" className="game-img">
          <img src={fastParity} alt="Fast Parity" />
        </NavLink>
        <NavLink to="/game" className="game-img">
          <img src={headTail} alt="Fast Parity" />
        </NavLink>
        <NavLink to="/game" className="game-img">
          <img src={parity} alt="Fast Parity" />
        </NavLink>
        <NavLink to="/game" className="game-img">
          <img src={dice} alt="Fast Parity" />
        </NavLink>
        <NavLink to="/game" className="game-img">
          <img src={anb} alt="Fast Parity" />
        </NavLink>
        <NavLink to="/game" className="game-img">
          <img src={wheel} alt="Fast Parity" />
        </NavLink>
        <NavLink to="/game" className="game-img">
          <img src={mineSweeper} alt="Fast Parity" />
        </NavLink>
        <NavLink to="/game" className="game-img">
          <img src={ludo} alt="Fast Parity" />
        </NavLink>
        <div className="starter">
          <button className="withdraw" onClick={handleCloseClick}>Close</button>
        </div>
      </div>
      
    </div>
  );
};

export default FastwinHomePage;
