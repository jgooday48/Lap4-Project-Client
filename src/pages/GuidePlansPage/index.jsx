import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import TouristPlanCard from '../TouristPlansPage/TouristPlanCard'
import GuidePlanCard from './GuidePlanCard'

const GuidePlansPage = () => {
  const guideId = sessionStorage.getItem('guide_id')
  const [plans, setPlans] = useState([])

  
    const fetchPlansByTourist = async () => {
        await axios.get(baseApi + "plans/guide:" + guideId)
            .then(res => {
                setPlans(res.data)
            }
            )
            .catch(e => console.log(e))
  }
  
  useEffect(() => {
fetchPlansByTourist()
  },[] )

  console.log("plans: ", plans)
  return (
        <div className="tourist-plans">
            <h4><b>My plans</b></h4>
            <u></u>
            <div className="tourist-plans-info">
                <article className="tourist-plans-sum">
                    <div style={{ backgroundColor: 'gainsboro', width: '100%', padding: '10px' }}>
                        <b ><u>Summary</u></b>
                    </div>
                    <ul>
                        <li>Recently viewed</li>
                        <li>Ongoing</li>
                        <li>Booked</li>
                        <li>Updated</li>
                        <li>Cancelled</li>
                    </ul>
                </article>
                <div className="tourist-plan-container">
                    <div className="tourist-plan-title">
                        <b>All Plans</b>
                    </div>
                    {
                        plans?.map(plan => (
                            <div key={plan.plan_id}>
                            {/* <TouristPlanCard plan={plan} /> */}
                            <GuidePlanCard plan={plan}/>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
  )
}

export default GuidePlansPage