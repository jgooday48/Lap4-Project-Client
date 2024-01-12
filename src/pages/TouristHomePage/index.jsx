import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { baseApi } from '../../utils/baseApi';
import { useNavigate } from 'react-router';

import axios from 'axios';
import FiltersSection from './FiltersSection';
import { FindPlacesMatch, RenderFoundPlaces } from '../../components';


const TouristHomePage = () => {
  const [search, setSearch] = useState('')
  const [placePicked, setPlacePicked] = useState(null)
  // const [places, setPlaces] = useState([])
  const navigate = useNavigate()
  // const [isSearching, setIsSearching] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([]);


  // const handleSearch = () => {
  //   navigate("/places/" + search)
  // }



  // const findMatches = async (e) => {
  //   if (search.length === 0) {
  //     setPlacePicked(null)
  //   }
  //   setIsSearching(true)
  //   setSearch(e.target.value)
  //   const res = await axios.get(baseApi + "places")
  //   const foundMatches = res.data?.data?.filter(place => (place.name.toLowerCase().includes(e.target.value.toLowerCase()))|| place.location.toLowerCase().includes(e.target.value.toLowerCase()) )|| [];
  //   setPlaces(foundMatches)
  // }

  const handleNavigate = () => {
    navigate(`/places/placeId/${placePicked}`, {state: {selectedFilters, search}})
  }



  return (
    <div id="topContainer">
      <div id="headerContainer">

        <h1>See the world like the local</h1>

        <div className='form'>

          <FindPlacesMatch search={search} setSearch={setSearch} setPlacePicked={setPlacePicked} isHome={true}/>
          {/* <div className='search-bar'>
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
            <FontAwesomeIcon icon={faSearch} className='fa-search' />
            {isSearching &&
              <div className="searches">
                <RenderFoundPlaces search={search} setSearch={setSearch} places={places} setIsSearching={setIsSearching} setPlacePicked={setPlacePicked} />
              </div>
            }
          </div> */}

        </div>
        {
          placePicked != null && search.length > 0 && (
          <>
            <FiltersSection selectedValues={selectedFilters} setSelectedValues={setSelectedFilters} />
            <div>
              <button className="btn btn-light" onClick={handleNavigate}>Search</button>  
            </div>
          </>
              
          )

        }


      </div>
    </div>
  );
};

export default TouristHomePage;