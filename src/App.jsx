import { React, useState }from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";


import * as Pages from './pages'

import { PageWrapper, TouristProtectedRoute, GuideProtectedRoute, ProtectedRoute } from './components';
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

                <Route
                  path="/touristhomepage"
                  element={
                    <TouristProtectedRoute>
                      <Pages.TouristHomePage />
                    </TouristProtectedRoute>
                  }
                />
                <Route path="/touristloginpage" element={<Pages.TouristLoginPage />} />
                <Route path="/touristsignuppage" element={<Pages.TouristSignUpPage />} />

                <Route path="/touristguidepage">
                  <Route index element={
                    <TouristProtectedRoute>
                  <Pages.TouristGuidePage />
                  </TouristProtectedRoute >} />
                  <Route path=":id" element={
                    <TouristProtectedRoute>
                  <Pages.IndividualGuidePage />
                  </TouristProtectedRoute>} />
                </Route>
                
                <Route path="/guideprofilepage" element={<Pages.GuideProfilePage/>}/>
                <Route path="/guidehomepage" element={
                  <GuideProtectedRoute>
                <Pages.GuideHomePage />
                </GuideProtectedRoute>} />
                <Route path="/guideloginpage" element={
                  
                <Pages.GuideLoginPage />
                } />
                {/* <Route path="/guideprofilepage" element={<Pages.GuideProfilePage />} /> */}

{/* //                 <Route path="/places/:search" element={<Pages.TouristAllPlacesPage />} />
//                 <Route path="/places/placeId/:id" element={<Pages.TouristGuidePage />} />
//                 <Route path="/livechat" element={<Pages.WebSocketPage />} />
//                 <Route path="/createPlan/:guideId" element={<Pages.CreatePlanPage />} />
//                 <Route path="/plans" element={<Pages.TouristPlansPage />} />
//                 <Route path="/plans/:id" element={<Pages.TouristEachPlanPage />} />
//                 <Route path="/watchList" element={<Pages.TouristWatchListPage/>}/> */}

                <Route path="/places/:search" element={
                  <TouristProtectedRoute>
                <Pages.TouristAllPlacesPage />
                </TouristProtectedRoute>} />
                <Route path="/places/placeId/:id" element={
                  <TouristProtectedRoute>
                <Pages.TouristGuidePage />
                </TouristProtectedRoute>} />
                <Route path="/livechat" element={
                  <ProtectedRoute>
                <Pages.WebSocketPage/>
                </ProtectedRoute>}/>
                <Route path="/createPlan/:guideId" element={<Pages.CreatePlanPage/>}/>



              </Route>
            </Routes>
          </TouristProvider>
        </GuideProvider>
      </WelcomeProvider>
    </>
  );
}

export default App;
