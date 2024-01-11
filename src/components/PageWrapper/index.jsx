import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { useTourist } from '../../contexts/touristContext';
import { useGuide } from '../../contexts/guideContext';
import { useWelcome } from '../../contexts/welcomeContext';

const PageWrapper = () => {

  const { tourist, setTourist } = useTourist(); 
  const { guide, setGuide } = useGuide();
  const { welcome, setWelcome } = useWelcome();

  // const handleTouristLogin = () => {
  //   setTourist(true);
  //   setWelcome(false);
  //   setGuide(false);
  // };

  // const handleGuideLogin = () => {
  //   setGuide(true);
  //   setWelcome(false);
  //   setTourist(false);
  // };

  return (
    <>
      {welcome && (
        <div className='welcomeWrapper'>
          <header className= "tourist-header">
            <nav role="navbar" id="tourist-navbar">
              <section className='nav-link'>
                <NavLink to="/touristloginpage">Login</NavLink>
              </section>
            </nav>
          </header>

          <Outlet />
        </div>
      )}

      {tourist && (
        <>
        <div className='touristWrapper'>
            <header className='tourist-header'>
            <span className='brand'>TravelGuide</span>
              <nav id="tourist-navbar">
                <section className='links'>
                  <NavLink to="/touristhomepage">Home</NavLink>
                  <NavLink to="/touristguidepage">Your guides</NavLink>
                  <NavLink to="/activity">Activity</NavLink>
                  <NavLink to="/chat">Chat</NavLink>
                  <NavLink to="/guide">Guide</NavLink>
                  <NavLink to="/logout">Logout</NavLink>
                </section>
              </nav>
            </header>
          </div>
          <Outlet />
        </>
      )}

  {/* {tourist && (
        <>
          <div className='touristWrapper'>
            <div id="tourist-header">
              <header>
                <nav>
                  <section className='links'>
                    <NavLink to="/touristhomepage">Home</NavLink>
                    <NavLink to="/touristguidepage">Your guides</NavLink>
                    <NavLink to="/activity">Activity</NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <NavLink to="/guide">Guide</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                  </section>
                </nav>
              </header>
            </div>

            <Outlet />
          </div>
        </>
      )} */}


      {guide && (
        <div className='touristWrapper'>
          <header>
            <nav>
              <section className='nav-link'>
                <NavLink to="/guidehomepage">Home</NavLink>
                <NavLink to="/guideprofilepage">Your profile</NavLink>
              </section>
            </nav>
          </header>

          <Outlet />
        </div>
      )}

      <footer id="footer">
        <p> Copyright 2024 </p>
      </footer>
    </>
  );
};

export default PageWrapper;
