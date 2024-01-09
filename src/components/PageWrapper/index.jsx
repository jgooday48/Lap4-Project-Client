import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <>
    <header id="header">
      <nav id="nav">
        <NavLink className="nav-link" to="/touristloginpage">Login</NavLink>


      </nav>
    </header>

    <Outlet />

    <footer id = "footer">
      <div>
      <h3> TRAVEL APP</h3>
      <p> Copyright 2024 </p>
      </div>

      </footer>

    </>
  )
}

export default PageWrapper
