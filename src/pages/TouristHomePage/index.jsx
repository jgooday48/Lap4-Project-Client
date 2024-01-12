import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { baseApi } from '../../utils/baseApi';
import { useNavigate } from 'react-router';

import axios from 'axios';
import FiltersSection from './FiltersSection';
import { FindPlacesMatch, RenderFoundPlaces } from '../../components';

const TouristHomePage = () => {

  const handleNavigate = () => {
    navigate(`/places/placeId/${placePicked}`, {state: {selectedFilters, search}})
  }



  return (
    <div id="topContainer">
      <div id="headerContainer">

        <h1>See the world like the local</h1>

        <div className='form'>

          <FindPlacesMatch search={search} setSearch={setSearch} setPlacePicked={setPlacePicked} isHome={true}/>

        </div>
        {placePicked != null && search.length > 0 && (
          <>
            <FiltersSection selectedValues={selectedFilters} setSelectedValues={setSelectedFilters} />
            <div>
              <button className="btn btn-light" onClick={handleNavigate}>Search</button>
            </div>
          </>
        )}
      </div>
      <div className='Sub-Head'>
        <h1>Your ultimate companion for exploring new destinations</h1>
      </div>
      <div id="Details">
        <div id="Details1">
          <div id='DetailsText'>
            <h1>DETAILS</h1>
            <h2>Plan Your Perfect Trip</h2>
            <p>Our app allows you to create a personalized day-by-day 
              <br />
              itinerary, ensuring you make the most of your time.</p>
          </div>
          <div id='img1'>
            <img src="https://images.unsplash.com/photo-1486927819089-e4d82c5e2444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3NHw&ixlib=rb-4.0.3&q=80&w=400" alt="Description" />
          </div>
        </div>
      </div>
      <div id='Features'>
        <div id='Features1'>
          <h1>Feature</h1>
          <h2>Explore the Exciting Features</h2>
          <p>Discover how our travel guide app can enhance your travel experience</p>
        </div>
        <div className='feature-box-container'>
          <div className='feature-box'>
            <h1>Search Activities by map</h1>
            <p>Easily find and explore activities and attractions on a map</p>
          </div>
          <div className='feature-box'>
            <h1>Recommendations based on user activity</h1>
            <p>Receive personalized recommendations based on your previous activity and preferences</p>
          </div>
          <div className='feature-box'>
            <h1>Actual booking system for the activities/guides</h1>
            <p>Book activities and guides directly through the app with a secure and convenient booking system</p>
          </div>
          <div className='feature-box'>
            <h1>Currency converter</h1>
            <p>Convert currencies to easily understand and compare prices in different currencies</p>
          </div>
        </div>
      </div>
      <div id="Gallery">
        <div id="Gallery1">
          <h1>Explore the World</h1>
          <p>Discover amazing activities and destinations</p>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="1" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1568323993144-20d546ba585d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="2" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="3" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="4" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="5" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1476900543704-4312b78632f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="6" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="7" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="8" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="9" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="10" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1520106212299-d99c443e4568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="11" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="12" /></div>
          </div>
        </div>
      </div>
      <div id='Booking'>
        <div id='Booking1'>
          <h1>Find and Book Exciting Activities</h1>
          <p>Explore a wide range of activities and experiences in your desired location.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div id='FAQ'>
        <div id='FAQ1'>
          <h1>FAQ</h1>
          <h2>Common Questions</h2>
          <p>Here are some of the most common questions that we get.</p>
        </div>
        <div id='FAQ2'>
          <h3>How can I search for activities on the app?</h3>
          <p>You can search for activities by using the map feature on the app.</p>
          <h3>How does the recommendation system work?</h3>
          <p>The recommendation system suggests activities based on your previous user activity and preferences.</p>
          <h3>Can I book activities directly through the app?</h3>
          <p>Yes, the app has an actual booking system where you can book activities and guides.</p>
          <h3>Is there a currency converter feature?</h3>
          <p>Yes, the app includes a currency converter to help you with currency conversions.</p>
          <h3>Can I plan my day using the app?</h3>
          <p>Yes, the app provides a day planner feature to help you plan your activities.</p>
        </div>
      </div>
    </>
  );
};

export default TouristHomePage;