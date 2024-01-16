import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { useTourist } from '../../contexts/touristContext';
import { useGuide } from '../../contexts/guideContext';
import { useWelcome } from '../../contexts/welcomeContext';

const PageWrapper = () => {

  const { tourist, setTourist } = useTourist(); 
  const { guide, setGuide } = useGuide();
  const { welcome, setWelcome } = useWelcome();

  const handleTouristLogout = () =>{
    localStorage.removeItem("touristId")
    localStorage.removeItem("touristUsername")
    localStorage.removeItem("tourist_token")
    localStorage.removeItem("tourist_refresh")
    setTourist(false)
    setWelcome(true)
  }

  const handleGuideLogout = () =>{
    localStorage.removeItem("guide_id")
    localStorage.removeItem("guide_Username")
    localStorage.removeItem("guide_token")
    localStorage.removeItem("guide_refresh")
    setGuide(false)
    setWelcome(true)
  
  }

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
              <div className='tourist-nav'>
                <nav id="link-navbar">
                  <section className='links'>
                    <NavLink to="/touristhomepage">Home</NavLink>
                    <NavLink to="/plans">Plans</NavLink>
                    <NavLink to="/watchList">WatchList</NavLink>
                    <NavLink to="/livechat">Chat</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <section className='logout-button'>
                    <NavLink to="/" onClick={handleTouristLogout}>Logout</NavLink>
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
          <header className="tourist-header">
          <span className='brand'>TravelGuide</span>
          <div className="tourist-nav">
            <nav id="link-navbar">
              <section className='links'>
                <NavLink to="/guidehomepage">Home</NavLink>
                <NavLink to="/guideprofilepage">Your profile</NavLink>
                <section className='logout-button'>
                    <NavLink to="/" onClick={handleGuideLogout}>Logout</NavLink>
              </section>
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
