import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { useTourist } from '../../contexts/touristContext';
import { useGuide } from '../../contexts/guideContext';
import { useWelcome } from '../../contexts/welcomeContext';

const PageWrapper = () => {
  const { tourist, setTourist } = useTourist();
  const { guide, setGuide } = useGuide();
  const { welcome, setWelcome } = useWelcome();

  const handleTouristLogout = () => {
    sessionStorage.removeItem('touristId');
    sessionStorage.removeItem('touristUsername');
    sessionStorage.removeItem('touristEmail');
    sessionStorage.removeItem('tourist_token');
    sessionStorage.removeItem('tourist_refresh');
    setTourist(false);
    setWelcome(true);
  };

  const handleGuideLogout = () => {
    sessionStorage.removeItem('guide_id');
    sessionStorage.removeItem('guide_Username');
    sessionStorage.removeItem('guide_Email');
    sessionStorage.removeItem('guide_token');
    sessionStorage.removeItem('guide_refresh');
    setGuide(false);
    setWelcome(true);
  };

//   const renderWelcomeSection = () => (
//     <div className='welcomeWrapper'>
//       <header className='tourist-header'>
//         <nav role='navbar' id='tourist-navbar'>
//           <section className='nav-link'>
//             <NavLink to='/touristloginpage'>Login</NavLink>
//           </section>
//         </nav>
//       </header>
//       <Outlet />
//     </div>
//   );

//   const renderTouristSection = () => (
//     <>
//       <div className='touristWrapper'>
//         <header className='tourist-header'>
//           <span className='brand'>TravelGuide</span>
//           <nav id='link-navbar'>
//             <section className='links'>
//               <NavLink to='/touristhomepage'>Home</NavLink>
//               <NavLink to='/plans'>Plans</NavLink>
//               <NavLink to='/watchList'>WatchList</NavLink>
//               <NavLink to='/livechat'>Chat</NavLink>
//               <NavLink to='/profile'>Profile</NavLink>
//               <section className='logout-button'>
//                 <NavLink to='/' onClick={handleTouristLogout}>
//                   Logout
//                 </NavLink>
//               </section>
//             </section>
//           </nav>
//         </header>
//       </div>
//       <Outlet />
//     </>
//   );

//   const renderGuideSection = () => (
//     <>
//       <div className='touristWrapper'>
//         <header className='tourist-header'>
//           <span className='brand'>TravelGuide</span>
//             <nav id='link-navbar'>
//               <section className='links'>
//                 <NavLink to='/guidehomepage'>Home</NavLink>
//                 <NavLink to='/guideprofilepage'>Profile</NavLink>
//                 <NavLink to='/livechat'>Chat</NavLink>
//                 <section className='logout-button'>
//                   <NavLink to='/' onClick={handleGuideLogout}>
//                     Logout
//                   </NavLink>
//                 </section>
//               </section>
//             </nav>
//         </header>
//       </div>
//       <Outlet />
//     </>
//   );
// }

  return (
    <>
      {welcome && (
        <>
        <div className='welcomeWrapper'>
        <header className= "tourist-header">
        <nav role="navbar" id="tourist-navbar">
        <section className='nav-link'>
        <NavLink to="/touristloginpage">Login</NavLink>
        </section>
        </nav>
        </header>
        </div>
        <Outlet />
        <footer id='footer'>
        <p>Copyright 2024</p>
        </footer>
        </>
      )}
    
      
      {sessionStorage.getItem("tourist_token") && (
        <>
          <div className='touristWrapper'>
            <header className='tourist-header'>
              <span className='brand'>TravelGuide</span>
              <div className='tourist-nav'>
                <nav id="link-navbar">
                  <section className='links'>
                    <NavLink to="/touristhomepage">Home</NavLink>
                    <NavLink to="/touristplanspage">Plans</NavLink>
                    <NavLink to="/touristwatchlistpage">WatchList</NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <section className='logout-button'>
                    <NavLink to="/" onClick={handleTouristLogout}>Logout</NavLink>
                    </section>
                  </section>
                </nav>
              </div>
            </header>
          </div>
          <Outlet />
          <footer id='footer'>
        <p>Copyright 2024</p>
        </footer>
        </>
      )}
      
      {sessionStorage.getItem("guide_token") && (
        <>
      <div className='touristWrapper'>
        <header className='tourist-header'>
          <span className='brand'>TravelGuide</span>
          <div className="tourist-nav">
            <nav id="link-navbar">
              <section className='links'>
                <NavLink to="/guidehomepage">Home</NavLink>
                <NavLink to="/guideprofilepage">Your profile</NavLink>
                <NavLink to="/chat">Chat</NavLink>
                <section className='logout-button'>
                    <NavLink to="/" onClick={handleGuideLogout}>Logout</NavLink>

              </section>
              </section>
              
            </nav>
            </div>
          </header>

          
        </div>
        <Outlet />
        <footer id='footer'>
        <p>Copyright 2024</p>
        </footer>
        
        </>
      )}        
      
      </>
  )
      
}

export default PageWrapper
