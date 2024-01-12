import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router'



const RenderFoundPlaces = ({ search, setSearch, places, setIsSearching, setPlacePicked}) => {
  const navigate = useNavigate()
  
  if (!search || places.length === 0) return null

  const handleClick = (e, place) => {
    e.preventDefault()
    setSearch(place.name + ", " + place.location)
    setIsSearching(false)
    setPlacePicked(place.place_id)
  
  }

  return (
    <ul>
      {
        places.map(place => {
          const regex = new RegExp(`(${search})`, 'gi')
          const titleWithBoldedSearch = place.name.replace(
            regex,
            '<strong>$1</strong>'
          )
          const boldPlace = place.location.replace(
            regex,
            '<strong>$1</strong>'
          )
          return (
            <div
              className='search-result'
              key={place.place_id}
              onClick={(e) => handleClick(e, place)}
            >
              <FontAwesomeIcon icon={faLocationDot} style={{ color: '#9ca3af' }} />
              <div
                className='search-result-text'
                dangerouslySetInnerHTML={{ __html: titleWithBoldedSearch+ ', ' + boldPlace }}
              ></div>

            </div>
          )
        })
      }
    </ul>
  )
}

export default RenderFoundPlaces