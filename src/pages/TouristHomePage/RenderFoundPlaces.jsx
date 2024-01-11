import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router'



const RenderFoundPlaces = ({ search, places }) => {
  const navigate = useNavigate()
  
  if (!search || places.length === 0) return null



  const handleClick = (e, id) => {
    e.preventDefault()
    navigate(`/place:${id}`)

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
              onClick={(e) => handleClick(e, place.place_id)}
            >
              <FontAwesomeIcon icon={faSearch} style={{ color: '#9ca3af' }} />
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