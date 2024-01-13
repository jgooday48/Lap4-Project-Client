import React, { useEffect } from 'react'

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
              {g.name}
             </div> 
          )
        }
      </div>



    </>
  )
}

export default SearchedGuides