import React, { useState, useContext, createContext } from "react";

const WelcomeContext = createContext();

export const WelcomeProvider = ({ children }) => {
    const [welcome, setWelcome] = useState(true)

    return (
        <WelcomeContext.Provider value={{ 
            welcome, setWelcome
         }}>
            {children}
        </WelcomeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWelcome = () => useContext(WelcomeContext);
