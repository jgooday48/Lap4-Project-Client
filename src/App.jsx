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

                <Route path="/touristwatchlistpage" element={
                  <TouristProtectedRoute>
                    <Pages.TouristWatchListPage />
                  </TouristProtectedRoute>
                }
                />
                 <Route path="/touristplanspage" element={
                  <TouristProtectedRoute>
                    <Pages.TouristPlansPage />
                  </TouristProtectedRoute>
                }
                />
                
                <Route path="/guideprofilepage" element={<Pages.GuideProfilePage/>}/>

                <Route path="/guidehomepage" element={
                  <GuideProtectedRoute>
                <Pages.GuideHomePage />
                </GuideProtectedRoute>} />
                <Route path="/guideloginpage" element={
                  
                <Pages.GuideLoginPage />
                } />

                <Route path="/plans/:id" element={<Pages.TouristEachPlanPage/>}/>

                <Route path="/guideprofilepage" element={<Pages.GuideProfilePage />} />
                <Route path="/guidePlans" element={<Pages.GuidePlansPage />} />
                <Route path="/guidePlans/:id" element={<Pages.GuideEachPlanPage/>}/>

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
                
                <Route path="/createPlan/:guideId" element={
                  //<ProtectedRoute>
                <Pages.CreatePlanPage/>
                //</ProtectedRoute>
              }
                />

                <Route path="/chat" element={
                <Pages.Chat/>}/>

              </Route>
            </Routes>
          </TouristProvider>
        </GuideProvider>
      </WelcomeProvider>
    </>
  );
}

export default App;
