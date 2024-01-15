import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router'
import './index.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GuideActivities from '../IndividualGuidePage/GuideActivities';
import AddActivitiesToPlan from './AddActivitiesToPlan';


const CreatePlanPage = () => {
    const { guideId } = useParams()
    const location = useLocation()
    const guide = location.state && location.state.guide
    const [notes, setNotes] = useState()
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);





    return (
        <div className="create-plan">
            <div className="plan-guide-info">
                <b>Create plans with {guide.name.substring(0, guide.name.indexOf(" "))}</b>
                <img src={guide.images[0]} alt="guide-pic" />
            </div>
            <div className="create-plan-form-section">
                <form>

                    <div>
                        <label>Date from: </label>
                        <DatePicker
                            selected={dateFrom}
                            onChange={(date) => setDateFrom(date)}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Date to: </label>
                        <DatePicker
                            selected={dateTo}
                            onChange={(date) => setDateTo(date)}
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <AddActivitiesToPlan id={guideId}/>
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
                    <button className="btn btn-primary">Craft a plan</button>
                </form>
            </div>

        </div>
    )
}

export default CreatePlanPage