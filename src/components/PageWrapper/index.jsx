import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {
  const [guide, setGuide] = useState(false);
  const [tourist, setTourist] = useState(true);
  const [welcome, setWelcome] = useState(false);

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
          <header>
            <nav id="nav">
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
                    <NavLink to="/activity">Activity</NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <NavLink to="/touristguidepage">Guide</NavLink>
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