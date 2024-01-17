import React, { useEffect } from 'react'
import './SearchedActivities.css'

const SearchedActivities = ({activities}) => {



  return (
    <div className="activities-container">
      
      <h4 id="activity-title">Activities</h4>

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