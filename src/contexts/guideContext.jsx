import React, { useState, useContext, createContext } from "react";

const GuideContext = createContext();

export const GuideProvider = ({ children }) => {

    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(null)
    const [ guide, setGuide ] = useState(false)
   

    return (
        <GuideContext.Provider value={{ 
            error, setError, password, setPassword, email, setEmail, guide, setGuide, Loading, setLoading
         }}>
            {children}
        </GuideContext.Provider>
    );
};

export const useGuide = () => useContext(GuideContext);
