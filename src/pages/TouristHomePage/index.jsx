import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { baseApi } from '../../utils/baseApi';

const TouristHomePage = () => {
  const [search, setSearch] = useState('')


  const handleSearch = () => {
    
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
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSearch()
              }}
            />
            <FontAwesomeIcon icon={faSearch} className='fa-search'/>
          </div>

        </div>
  
      
      </div>
    </div>
  );
};

export default TouristHomePage;