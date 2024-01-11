import React from 'react'
import { useNavigate } from 'react-router'

const SearchResult = ({ place }) => {
    const navigate = useNavigate()


    const handleNavigate = (id) => {
        navigate(`/place/${id}`)
    }


    return (
        <div key={place.place_id} className="search-card" onClick={() => { handleNavigate(place.place_id) }}>
            <img src={place.images[0]} alt="place-img" />
            <div className="search-card-info">
                <h2>{place.name}</h2>
                 <div style={{marginTop: '3em'}}>{place.description}</div>
            </div>
        </div>
    )
}

export default SearchResult