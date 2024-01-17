import React, { useState } from 'react'
import './index.css'
import AddActivitiesToPlan from '../CreatePlanPage/AddActivitiesToPlan'
import { useLocation, useNavigate } from 'react-router'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2'
import axios from 'axios'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { baseApi } from '../../utils/baseApi';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';



const TouristEachPlanPage = () => {

    const location = useLocation()
    const guideName = location.state && location.state.guideName
    const guideImage = location.state && location.state.image
    const plan = location.state && location.state.plan
    const [notes, setNotes] = useState(plan ? plan.notes : '')
    const [activityIds, setActivityIds] = useState(plan ? plan.activities.map(activity => activity.activity_id) : []);

    const [dateTimeFrom, setDateTimeFrom] = useState(plan ? new Date(plan.date_from) : new Date());
    const [dateTimeTo, setDateTimeTo] = useState(plan ? new Date(plan.date_to) : new Date());
    const navigate = useNavigate()
    // const guideId = plan.guide_id
    const guideId = plan && plan.guide_id;
    const planId = plan && plan.plan_id
    const touristId = sessionStorage.getItem('touristId')
    const [touristUsername, setTouristUsername] = useState('')
    const status = plan && plan.status

    const handleUpdatePlan = async (e) => {
        e.preventDefault()

        const isConfirmed = await Swal.fire({
            title: 'Are you sure you want to update the plan?',
            text: 'Updating the plan may not always be possible. Please be in touch with your guide.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update the plan'
        });
        if (isConfirmed.isConfirmed) {
            updatePlan(e)
            toast.info("Update pending...", { autoClose: 3000 })

        }

    }

    const fetchTouristByTouristId = async() => {
        await axios.get(baseApi + "tourist/" + touristId)
            .then(res => setTouristUsername(res.data[0].username))
            .catch(e => console.log(e))
    }

    useEffect(() => {
fetchTouristByTouristId()
    }, [])



    const fetchPlan = async () => {
        await axios.get(baseApi + "plans/" + planId)
            .then(() => console.log("plans fetched"))
            .catch((e) => console.log(e))
    }

    const makeNotes = async (message) => {

        const body = {
            "sender_id": touristId,
            "text": message,
            "guide_id": guideId
        }
        await axios.post(baseApi + "notes", body)
            .then(() => ("new note made"))
            .catch((e) => console.log(e) )
    }



    const updatePlan = async (e) => {
        e.preventDefault()
        const formattedDateTimeFrom = dateTimeFrom ? format(dateTimeFrom, 'yyyy-MM-dd HH:mm:ss') : null;
        const formattedDateTimeTo = dateTimeTo ? format(dateTimeTo, 'yyyy-MM-dd HH:mm:ss') : null;
        const body = {
            "date_to": formattedDateTimeTo.toString(),
            "date_from": formattedDateTimeFrom.toString(),
            "status": "UPDATING",
            "notes": notes,
            "activity_ids": activityIds,
        }
        await axios.patch(baseApi + "plans/" + planId, body)
            .then(() => {
                console.log("sucesss");
                fetchPlan();
                const message = touristUsername + " wants to update their plan"
                makeNotes(message)
            })
            .catch(e => {
                console.log(e)
                toast.error("Unable to update plan")

            })
    }



    const handleCancel = async (e) => {
        e.preventDefault()
        const isConfirmed = await Swal.fire({
            title: 'Are you sure you want to cancel the plan?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        });


        if (isConfirmed.isConfirmed) {

            const body = {
                "status": "CANCELLED"
            }
            await axios.patch(baseApi + "plans/" + planId, body)
                .then(() => {
                    console.log("sucesss CANCELLING  plan");
                    fetchPlan()
                    const message = touristUsername + " has cancelled their plan"
                    makeNotes(message)
                })
                .catch(e => {
                    console.log(e)
                    toast.error("Unable to update plan")
                })
            toast.info("The plan has been cancelled successfully", { autoClose: 3000 })
        }
    }





    // const deletePlan = async () => {
    //     await axios.delete(baseApi + "plans/" + plan.plan_id)
    //         .then(res => navigate(-1))
    //         .catch(e => console.log(e))
    // }


    return (

        <div className="create-plan">

            <div className="plan-guide-info">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>&larr; Go back</button>
                {/* <b>Your plans with {guideName.substring(0, guideName.indexOf(" "))}</b> */}
                <b>Your plans with {guideName && guideName.substring(0, guideName.indexOf(" "))}</b>
                <img src={guideImage} alt="guide-pic" />
            </div>
            <div className="create-plan-form-section">
                       {
                    status == 'Cancelled' &&
                    <div style={{ background:'red', color:'white'}}>
                            <h2>Plan cancelled</h2>
                </div>
                }
                          {
                    status == 'Completed' &&
                    <div style={{ background:'#33b864', color:'white'}}>
                            <h2>Plan Completed</h2>
                </div>
            }
                <b>Plan Details</b>
                <form onSubmit={handleUpdatePlan} className="create-form">

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
                        <div style={{ fontSize: '15px' }}>
                            <FontAwesomeIcon icon={faInfo} />
                            &nbsp; The plan is only updated once the guide accepts the change.
                        </div>

                        <button className="btn btn-primary"><FontAwesomeIcon icon={faEdit} /> Update the plan</button>

                    </div>

                </form>
                <button className="btn btn-danger" onClick={handleCancel}>&#10006; Cancel the plan</button>

            </div>

        </div>
    )
}

export default TouristEachPlanPage
