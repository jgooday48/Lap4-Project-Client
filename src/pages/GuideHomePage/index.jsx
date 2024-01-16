import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import './index.css';
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
    <>
      <div id="topContainer">
        <div id="headerContainer">
          <h1>
            Welcome back, {/*guidename*/} Share your rich knowledge of your local area
          </h1>
          <button className="btn" onClick={handleClick}>
            View Your Profile
          </button>

        </div>
        
  
        {/* Uncomment the next line if you want to display activities */}
        {/* {displayActivities()} */}
  
        {/* Uncomment the next lines if you want to display a section to view clients */}
        {/* <div id="view-clients">
          <h1>View All Of Your Clients</h1>
          <button className="btn">View</button>
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
        <div id="Gallery">
          <div id="Gallery1">
            <h1>Explore the World</h1>
            <p>Discover amazing activities and destinations</p>
            <div className="gallery-grid">
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="1" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1568323993144-20d546ba585d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="2" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="3" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="4" /></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="5" /></div>
              
            </div>
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
      </div>
    </>
  );
};

export default GuideHomePage;

