import React from 'react';
import './Styles/SignUp.css';

const SignUp = () => {
  const handleRegisterClick = () => {
    // Handle registration logic here, e.g., form submission, validation, etc.
    window.location.href = 'HomePage.html'; // This simulates the navigation to the home page
  };

  return (
    <div className="container">
      <div className="signup">Sign Up</div>
      <div className="input-tags">
        <input type="number" placeholder="Enter phone Number" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Confirm password" />
      </div>
      <div className="register-btn">
        <button className="register" onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};

export default SignUp;
