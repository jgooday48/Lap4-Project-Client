import React from 'react'
import { TouristLoginForm } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { BackButton } from "../../components"


const TouristLoginPage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/touristsignuppage');
      };
  return (
    <>
    <div id="register-page">
        <BackButton />
        <TouristLoginForm/>
        </div>
    </>
  )
}

export default TouristLoginPage
