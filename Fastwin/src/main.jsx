import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FastwinHomePage from './components/FastwinHomePage';
import Game from './components/Game';
import FastParity from './components/FastParity';
import { ThemeProvider } from './contexts/ThemeContext';

function AppRouter() {
  // const [amount, setAmount] = useState(100); // create a state variable

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homePage" element={<FastwinHomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/game' element={<Game />} />
        <Route path='/fastParity' element={<FastParity />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);