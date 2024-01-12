import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './SearchForm.css'
import { useLocation, useParams } from 'react-router'

const SearchForm = () => {
    const { placeId } = useParams()
    const location = useLocation()
    const searchRes = location.state && location.state.search
    const [search, setSearch] = useState(searchRes)
    

    useEffect(() => {
        console.log("Search result: ", searchRes)
    })


    return (
        <form action="" className="search-form">
            <div className="search-container">
                <FontAwesomeIcon icon={faLocationDot} id="location-dot"/>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search places..."
                    value={search}
                />
                <button className="search-button" type="submit">Search</button>
                <FontAwesomeIcon icon={faMagnifyingGlass} id="magnifying-icon"/>
            </div>
            <section className="search-filters">

            </section>


        </form>

    )
}

export default SearchForm