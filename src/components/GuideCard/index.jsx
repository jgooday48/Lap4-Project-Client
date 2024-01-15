import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Carousel from 'react-bootstrap/Carousel';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEye, faSuitcase, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseApi } from '../../utils/baseApi';




const GuideCard = ({ guide, placeName }) => {

  const [toggleSaveOrDelete, setToggleSaveOrDelete] = useState(true)
  const navigate = useNavigate()

  const saveOrDeleteGuide = () => {

    if (toggleSaveOrDelete) {
      toast.success('The guide has been saved to your "Watchlist".', {autoClose: 2000});
    } else {
            toast.warning('The guide has been removed from your "Watchlist".', {autoClose:2000});


    }
    setToggleSaveOrDelete(prev => !prev)
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

  const startChat = () => {

  }
  const navToPlan = () => {
    navigate(`/createPlan/${guide.guide_id}`, {state: {guide}})
  }
  return (
    

    <div className='guide-page-card'>
      
      <div className="carousel" style={{ width: "35%" }}>
        <Carousel interval={null}>
          {
            guide.images?.map((image, idx) =>
              <Carousel.Item key={idx} className="carousel-item" style={{ width: "500px", height: "600px" }}>
                <img src={image} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} alt="guide-pic" />
              </Carousel.Item>
            )
          }
        </Carousel>
      </div>
      <section className="guide-info-section">
        <b>Meet {guide.name}</b>
        <p>A local from <u>{placeName}</u></p>
        <p>{guide.info}</p>
        <p>{guide.tagline}</p>

        <p className="guide-filters">
          {guide.filters?.map((filter, idx) =>
            <div key={idx} className="guide-filter">{filter}</div>
          )}
        </p>

        <li>make and confirm plan</li>
        <li>plans page</li>
        <li>save guides</li>
        <li>saved guides page</li>
        <li>dates</li>
        <li>connect messaging system</li>
        <li>reviews long paginate or new page</li>
        <li></li>
      </section>
      <section className="guide-contact">
        <div className="guide-chat-title">
          <b>Say Hello</b>
        </div>
        <div className="chat-icon" onClick={startChat}>
          <FontAwesomeIcon icon={faComment} />
        </div>
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
