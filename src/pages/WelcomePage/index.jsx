import React from 'react'
import { useNavigate } from "react-router-dom"

const WelcomePage = () => {

    const navigate = useNavigate()

  return (
    <div className="homepage-container">
        <img className="image-container" src="/src/assets/backpacker.jpeg"></img>
        <div className="overlay">
        <div className='title'>
            <h1 role="title" aria-level="1">Find a travel guide</h1>
        </div>
        <div className='description'>
            <h2 role="description" aria-level="2">Making travelling solo relaxing and enjoyable</h2>
        </div>
        <button id="login" onClick={navigate("/touristsignuppage")} className="btn">Join now!</button>
        </div>
    </div>
  )
}

export default WelcomePage
