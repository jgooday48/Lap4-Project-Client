import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import TouristWatchListCard from './TouristWatchListCard'

const TouristWatchListPage = () => {
  const touristId = sessionStorage.getItem('touristId')
  const [guides, setGuides] = useState([])


  const fetchGuidesByTourist = async () => {
    await axios.get(baseApi + "tourists/" + touristId + "/guides")
      .then(res => setGuides(res.data))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    fetchGuidesByTourist()
  }, [])


  return (
    <div className='watch-list'>
      <h4><b>All Watched Guides</b></h4>
      <div className="tourist-plans-info">
        <article className="tourist-plans-sum">
          <div style={{ backgroundColor: 'gainsboro', width: '100%', padding: '10px' }}>
            <b ><u>Filter by</u></b>
          </div>
          <ul>
            <li>Recently viewed</li>
            <li>Location</li>
            <li>Activities</li>
            <li>Tags</li>
          </ul>
        </article>
        <div className="tourist-plan-container">
          <div className="tourist-plan-title">
            <b>All Guides</b>
          </div>
          <div className="watchlist-container">
          {
            guides?.map(guide => (
              <div key={guide.guide_id}>
                <TouristWatchListCard guide={guide}/>
              </div>
            ))
            }
            </div>
        
        </div>
      </div>


    </div>
  )
}

export default TouristWatchListPage
