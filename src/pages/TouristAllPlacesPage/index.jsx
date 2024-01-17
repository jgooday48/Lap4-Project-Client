import React, { useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import { useEffect } from 'react'
import SearchResult from './SearchResult'
import './index.css'

const TouristAllPlacesPage = () => {
    const { search } = useParams()
    const [places, setPlaces] = useState([])

    const getAllPlaces = () => {
        axios.get(baseApi + "places")
            .then(res => {
                setPlaces(res.data?.data)
            })
            .catch(e => console.log(e))

    }

    useEffect(() => {
        getAllPlaces()
        console.log(searchedPlaces)
    }, [])

    const getSearchedPlaces = (searchTerm) => {
       const searchedRes = places?.filter(
        place => 
            (place.name && place.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (place.location && place.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return searchedRes;
    }

    const searchedPlaces = getSearchedPlaces(search)


    return (
        <div>
            {searchedPlaces.length > 0 ? (
                <div>
                    {searchedPlaces.map((place) => (
                        <div key={place.place_id}>
                            <SearchResult place={place} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>There were no matches for your search term.</div>
            )}
        </div>
    );


}

export default TouristAllPlacesPage
