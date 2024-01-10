import React, { useState, useContext, createContext } from "react";

const WelcomeContext = createContext();

export const WelcomeProvider = ({ children }) => {
    const [welcome, setWelcome] = useState(false)

    return (
        <WelcomeContext.Provider value={{ 
            welcome, setWelcome
         }}>
            {children}
        </WelcomeContext.Provider>
    );
};

export const useWelcome = () => useContext(WelcomeContext);
