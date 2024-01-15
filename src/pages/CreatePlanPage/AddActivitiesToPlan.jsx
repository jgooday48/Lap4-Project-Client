import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import './AddActivitiesToPlan.css'

const AddActivitiesToPlan = ({ id, setActivityIds, activityIds }) => {
    const [activities, setActvities] = useState([])
    const [activityState, setActivityState] = useState({});



    const handleClick = (id) => {

        setActivityState(prevState => ({
            ...prevState, [id]: !prevState[id]
        }));

        setActivityIds(prevActivityIds => {
            if (prevActivityIds.includes(id)) {
                return prevActivityIds.filter(activityId => activityId !== id);
            } else {
                return [...prevActivityIds, id];
            }

        });


    }

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
                    <div key={a.activity_id} className="add-activity-card" onClick={() => handleClick(a.activity_id)}>
                        <img src={a.images[0]} alt="add-activity-img" />
                        <div className="activity-name">{a.name}</div>
                        {activityState[a.activity_id] && (
                            <div className="tick">
                                &#10004;
                                <span className="ticked-name">{a.name}</span>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default AddActivitiesToPlan