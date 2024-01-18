import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import './index.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddActivitiesToPlan from './AddActivitiesToPlan';
import { format } from 'date-fns';

import axios from 'axios';
import { baseApi } from '../../utils/baseApi';
import { toast } from 'react-toastify';


const CreatePlanPage = () => {
    const { guideId } = useParams()
    const location = useLocation()
    const guide = location.state && location.state.guide

    const placeId = guide?.place_id || null
    const [notes, setNotes] = useState("")

    const [activityIds, setActivityIds] = useState([])

    const touristId = sessionStorage.getItem('touristId')
    const navigate = useNavigate()
    const [dateTimeFrom, setDateTimeFrom] = useState(null);
    const [dateTimeTo, setDateTimeTo] = useState(null);
    const [touristUsername, setTouristUsername] = useState('')

    // ... (existing code)

    const createPlan = async (e) => {
        e.preventDefault()
        const formattedDateTimeFrom = dateTimeFrom ? format(dateTimeFrom, 'yyyy-MM-dd HH:mm:ss') : null;
        const formattedDateTimeTo = dateTimeTo ? format(dateTimeTo, 'yyyy-MM-dd HH:mm:ss') : null;

        const body = {
            "tourist_id": touristId,
            "guide_id": guideId,
            "place_id": placeId,
            "date_to": formattedDateTimeTo.toString(),
            "date_from": formattedDateTimeFrom.toString(),
            "status": "ONGOING",
            "notes": notes,
            "activity_ids": activityIds,

        };
        console.log("body: ", body)

        await axios.post(baseApi + "plans", body)
            .then(res => {
                toast.success('New plan added to your "Plans"')
            
                const message = touristUsername + " has created a plan"
                makeNotes(message)
            })
            .catch(e => {
                console.log(e)
               
                toast.error("Unable to create plan")

            })


    };

    const fetchTouristByTouristId = async () => {
        await axios.get(baseApi + "tourist/" + touristId)
            .then(res => setTouristUsername(res.data[0].username))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchTouristByTouristId()
    }, [])


    const makeNotes = async (message) => {

        const body = {
            "sender_id": touristId,
            "text": message,
            "guide_id": guideId
        }
        await axios.post(baseApi + "notes", body)
            .then(() => ("new note made"))
            .catch((e) => console.log(e))
    }






    return (

        <div className="create-plan">

            <div className="plan-guide-info">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>&larr; Go back</button>
                <b>Create plans with {guide?.name?.substring(0, guide.name.indexOf(" "))}</b>
                <img src={guide?.images?.[0]} alt="guide-pic" />
            </div>

            <div className="create-plan-form-section">
                <b>Plan Details</b>
                <form onSubmit={createPlan} className="create-form">

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

                    <button className="btn btn-primary">Start a plan</button>
                </form>
            </div>

        </div>
    )
}

export default CreatePlanPage
