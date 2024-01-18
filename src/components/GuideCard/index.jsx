import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEye, faSuitcase, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseApi } from '../../utils/baseApi';
import ImageCarousel from '../ImageCarousel';
import { io } from "socket.io-client";



const GuideCard = ({ guide, placeName }) => {

  const [toggleSaveOrDelete, setToggleSaveOrDelete] = useState(true)
  const navigate = useNavigate()
  const touristId = sessionStorage.getItem("touristId")
  const touristUsername = sessionStorage.getItem('touristUsername')
  const images = guide?.images || []


  useEffect(() => {
        const socket = io('http://localhost:5000'); // Change the URL to your Flask server

        return () => {
            socket.disconnect();
        };
    }, []);


  const saveOrDeleteGuide = () => {

    if (toggleSaveOrDelete) {
      createTouristGuidePair(guide.guide_id, touristId)
    
      notifyAddedToGuide();
    } else {
           
      removeTouristGuidePair(guide.guide_id, touristId)
      notifyRemovedToGuide();

    }
    setToggleSaveOrDelete(prev => !prev)
  }


     const notifyAddedToGuide = () => {
        // Send a notification to the guide via WebSocket
        const socket = io('http://localhost:5000'); // Change the URL to your Flask server
        socket.emit('notification', {
          guideId: guide.guide_id,
          message: `${touristUsername} has added you to their watchlist`,
          senderId: touristId
        });
  };
  
  const notifyRemovedToGuide = () => {

        const socket = io('http://localhost:5000'); // Change the URL to your Flask server
        socket.emit('notification', {
          guideId: guide.guide_id,
          message: `${touristUsername} has removed you from their watchlist`,
          senderId: touristId
        });
  }



  const createTouristGuidePair = async (guideId, touristId) => {
    const data = {
      "tourist_id": touristId,
      "guide_id": guideId

    };

    try {
      await axios.post(baseApi + "tourists/guides", data);
            toast.success('The guide has been saved to your "Watchlist".', {autoClose: 2000});

    } catch (error) {
      console.error("Error creating tourist-guide pair:", error.message);
      toast.error("The guide cannot be saved.");
    }

  }
  const removeTouristGuidePair = async (guideId, touristId) => {

    try {
      await axios.delete(baseApi + `tourists/guides/${touristId}/${guideId}`);
            toast.warning('The guide has been removed from your "Watchlist".', {autoClose:2000});
    } catch (error) {
      console.error("Error deleting tourist-guide pair:", error.message);
      toast.error("The guide cannot be deleted.");
    }
  }

  const startChat = async () => {
    try {
      const data = {
        senderId: touristId,
        receiverId: guide.guide_id
      }
      console.log(guide.guide_id)
      await axios.post(baseApi+`/chat`, data)
      navigate("/chat")
    } catch (error){
      console.error("Error creating a chat", error.message);
    }
  }

  const navToPlan = () => {
    navigate(`/createPlan/${guide.guide_id}`, {state: {guide}})
  }
  return (
    

    <div className='guide-page-card'>

      <div style={{width: '500px'}}>
        <ImageCarousel images={images} />
      </div>
     
      <section className="guide-info-section">
        <b>Meet {guide.name}</b>
        <p>A local from <u>{placeName}</u></p>
      
        <p>{guide.info}</p>
        <p>{guide.tagline}</p>

        <p className="guide-filters" style={{marginTop:'4em', border:'none'}}>
          {guide.filters?.map((filter, idx) =>
            <div key={idx} className="guide-filter">{filter}</div>
          )}
        </p>

      </section>
      <section className="guide-contact">
        <div className="guide-chat-title">
          <b>Say Hi</b>
        </div>
        <div className="chat-icon" onClick={startChat}>
          <FontAwesomeIcon icon={faComment} />
        </div>
        <b>Add to Watchlist</b>
        <div className={`chat-icon ${toggleSaveOrDelete ? '' : 'gold'}`}
          onClick={() => saveOrDeleteGuide()}>
          <FontAwesomeIcon icon={faEye} />
        </div>
        <div>
          <b>Make Plans</b>
          <div className="chat-icon" onClick={navToPlan}>
            {/* <FontAwesomeIcon icon={faSuitcase} /> &rarr; */}
            <FontAwesomeIcon icon={faPersonWalkingLuggage} />
          </div>
        </div>

      </section>
      
      </div>
    
  )

}

export default GuideCard
