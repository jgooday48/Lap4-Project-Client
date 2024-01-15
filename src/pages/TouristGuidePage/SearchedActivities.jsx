import React, { useEffect } from 'react'
import './SearchedActivities.css'

const SearchedActivities = ({activities}) => {



  return (
    <div className="activities-container">
      
      <h3 id="activity-title">Activities</h3>

      {
        activities.map(a => 
          <div className="activity-card" key={a.activity_id}>
            <img src={a.images[0]} alt="activity-pic" />
            <div className="activity-card-details">
              <b>{a.name.toUpperCase()}</b>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SearchedActivities