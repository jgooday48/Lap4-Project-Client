import React, { useState, useContext, createContext } from "react";

const TouristContext = createContext();

export const TouristProvider = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState();
    const [ touristusername, setTouristUsername ] = useState();
    const [ touristpassword, setTouristPassword ] = useState();
    const [ touristname, setTouristName ] = useState();
    const [ touristemail, setTouristEmail ] = useState(); 
    const [ tourist, setTourist] = useState(false); 
    const [ touristaccess, setTouristAccess ] = useState();
    const [ touristrefresh, setTouristRefresh ] = useState();


    return (
        <TouristContext.Provider value={{ 
            errorMessage, setErrorMessage, touristusername, setTouristUsername, touristpassword, setTouristPassword, touristname, setTouristName, touristemail, setTouristEmail, tourist, setTourist, touristaccess, setTouristAccess, touristrefresh, setTouristRefresh
         }}>
            {children}
        </TouristContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTourist = () => useContext(TouristContext);
