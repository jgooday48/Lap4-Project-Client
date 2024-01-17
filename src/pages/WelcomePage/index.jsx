import React from 'react'
import { useNavigate } from "react-router-dom"
import "./WelcomePage.css"

const WelcomePage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/touristsignuppage');
      };

  return (
    <div className="homepage-container">
        <img id="image-container" src="/src/assets/backpacker.jpeg"></img>
        <div className="overlay">
        <div className='title'>
            <h1 role="title" aria-level="1">TravelGuide</h1>
        </div>
        <div className='description'>
            <h2 role="description" aria-level="2">Making travelling solo relaxing and enjoyable</h2>
        </div>
        <button onClick={handleClick} id="btn">Click here to join now!</button>
        </div>
    </div>
  )
}

export default WelcomePage
