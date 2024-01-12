import React from 'react'
import { useNavigate } from 'react-router'

const SearchResult = ({ place }) => {
    const navigate = useNavigate()


    const handleNavigate = (place) => {
        const search = place.name + ", " + place.location
        navigate(`/places/placeId/${place}`, {state: {search}} )
    }


    return (
        <div key={place.place_id} className="search-card" onClick={() => { handleNavigate(place) }}>
            <img src={place.images[0]} alt="place-img" />
            <div className="search-card-info">
                <h2>{place.name}</h2>
                 <div style={{marginTop: '3em'}}>{place.description}</div>
            </div>
        </div>
    )
}

export default SearchResult