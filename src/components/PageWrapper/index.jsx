import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <>
    <header>
      <nav>


      </nav>
    </header>

    <Outlet />

    <footer id = "footer">
      <p> Copyright 2024 </p>

      </footer>

    </>
  )
}

export default PageWrapper
