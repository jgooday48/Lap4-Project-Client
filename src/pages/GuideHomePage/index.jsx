import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import ImageCarousel from '../../components/ImageCarousel';
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

  const allActivityImages = activites.flatMap(activity => activity.images || []);
  
  return (
    <>
      <div id="topContainer">
        <div id="headerContainer">
          <h1>Welcome back, {/*guidename*/}Share your rich knowledge of your local area</h1>
          <button className="btn" onClick={handleClick}>View Your Profile</button>
        </div>
        {/* <div id='allActivities'>
          {displayActivites()}
        </div> */}
        <div id="view-clients">
          <h1>View All Of Your Clients</h1>
          {view ? (
            <button className="btn" onClick={handleView}>Hide clients</button>
          ) : (
            <button className="btn" onClick={handleView}>Show clients</button>
          )}
        </div>
        {/* <div id='showClients'>
          {displayClients()}
        </div> */}
      </div>
      <div id="Features">
        <div id="Features1">
          <h1>Feature</h1>
          <h2>Discover the Power of TravelGuide</h2>
          <p>Unlock a world of possibilities with our powerful features</p>
        </div>
        <div className="feature-box-container">
          <div className='feature-box'>
            <h1>Adventure Management</h1>
            <p>Effortlessly showcase experiences and manage availability</p>
          </div>
          <div className='feature-box'>
            <h1>Live Chat</h1>
            <p>Engage with clients in real-time through live chat</p>
          </div>
          <div className='feature-box'>
            <h1>Client Feedback</h1>
            <p>Build a stellar reputation with valuable client feedback</p>
          </div>
          <div className='feature-box'>
            <h1>Connect with Fellow Guides</h1>
            <p>Network and collaborate with other guides in the community</p>
          </div>
        </div>
      </div>
      <div id="Gallery">
        <div id="Gallery1">
          <h1>Explore the World</h1>
          <p>Discover amazing activities and destinations</p>
          <ImageCarousel images={allActivityImages} />
        </div>
      </div>
      <div id='FAQ'>
        <div id='FAQ1'>
          <h1>FAQ</h1>
          <h2>Common Questions</h2>
          <p>Here are some of the most common questions that we get.</p>
        </div>
        <div id='FAQ2'>
          <h3>How can I showcase my experiences on TravelGuide?</h3>
          <p>You can showcase your experiences on TravelGuide by creating detailed listings for each adventure you offer. Include captivating descriptions, high-quality photos, and any additional information that will help potential clients understand what they can expect from your guided tours.</p>
          <h3>How can I manage the availability of my adventures?</h3>
          <p>Managing the availability of your adventures is easy with TravelGuide. Simply access your Guide's Portal and navigate to the 'Activity' section. From there, you can update the availability calendar for each adventure, ensuring that potential clients can see the dates and times that are open for booking.</p>
          <h3>How can I engage with clients through live chat?</h3>
          <p>Engaging with clients through live chat is a breeze on TravelGuide. Once you receive a message from a client, you will be notified in real-time. Simply click on the 'Live Chat' section in your Guide's Portal to respond to their inquiries, provide assistance, and build a strong connection with your clients.</p>
          <h3>How can I build a stellar reputation with client feedback?</h3>
          <p>Building a stellar reputation with client feedback is crucial for success on TravelGuide. After each adventure, encourage your clients to leave feedback and reviews about their experience. Positive reviews will help boost your reputation and attract more clients. You can manage and respond to client feedback in the 'Clients' section of your Guide's Portal.</p>
          <h3>How can I connect with fellow guides on TravelGuide?</h3>
          <p>Connecting with fellow guides on TravelGuide is a great way to network, share insights, and collaborate. In the 'Home' section of your Guide's Portal, you will find a community forum where you can interact with other guides. Share tips, ask questions, and learn from the experiences of your peers.</p>
        </div>
      </div>
    </>
  );
}
  export default GuideHomePage;