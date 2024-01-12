import React from 'react'
import { useNavigate } from "react-router-dom"

// want to be visible: Clients 
// a Link to your profile 

const GuideHomePage = () => {

  const goTo = useNavigate()

  const handleClick =() =>{
    goTo("/guideprofilepage")

  }
    return (
    <div id="topContainer">
    <div id="headerContainer">
      
        <h1>Welcome back, {/*guidename*/}Share your rich knowledge of your local area</h1>

        <button className="btn" onClick={handleClick}>View Your Profile</button>
      
    </div>

    <div id="view-clients">
      <h1>View All Of Your Clients</h1>
      <button className="btn">View</button>
    </div>


    
  </div>
  )
}

export default GuideHomePage
