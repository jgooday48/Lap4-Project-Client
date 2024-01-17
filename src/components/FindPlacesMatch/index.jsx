
import React from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import RenderFoundPlaces from '../RenderFoundPlaces'
import './index.css'



const FindPlacesMatch = ({ search, setSearch, setPlacePicked, isHome}) => {
    const [isSearching, setIsSearching] = useState(false)
    const navigate = useNavigate()
    const [places, setPlaces] = useState([])



    const handleSearch = () => {
        navigate("/places/" + search)
    }



    const findMatches = async (e) => {
        if (search.length === 0) {
            setPlacePicked(null)
        }
        setIsSearching(true)
        setSearch(e.target.value)
        const res = await axios.get(baseApi + "/places")
        const foundMatches = res.data?.data?.filter(place => (place.name.toLowerCase().includes(e.target.value.toLowerCase())) || place.location.toLowerCase().includes(e.target.value.toLowerCase())) || [];
        setPlaces(foundMatches)
    }
    return (
        <div className='search-bar'>
            <input
                type='text'
                className='form-control input'
                placeholder='Search places...'
                value={search}
                onChange={e => findMatches(e)}
                onKeyDown={e => {
                    if (e.key === 'Enter') handleSearch()
                }}
            />
            {isHome ? (
                < FontAwesomeIcon icon={faSearch} className='fa-search' />
            ) : (
                <FontAwesomeIcon icon={faLocationDot} className='fa-location'/>   
            )}
        
            {isSearching &&
                <div className="searches">
                    <RenderFoundPlaces search={search} setSearch={setSearch} places={places} setIsSearching={setIsSearching} setPlacePicked={setPlacePicked} />
                </div>
            }
        </div>
    )
}

export default FindPlacesMatch
