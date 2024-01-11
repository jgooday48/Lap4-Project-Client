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
  const [places, setPlaces] = useState([])
  const navigate = useNavigate()


  const handleSearch = () => {
    navigate("/places/" + search)
  }



  const findMatches = async (e) => {
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
            <div className="searches"><RenderFoundPlaces search={search} places={places} /></div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default TouristHomePage;