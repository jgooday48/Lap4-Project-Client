import React, { useEffect , useState} from 'react'
import './GuideActivities.css'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'

const GuideActivities = ({ id }) => {
      const [activities, setActvities] = useState([])


      const fetchGuideActivities = async () => {
    await axios.get(`${baseApi}guides/guideId:${id}/activities`)
      .then(res => setActvities(res.data))
      .catch(e => console.log(e))
    }
    
    useEffect(() => {
        fetchGuideActivities()
    }, [])
  return (
      <div className="guide-activity-container">
          {
              activities.map(a => (
                  <div key={a.activity_id} className="guide-activity-card">
                      <img src={a.images[0]} alt="activity-img" />
                       <div className="activity-name">{a.name}</div>
                    </div>
             ))
          }
         
          
    </div>
  )
}

export default GuideActivities