import React from 'react'
import { useNavigate } from "react-router-dom"

const WelcomePage = () => {

    const navigate = useNavigate()

  return (
    <div className="homepage">
        <div className='title'>
            <h1>Find a travel guide</h1>
        </div>
        <div className='description'>
            <h2>Making travelling solo relaxing and enjoyable</h2>
        </div>
        <button id="login" onClick={navigate("/touristsignup")} className="btn">Join now!</button>
    </div>
  )
}

export default WelcomePage
