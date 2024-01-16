import React from 'react'
import { useNavigate } from 'react-router'
import { removeTouristGuidePair } from '../../utils/removeTouristGuidePair'
import Swal from 'sweetalert2'

const TouristWatchListCard = ({ guide }) => {
    const navigate = useNavigate()
    const touristId = localStorage.getItem('touristId')
    
    const handleClick = () => {
        navigate("/touristguidepage/" + guide.guide_id)
        
    }

    const handleX = async() => {
             const isConfirmed = await Swal.fire({
  title: 'Are you sure?',
  text: 'You won\'t be able to revert this!',
  icon: 'success', // or 'error', 'info', 'question'
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, remove from watchlist!'
             });
        
        if (isConfirmed.isConfirmed) {
            removeTouristGuidePair(guide.guide_id, touristId)
            window.location.reload()
        }


    }

    


  return (
      <div className="tourist-watchlist-card" >
          <img src={guide.images[0]} alt="guide-image" onClick={handleClick} />
          <div className="x-icon" onClick={handleX}>
              &#10006;
          </div>
    </div>
  )
}

export default TouristWatchListCard