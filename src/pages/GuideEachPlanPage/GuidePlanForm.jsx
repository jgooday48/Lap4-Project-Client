import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddActivitiesToPlan from '../CreatePlanPage/AddActivitiesToPlan'
import { useState } from 'react';
import Swal from 'sweetalert2'


const GuidePlanForm = ({plan, notes, guideId, status, okPlan}) => {

    const dateTimeFrom = plan ? new Date(plan.date_from) : new Date();
    const dateTimeTo = plan ? new Date(plan.date_to) : new Date();
    const [activityIds, setActivityIds] = useState(plan ? plan.activities.map(activity => activity.activity_id) : []);
    
    const confirmPlan = async(e) => {
          e.preventDefault()
        const isConfirmed = await Swal.fire({
            title: 'Please confirm the plan for booking',
            text: 'Once confirmed you are held responsible for making plans',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm it!'
        });

        if (isConfirmed.isConfirmed) {
            okPlan()
        }

    }


  return (
         <form onSubmit={confirmPlan} className="create-form">

                    <div>

                        <label>Date and Time from: </label>
                        <DatePicker
                            selected={dateTimeFrom}
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
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            minDate={dateTimeFrom}
                            dateFormat="dd/MM/yyyy HH:mm"
                            className="form-control"
                        />
                    </div>
                    <label>Activities included: </label>
                    <AddActivitiesToPlan id={guideId} setActivityIds={setActivityIds} activityIds={activityIds} />
                    <div>
                        <label>Notes:</label>
                        <textarea
                            value={notes}
                            className="form-control"
                            placeholder="Share your thoughts, ideas, or any additional notes..."
                            rows={5}
                            cols={60}
                        />
                    </div>
                    {status =='Ongoing' && 

                        <div>
                            <button className="btn btn-primary">&#10003; Confirm the plan</button>
                        </div>
                    }
                </form>
  )
}

export default GuidePlanForm