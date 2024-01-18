import React, { useEffect, useState } from 'react'
import './SearchedGuides.css'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import GuideRating from './GuideRating'



const SearchedGuides = ({ searchRes, guides }) => {
  const navigate = useNavigate()




  const handleClick = (id) => {
    navigate(`/touristguidepage/${id}`, {state: {searchRes}})
  }

  return (
    <>
      <div className="result-title">
        <h3>Guides in {searchRes}</h3>
      </div>
      <div className="guides-container">
        {
          guides.map(g =>
            <div className="guide-card" key={g.guide_id} onClick={() => handleClick(g.guide_id)}>
              <img src={g.images[0]} alt="guide-pic" />
              <section className="guide-card-details">
                <b>{g.name}</b>
                <span>{g.tagline}</span>
                <p className="guide-filters">
                  {g.filters.map((filter, idx) =>
                    <div key={idx} className="guide-filter">{filter}</div>
    
                  )}
                </p>
                <div><GuideRating id={g.guide_id}/></div>
              </section>
            </div>
          )
        }
      </div>



    </>
  )
}

export default SearchedGuides