import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { baseApi } from '../../utils/baseApi'
import axios from 'axios'



const GuidePlanCard = ({ plan }) => {
    const [image, setImage] = useState("")
    const [destination, setDestination] = useState("")
    const [placeImage, setPlaceImage] = useState()
    const [touristName, setTouristName] = useState("")
    const touristId = plan.tourist_id
    const placeId = plan.place_id
    const dateFrom = plan.date_from
    const dateTime = new Date(dateFrom);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateTime.toLocaleString('en-US', options);
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: false };
    const formattedTime = dateTime.toLocaleString('en-US', timeOptions);

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

      const fetchTouristByTouristId = async () => {
        //   await axios.get("http://127.0.0.1:5000/tourist/2")
        await axios.get(baseApi + "tourist/" + plan?.tourist_id)
            .then(res => {
                // setTouristName(res.data.data.name)
                setTouristName(res.data[0].name)
                setPlaceImage(res.data[0].images[0])
            })
            .catch(e => console.log(e))
    }

       const fetchPlaceByPlaceId = async () => {
        await axios.get(baseApi + "places/" + placeId)
            .then(res => {
                setDestination(res.data.data.name + ", " + res.data.data.location)
                // setPlaceImage(res.data.data.images[0])
            }
            )
            .catch(e => console.log(e))
    }


    useEffect(() => {
        fetchTouristByTouristId()
        fetchPlaceByPlaceId()
    }, [])

    const handleClick = () => {
        navigate(`/guidePlans/${plan.plan_id}` , {state: {plan, placeImage, touristName}} ) 
    }


    

  return (
      <div className="tourist-plan-card" onClick={handleClick}>
            <img src={placeImage} alt="guide-image" />
            <div className="plan-info">
                <b>{formattedDate} at {formattedTime} </b>
                <p>With {touristName}</p>
                <p>Status: {status} {emoji}</p>
            </div>

        </div>
  )
}

export default GuidePlanCard