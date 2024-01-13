import React, { useEffect } from 'react'
import './SearchedGuides.css'


const SearchedGuides = ({ searchRes, guides }) => {



  return (
    <>
      <div className="result-title">
        <h3>Guides in {searchRes}</h3>
      </div>
      <div className="guides-container">
        {
          guides.map(g => 
            <div className="guide-card" key={g.guide_id}>
               <img src={g.images[0]} alt="guide-pic"/>
              <section className="guide-card-details">
                <b>{g.name}</b>
                <span>{g.tagline}</span>
                <p className="guide-filters">
                  {g.filters.map((filter, idx) => 
                    <div key={idx} className="guide-filter">{filter}</div>
                    )}
                </p>
                
             </section>
             </div> 
          )
        }
      </div>



    </>
  )
}

export default SearchedGuides