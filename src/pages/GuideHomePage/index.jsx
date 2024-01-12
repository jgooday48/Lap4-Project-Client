import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'

// want to be visible: Clients 
// a Link to your profile 

const GuideHomePage = () => {

  const [activites, setActivites] = useState([])

  const goTo = useNavigate()

  const handleClick =() =>{
    goTo("/guideprofilepage")

  }
  useEffect(() => {

    const fetchActivites = async () => {
      const res = await axios.get(baseApi + "activities")
      const data = res.data.all_activities
      setActivites(data)
    }

    fetchActivites()
  }, [])

  console.log(activites)

  const displayActivites = () => {
    return activites.map((t, index) => (
      <div key={index}>
        {t.name}
        <br/>
        {t.location}
        <br/>
        {t.description}
      </div>
    ))
  }
  
    return (
    <div id="topContainer">
    <div id="headerContainer">
      
        <h1>Welcome back, {/*guidename*/}Share your rich knowledge of your local area</h1>

        <button className="btn" onClick={handleClick}>View Your Profile</button>
      
    </div>

    {displayActivites()}
    
    <div id="view-clients">
      <h1>View All Of Your Clients</h1>
      <button className="btn">View</button>
    </div>

  </div>
  )
}

export default GuideHomePage
