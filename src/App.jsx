import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

import { WelcomePage, TouristHomePage, TouristLoginPage, TouristSignUpPage, TouristGuidePage, GuideProfilePage, GuideHomePage, GuideLoginPage } from './pages';
import { PageWrapper } from './components';
import { TouristProvider } from "./contexts/touristContext";
import { GuideProvider } from "./contexts/guideContext";
import { WelcomeProvider } from "./contexts/welcomeContext";


function App() {
  return (
    <>
    <WelcomeProvider>
    <GuideProvider>
    <TouristProvider>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<WelcomePage />} />
          <Route path="/touristhomepage" element={<TouristHomePage />} />
          <Route path="/touristloginpage" element={<TouristLoginPage />} />
          <Route path="/touristsignuppage" element={<TouristSignUpPage />} />
        <Route path="/touristguidepage" element={<TouristGuidePage/>}/>
        <Route path="/guidehomepage" element={<GuideHomePage/>}/>
        <Route path="/guideloginpage" element={<GuideLoginPage/>}/>
        <Route path="/guideprofilepage" element={<GuideProfilePage/>}/>
        </Route>
      </Routes>
      </TouristProvider>
      </GuideProvider>
      </WelcomeProvider>
    </>
  );
}

export default App;
