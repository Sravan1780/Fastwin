import React from 'react';
import { Link } from 'react-router-dom';
import FastwinHomePage from './components/FastwinHomePage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link> */}
    </div>
  );
}

export default App;
