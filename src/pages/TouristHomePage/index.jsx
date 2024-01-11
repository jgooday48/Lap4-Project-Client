import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { baseApi } from '../../utils/baseApi';
import { useNavigate } from 'react-router';
import RenderFoundPlaces from './renderFoundPlaces';
import axios from 'axios';



const TouristHomePage = () => {
  const [search, setSearch] = useState('')
  const [placePicked, setPlacePicked]= useState('')
  const [places, setPlaces] = useState([])
  const navigate = useNavigate()
  const [isSearching, setIsSearching] = useState(false)


  const handleSearch = () => {
    navigate("/places/" + search)
  }



  const findMatches = async (e) => {
    setIsSearching(true)
    setSearch(e.target.value)
    const res = await axios.get(baseApi + "places")
    const foundMatches = res.data?.data?.filter(place => place.name.toLowerCase().includes(e.target.value.toLowerCase())) || [];
    setPlaces(foundMatches)
  }



  return (
    <div id="topContainer">
      <div id="headerContainer">

        <h1>Discover the World with our Travel Guide App</h1>

        <div className='form'>

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
            <FontAwesomeIcon icon={faSearch} className='fa-search' />
            {isSearching &&
              <div className="searches">
                <RenderFoundPlaces search={search} setSearch={setSearch} places={places} setIsSearching={setIsSearching} setPlacePicked={setPlacePicked} />
              </div>
            }
            {
              placePicked.length > 0 && (
                <div>
                  <h3>Pick your filters here for your guide: </h3>
                  </div>
              )
              
            }
          </div>

        </div>


      </div>
    </div>
  );
};

export default TouristHomePage;