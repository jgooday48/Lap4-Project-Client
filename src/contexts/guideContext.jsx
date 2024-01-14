import React, { useState, useContext, createContext } from "react";

const GuideContext = createContext();

export const GuideProvider = ({ children }) => {

    const [guideemail, setGuideEmail ] = useState('')
    const [guidepassword, setGuidePassword ] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [Loading, setLoading] = useState(null)
    const [ guide, setGuide ] = useState(false)
    const [ guideaccess, setGuideAccess ] = useState();
    const [ guiderefresh, setGuideRefresh ] = useState();
    const [ guideusername, setGuideUsername ] = useState('');
    const [ guidename, setGuideName ] = useState('');
   

    return (
        <GuideContext.Provider value={{ 
            errorMessage, setErrorMessage, guidepassword, setGuidePassword, guideemail, setGuideEmail, guide, setGuide, Loading, setLoading, guideaccess, setGuideAccess, guiderefresh, setGuideRefresh, guideusername, setGuideUsername, guidename, setGuideName
         }}>
            {children}
        </GuideContext.Provider>
    );
};

export const useGuide = () => useContext(GuideContext);
