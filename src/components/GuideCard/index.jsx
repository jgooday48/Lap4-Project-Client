import React from 'react'
import { useLocation } from 'react-router'
import Carousel from 'react-bootstrap/Carousel';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';



const GuideCard = ({ guide, placeName }) => {


  const startChat = () => {
    
  }
return (
  <div className='guide-page-card'>
   <div className="carousel" style={{width: "35%"}}>
    <Carousel interval={null}>
      {
        guide.images?.map((image, idx) => 
          <Carousel.Item key={idx} className="carousel-item" style={{width:"500px", height:"600px"}}>
            <img src={image} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}} alt="guide-pic"/>
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
      <li>review of that guide</li>
      <li>rating of that guide</li>
      <li>plans page</li>
      <li>save guides</li>
      <li>saved guides page</li>
      <li>dates</li>
      <li>connect messaging system</li>
    </section>
    <section className="guide-contact">
      <div className="guide-chat-title">
      <b>Say Hello</b>
      </div>
      <div className="chat-icon" onClick={startChat}>
        <FontAwesomeIcon icon={faComment} />
        </div>
    </section>
  </div>
)

}

export default GuideCard
