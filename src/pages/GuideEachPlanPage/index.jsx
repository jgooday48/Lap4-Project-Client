import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useLocation, useNavigate } from 'react-router'

import Swal from 'sweetalert2'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { baseApi } from '../../utils/baseApi';
import GuidePlanForm from './GuidePlanForm'
import { toast } from 'react-toastify';



const GuideEachPlanPage = () => {
    const location = useLocation()
    const plan = location.state && location.state.plan
    const image = location.state && location.state.placeImage
    const touristName = location.state && location.state.touristName
    const navigate = useNavigate()
    const notes = plan ? plan.notes : ''
    const [status, setStatus] = useState(plan?.status)
    const guideId = sessionStorage.getItem('guide_id')
    const { id } = useParams()


    const fetchPlan = async() => {
        await axios.get(baseApi + "plans/" + id)
            .then(() => console.log("plans fetched"))
            .catch((e)=> console.log(e))
    }



    const handleCancel = async (e) => {
        e.preventDefault()
        const isConfirmed = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        });


        if (isConfirmed.isConfirmed) {
            cancelPlan()
        }
    }


    
    const confirmPlan = async () => {
        const body = {
            status: 'BOOKED'
        }
        await axios.patch(baseApi + "plans/" + plan.plan_id, body)
            .then(() => {
                toast.success("The plan has been booked")
                fetchPlan() 
            })
            .catch(e => console.log(e))
    }

        const confirmUpdate = async () => {
        const body = {
            status: 'UPDATED'
        }
        await axios.patch(baseApi + "plans/" + plan.plan_id, body)
            .then(() => {
                toast.success("The plan has been updated")
                fetchPlan() 
            })
            .catch(e => console.log(e))
    }

    const handleUpdating = async(e) => {
           e.preventDefault()
        const isConfirmed = await Swal.fire({
            title: 'Please confirm that you want to update the plan',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm the update!'
        });


        if (isConfirmed.isConfirmed) {
            confirmUpdate()
        }
        
    }


    const cancelPlan = async () => {
        const body = {
            status: 'CANCELLED'
        }
        await axios.patch(baseApi + "plans/" + plan.plan_id, body)
            .then(() => {
                toast.info("The plan has been cancelled")
                fetchPlan() 
            })
            .catch(e => console.log(e))
            
                    
        // await axios.delete(baseApi + "plans/" + plan.plan_id)
        //     .then(res => navigate(-1))
        //     .catch(e => console.log(e))
    }

    return (
        <div className="create-plan">
       
            <div className="plan-guide-info">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>&larr; Go back</button>
                <b>Your plans with {touristName && touristName.substring(0, touristName.indexOf(" "))}</b>

                <img src={image} alt="guide-pic" />
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
                <GuidePlanForm plan={plan} notes={notes} guideId={guideId} status={status} okPlan={confirmPlan} />


                
            <div>
                {
                    status == 'Updating' &&
                    <div>
                        <button className="btn btn-info" onClick={handleUpdating}><FontAwesomeIcon icon={faEdit} /> Confirm the update</button>
                    </div>

                }
                {
                    status != 'Cancelled' && status != 'Completed' && status !='Updating' && 
                    <div>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit} /> Update the plan</button>
                    </div>
                }
                {
                    status != 'Completed' && status != 'Cancelled' &&
                    <button className="btn btn-danger" onClick={handleCancel}>&#10006; Cancel the plan</button>
                }
           </div>
                {
                    status == 'Completed' &&
                    <div>
                        <h5>Review</h5>
                    </div>
                }


            </div>




        </div>

    )
}

export default GuideEachPlanPage