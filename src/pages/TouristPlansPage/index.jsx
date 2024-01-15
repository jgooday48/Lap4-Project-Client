import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import TouristPlanCard from './TouristPlanCard'

const TouristPlansPage = () => {

    const touristId = localStorage.getItem("touristId")
    const [plans, setPlans] = useState([])


    const fetchPlansByTourist = async () => {
        await axios.get(baseApi + "plans/tourist:" + touristId)
            .then(res => {

                setPlans(res.data)

            }
            )
            .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchPlansByTourist()

    }, [])




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
                        <li>Offers</li>
                        <li>Explore</li>
                        <li>Bookings</li>
                        <li>Activities</li>
                        <li>Reviews</li>
                        <li>Contact</li>
                    </ul>
                </article>
                <div className="tourist-plan-container">
                    {
                        plans?.map(plan => (
                            <div key={plan.plan_id}>
                                <TouristPlanCard plan={plan} />
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default TouristPlansPage