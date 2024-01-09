import React from 'react'
import { TouristLoginForm } from '../../components'
import { Link } from 'react-router-dom'

const TouristLoginPage = () => {
  return (
    <>
        <TouristLoginForm/>
        <Link to='/signup'><button className='signupBtn'>No account?</button></Link>
    </>
  )
}

export default TouristLoginPage
