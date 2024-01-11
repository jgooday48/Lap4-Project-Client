import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router'



const RenderFoundPlaces = ({ search, setSearch, places, setIsSearching, setPlacePicked}) => {
  const navigate = useNavigate()
  
  if (!search || places.length === 0) return null

  const handleClick = (e, name) => {
    e.preventDefault()
    setSearch(name)
    setIsSearching(false)
    setPlacePicked(name)
  
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
          return (
            <div
              className='search-result'
              key={place.place_id}
              onClick={(e) => handleClick(e, place.name)}
            >
              <FontAwesomeIcon icon={faLocationDot} style={{ color: '#9ca3af' }} />
              <div
                className='search-result-text'
                dangerouslySetInnerHTML={{ __html: titleWithBoldedSearch }}
              ></div>

            </div>
          )
        })
      }
    </ul>
  )
}

export default RenderFoundPlaces