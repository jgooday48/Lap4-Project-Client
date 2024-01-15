import React, { useState } from 'react'
import './index.css'
import AddActivitiesToPlan from '../CreatePlanPage/AddActivitiesToPlan'
import { useLocation, useNavigate } from 'react-router'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useEffect } from 'react';
const TouristEachPlanPage = () => {

    const location = useLocation()
    const guideName = location.state && location.state.guideName
    const guideImage = location.state && location.state.image
    const plan = location.state && location.state.plan
    const [notes, setNotes] = useState(plan.notes)
    const [activityIds, setActivityIds] =  useState(plan.activities.map(activity => activity.activity_id))
    const [dateTimeFrom, setDateTimeFrom] = useState(new Date(plan.date_from))
    const [dateTimeTo, setDateTimeTo] = useState(new Date(plan.date_to))
    const navigate = useNavigate()
    const guideId = plan.guide_id


    const updatePlan = () => {

    }

 useEffect(()=> {
      console.log("actvityIds: ", plan.date_from)
}, [])

  return (
      
        <div className="create-plan">

            <div className="plan-guide-info">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>&larr; Go back</button>
                <b>Your plans with {guideName.substring(0, guideName.indexOf(" "))}</b>
              <img src={guideImage} alt="guide-pic" />
            </div>
            <div className="create-plan-form-section">
                <b>Plan Details</b>
                <form onSubmit={updatePlan} className="create-form">

                    <div>

                        <label>Date and Time from: </label>
                     <DatePicker
                            selected={dateTimeFrom}
                            onChange={(date) => setDateTimeFrom(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy HH:mm"
                            className="form-control"
                        />
                   </div>
                    <div>
                        <label>Date and Time to: </label>
                        <DatePicker
                            selected={dateTimeTo}
                            onChange={(date) => setDateTimeTo(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            minDate={dateTimeFrom}
                            dateFormat="dd/MM/yyyy HH:mm"
                            className="form-control"
                        /> 
                    </div>
                    <label>Activities to include: </label>
                    <AddActivitiesToPlan id={guideId} setActivityIds={setActivityIds} activityIds={activityIds} />
                    <div>
                        <label>Notes:</label>
                        <textarea
                            value={notes}
                            className="form-control"
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Share your thoughts, ideas, or any additional notes..."
                            rows={5}
                            cols={60}
                        />
                  </div>
                  

                  <div>
                      
                      <button className="btn btn-primary">Update the plan</button>
                </div>
                  
                </form>
            </div>

        </div>
  )
}

export default TouristEachPlanPage