import { React, useState }from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

import { WelcomePage, TouristHomePage, TouristLoginPage, TouristSignUpPage, TouristGuidePage, GuideProfilePage, GuideHomePage, GuideLoginPage, WebSocketPage } from './pages';
import { PageWrapper } from './components';

function App() {

  return (
    <>
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
        <Route path="/livechat" element={<WebSocketPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
