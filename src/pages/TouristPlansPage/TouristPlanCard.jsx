import React, { useEffect } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import { useState } from 'react'
import './TouristPlanCard.css'
import { useNavigate } from 'react-router'

const TouristPlanCard = ({ plan }) => {
    const [image, setImage] = useState("")
    const [destination, setDestination] = useState("")
    const [placeImage, setPlaceImage] = useState()
    const [guideName, setGuideName] = useState("")
    const guideId = plan.guide_id
    const placeId = plan.place_id
    const dateFrom = plan.date_from
    const dateTime = new Date(dateFrom);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateTime.toLocaleString('en-US', options);
    const status = plan.status
    const navigate = useNavigate()


    let emoji;

    if (status == 'Booked') {
        emoji = '📅';
    } else if (status == 'Ongoing') {
        emoji =  '⌛'; //
    } else if (status == 'Completed') {
        emoji = '✅';
    } else if (status == 'Updated'|| status=='Updating') {
        emoji = '🔄'
    } else if (status == 'Cancelled' ) {
        emoji = '❌';
    } else {
        emoji = '❓'
    }


    const fetchGuideByGuideId = async () => {

        await axios.get(baseApi + "guides/" + guideId)
            .then(res => {
                setGuideName(res.data.data.name)
                setImage(res.data.data.images[0])
            })
            .catch(e => console.log(e))
    }

    const fetchPlaceByPlaceId = async () => {
        await axios.get(baseApi + "places/" + placeId)
            .then(res => {
                setDestination(res.data.data.name + ", " + res.data.data.location)
                setPlaceImage(res.data.data.images[0])
            }
            )
            .catch(e => console.log(e))
    }


    useEffect(() => {
        fetchGuideByGuideId()
        fetchPlaceByPlaceId()

    }, [guideId])



    const handleClick = () => {
        navigate(`/plans/${plan.plan_id}`, {state: {plan, image, guideName}})
    }





    return (
        <div className="tourist-plan-card" onClick={handleClick}>
            <img src={image} alt="guide-image" />
            <div className="plan-info">
                <b>Plan for {destination} on {formattedDate} </b>
                <p>With {guideName}</p>
                <p>Status: {status} {emoji}</p>
            </div>

        </div>
    )
}

export default TouristPlanCard