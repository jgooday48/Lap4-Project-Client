import React from 'react'
import { TouristLoginForm } from '../../components'
import { Link, useNavigate } from 'react-router-dom'


const TouristLoginPage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/touristsignuppage');
      };
  return (
    <>
    <div id="register-page">
        <TouristLoginForm/>
        <button className='btn' onClick={handleClick}>No account?</button>
        </div>
    </>
  )
}

export default TouristLoginPage
