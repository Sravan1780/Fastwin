// src/contexts/ThemeContext.jsx

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(100);

export const ThemeProvider = ({ children }) => {
    const [balance, setBalance] = useState(100);

  return (
    <ThemeContext.Provider value={{ balance,setBalance }}>
      {children}
    </ThemeContext.Provider>
  );
};
