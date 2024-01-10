import React, { useState, useContext, createContext } from "react";

const TouristContext = createContext();

export const TouristProvider = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState();
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState(); 
    const [ tourist, setTourist] = useState(false); 

    return (
        <TouristContext.Provider value={{ 
            errorMessage, setErrorMessage, username, setUsername, password, setPassword, name, setName, email, setEmail, tourist, setTourist
         }}>
            {children}
        </TouristContext.Provider>
    );
};

export const useTourist = () => useContext(TouristContext);
