import React, { useEffect , useState} from 'react'
import './GuideActivities.css'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'

const GuideActivities = ({ id }) => {
      const [guideActivities, setGuideActvities] = useState([])


      const fetchGuideActivities = async () => {
    await axios.get(`${baseApi}guides/guideId:${id}/activities`)
      .then(res => console.log(res.data))
      .catch(e => console.log(e))
    }
    
    useEffect(() => {
        fetchGuideActivities()
    }, [])
  return (
    <div>GuideActivities</div>
  )
}

export default GuideActivities