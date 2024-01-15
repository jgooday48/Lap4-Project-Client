import React from 'react'
import { useState } from 'react'

const AddActivitiesToPlan = ({ id }) => {
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
    <div>AddActivitiesToPlan</div>
  )
}

export default AddActivitiesToPlan