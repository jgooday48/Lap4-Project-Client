import React from 'react'
import { TouristLoginForm } from '../../components'
import { Link, Outlet } from 'react-router-dom'

const TouristLoginPage = () => {
  return (
    <>
        <TouristLoginForm/>
        <Link to='/touristsignuppage'><button className='signupBtn'>No account?</button></Link>
        <Link to='/guideloginpage'><button className='signupBtn'>Are you a guide?</button></Link>
        <Outlet/>
    </>
  )
}

export default TouristLoginPage
