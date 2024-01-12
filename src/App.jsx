import { React, useState }from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";


import * as Pages from './pages'

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

                <Route index element={<Pages.WelcomePage />} />
                <Route path="/touristhomepage" element={<Pages.TouristHomePage />} />
                <Route path="/touristloginpage" element={<Pages.TouristLoginPage />} />
                <Route path="/touristsignuppage" element={<Pages.TouristSignUpPage />} />


                <Route path="/touristguidepage">
                  <Route index element={<Pages.TouristGuidePage />} />
                  <Route path=":id" element={<Pages.IndividualGuidePage />} />
                </Route>

                <Route path="/guidehomepage" element={<Pages.GuideHomePage />} />
                <Route path="/guideloginpage" element={<Pages.GuideLoginPage />} />
                {/* <Route path="/guideprofilepage" element={<Pages.GuideProfilePage />} /> */}
                <Route path="/places/:search" element={<Pages.TouristAllPlacesPage />} />
                <Route path="/places/placeId/:id" element={<Pages.TouristGuidePage />} />
                <Route path="/livechat" element={<Pages.WebSocketPage/>}/>


              </Route>
            </Routes>
          </TouristProvider>
        </GuideProvider>
      </WelcomeProvider>
    </>
  );
}

export default App;
