import { faInfo, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './SearchForm.css'
import { useLocation, useNavigate, useParams } from 'react-router'
import FiltersSection from '../TouristHomePage/FiltersSection'
import { FindPlacesMatch } from '../../components'

const SearchForm = ({ guides, fetchGuides, fetchActivities}) => {
    const { id } = useParams()
    const location = useLocation()
    const searchRes = location.state && location.state.search
    const selectedFiltered = (location.state && location.state.selectedFilters)|| []
    const [selectedFilters, setSelectedFilters] = useState(selectedFiltered)
    const [search, setSearch] = useState(searchRes)
    const [placePicked, setPlacePicked] = useState(null)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
   
        e.preventDefault()
         console.log("handleSubmit clicked")
        if (placePicked == null) {
            fetchGuides(id, selectedFilters)
            fetchActivities(id, selectedFilters)
        } else {
            // fetchGuides(placePicked, selectedFilters)
            navigate(`/places/placeId/${placePicked}`, {state: {selectedFilters, search}})
        }
    }




    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-container">
                <FindPlacesMatch search={search} setSearch={setSearch} setPlacePicked={setPlacePicked} isHome={false} />
                <button className="search-button" >Search</button>
                
            </div>
            <section className="search-filters">
        
                <FiltersSection selectedValues={selectedFilters} setSelectedValues={setSelectedFilters} />
            </section>

            <div className="search-info">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faInfo} />
                </div>
                &nbsp;&nbsp;
                <span className="search-info-span">
                    {guides.length} guides are available in this destination.
                </span>
            </div>
        </form>

    )
}

export default SearchForm