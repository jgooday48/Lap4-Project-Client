import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import './AddActivitiesToPlan.css'

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
        <div className="add-activity-container">
            {
                activities.map(a => (
                    <div key={a.activity_id} className="add-activity-card">
                        <img src={a.images[0]} alt="add-activity-img" />
                        <div className="activity-name">{a.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default AddActivitiesToPlan