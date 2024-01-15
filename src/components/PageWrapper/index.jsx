import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { useTourist } from '../../contexts/touristContext';
import { useGuide } from '../../contexts/guideContext';
import { useWelcome } from '../../contexts/welcomeContext';

const PageWrapper = () => {

  const { tourist, setTourist } = useTourist(); 
  const { guide, setGuide } = useGuide();
  const { welcome, setWelcome } = useWelcome();


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
              <div className='tourist-nav'>
                <nav id="link-navbar">
                  <section className='links'>
                    <NavLink to="/touristhomepage">Home</NavLink>
                    <NavLink to="/activity">Plans</NavLink>
                    <NavLink to="/touristguidepage">WatchList</NavLink>
                    <NavLink to="/livechat">Chat</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <section className='logout-button'>
                    <NavLink to="/logout">Logout</NavLink>
                    </section>
                  </section>
                </nav>
              </div>
            </header>
          </div>
          <Outlet />
        </>
      )}


      {guide && (
        <>
          <div className='touristWrapper'>
            <header className='tourist-header'>
              <span className='brand'>TravelGuide</span>
              <div className='tourist-nav'>
                <nav id="link-navbar">
                  <section className='links'>
                    <NavLink to="/guidehomepage">Home</NavLink>
                    <NavLink to="/activity">Plans</NavLink>
                    <NavLink to="/touristguidepage">WatchList</NavLink>
                    <NavLink to="/livechat">Chat</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                  </section>
                  <section className='logout-button'>
                    <NavLink to="/logout">Logout</NavLink>
                  </section>
                </nav>
              </div>
            </header>
          </div>

          <Outlet />
        </>
      )}

      <footer id="footer">
        <p> Copyright 2024 </p>
      </footer>
    </>
  );
};

export default PageWrapper;
