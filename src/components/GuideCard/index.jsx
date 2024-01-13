import React from 'react'
import { useLocation } from 'react-router'
import Carousel from 'react-bootstrap/Carousel';
import './index.css'


const GuideCard = ({ guide, placeName }) => {





return (
  <div className='guide-page-card'>
   <div className="carousel">
    <Carousel interval={null}>
      {
        guide.images?.map((image, idx) => 
          <Carousel.Item key={idx} className="carousel-item" style={{width:"500px", height:"600px"}}>
            <img src={image} style={{width:"100%", height:"100%", objectFit:"cover"}} className="d-block w-100" alt="guide-pic"/>
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

    {/* <h3>Email: {guide.email}</h3>
    <h4>Specialities: {guide.filters}</h4>
      <h4>Location: {placeName ? placeName : 'Unknown'}</h4> */}
  </section>
  </div>
)

}

export default GuideCard
