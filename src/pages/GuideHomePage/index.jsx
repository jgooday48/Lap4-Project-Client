import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import "./index.css"

// want to be visible: Clients 
// a Link to your profile 

const GuideHomePage = () => {

  const [activites, setActivites] = useState([])
  const [view, setView] = useState(false)
  const [client, setClient] = useState([])

  // This harad code of guide neeeds to be replacde when loggeed in
  const guide = {
    "guide_id": 1,
    "place_id": 1,
            "name": "Guy Dunn",
            "user_type": "GUIDE",
            "username": "guydunn42",
            "email": "guy.dunn@gmail.com",
            "password": "scrypt:32768:8:1$bmV0HHtc0LTvbmgL$6b283bc39df63a9d94341f7ff019e7d45cd9cdc52c2fab113b8f3b1587dae42c7ad9e03966981c9a986c939e3b5a44b652309a24351eb28ca49da0f31f99cab5",
            "filters": [
                "Historical",
                "Outdoor activities"
            ],
            "availible_from": "Sat, 13 Jan 2024 14:24:15 GMT",
            "availible_to": "Sat, 13 Jan 2024 14:24:15 GMT",
            "images": null 
  
  }

  const goTo = useNavigate()

  const handleClick =() =>{
    goTo("/guideprofilepage")
  }

  const handleView = () => {
    if(view === false){
      setView(true)
    } else {
      setView(false)
    }
  }

  useEffect(() => {

    const fetchActivites = async () => {
      const res = await axios.get(baseApi + "activities")
      const data = res.data.all_activities
      setActivites(data)
    }

    const fetchClients = async () => {
      const getClient = await axios.get(baseApi + "tourists")
    const data = getClient.data.all_guides
    setClient(data)
    }

      fetchClients()
      fetchActivites()
  }, [])

  const displayActivites = () => {
    return activites.map((t, index) => (
      <div id='activities' key={index}>
        {t.name}
        <br/>
        {t.location}
        <br/>
        {t.description}
        <br/>
        {t.images}
      </div>
    ))
  }

  const toChat = () => {
    goTo("/livechat")
  }
 
  const displayClients = () => {
    if (view){
      return client.filter(c => c.guide_username && c.guide_username.includes(guide.username)).map(s => (
        <div id='clients'>
          {s.username}
          {s.reviews}
          <button className='btn' onClick={toChat}>Chat with them</button>
        </div>
      ))
    }
  }
  
    return (
    <div id="topContainer">
    <div id="headerContainer">
      
        <h1>Welcome back, {/*guidename*/}Share your rich knowledge of your local area</h1>

        <button className="btn" onClick={handleClick}>View Your Profile</button>
      
    </div>
      <div id='allActivities'>
    {displayActivites()}
      </div>

    <div id="view-clients">
      <h1>View All Of Your Clients</h1>
      {view ? (
      <button className="btn" onClick={handleView}>Hide clients</button>) : <><button className="btn" onClick={handleView}>Show clients</button></>
      }
    </div>
    <div id='showClients'>
      {displayClients()}
    </div>

  </div>
  )
}

export default GuideHomePage
