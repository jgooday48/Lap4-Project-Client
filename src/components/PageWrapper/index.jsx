import { React, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {

  const [ guide, setGuide ] = useState(false)
  const [ tourist, setTourist] = useState(false)
  const [ welcome, setWelcome ] = useState(true)

  // Need to implement ffunctionality when backendd is completed
  
  return (
    <>
    {welcome && (
      <div className='welcomeWrapper'>
      <header>
      <nav>
        <section className='links'>
          <NavLink to="/touristloginpage">Login</NavLink>
        </section>
      </nav>
    </header>

    <Outlet/>
      </div>)}

    {tourist && (
      <div className='touristWrapper'>
      <header>
      <nav>
        <section className='links'>
          <NavLink to="/touristhomepage">Home</NavLink>
          <NavLink to="/touristguidepage">Your guides</NavLink>
        </section>
      </nav>
    </header>

    <Outlet/>
    </div>)}

    {guide && (
      <div className='touristWrapper'>
      <header>
      <nav>
        <section className='links'>
          <NavLink to="/guidehomepage">Home</NavLink>
          <NavLink to="/guideprofilepage">Your profile</NavLink>
        </section>
      </nav>
    </header>

    <Outlet/>
    </div>
    )}

    <footer id = "footer">
      <p> Copyright 2024 </p>

      </footer>
    </>
  )
}

export default PageWrapper
