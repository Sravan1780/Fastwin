import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Login.css';

const Login = () => {
  const handleLoginClick = () => {
    window.location.href = 'HomePage.html'; // Simulate navigation to the home page
  };

  const handleCreateAccountClick = () => {
    window.location.href = 'SignUp.html'; // Simulate navigation to the sign-up page
  };

  const handleForgotPasswordClick = () => {
    alert('Forgotten password clicked');
  };

  return (
    <div className="Login-container"> 
      <div className="login">Login</div>
      <div className="input-tags">
        <input style={{border:"none" ,width: "80%"}} type="number" placeholder="Enter phone Number" />
        <input style={{border:"none",width: "80%"}} type="password" placeholder="Enter password" />
      </div>
      <div className="log-btn">
        <NavLink to="/homePage">
          <button type='submit' style={{padding:"10px"}} className="login-btn">Login</button>
        </NavLink>
      </div>
      <div className="buttons">
        <button style={{padding:"10px"}} onClick={handleCreateAccountClick}>Create account</button>
        <button style={{padding:"10px"}} onClick={handleForgotPasswordClick}>Forgotten password?</button>
      </div>
    </div>
  );
};

export default Login;
