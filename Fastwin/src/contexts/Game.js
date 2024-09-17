// import React, { createContext, useContext, useState } from 'react';

// const BalanceContext = createContext({
//     balance: 100,
//     setBalance: () => {},
// });

// export const BalanceProvider = ({ children }) => {
//     const [balance, setBalance] = useState(100);

//     return (
//         <BalanceContext.Provider value={{ balance, setBalance }}>
//             {children}
//         </BalanceContext.Provider>
//     );
// };

// export const useBalance = () => {
//     const context = useContext(BalanceContext);
//     if (!context) {
//         throw new Error('useBalance must be used within a BalanceProvider');
//     }
//     return context;
// };
