import React, { useState } from 'react';
import './index.css';

import { useNavigate } from 'react-router';
import FiltersSection from './FiltersSection';
import { FindPlacesMatch, RenderFoundPlaces } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';


const TouristHomePage = () => {
  const [search, setSearch] = useState('');
  const [placePicked, setPlacePicked] = useState(null);
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleNavigate = () => {
    navigate(`/places/${placePicked}`, { state: { selectedFilters, search } });
  };

  return (
    <>
      <div id="topContainer">
    
        <div id="headerContainer">
          <p style={{fontSize:'30px'}}>Welcome back John Smith</p>
          <label style={{ fontWeight: 'bold', color: 'white', fontSize:'40px'}}>
            Discover the World
            <br />
            with
            <br/>
            TravelGuide

          </label>
          <h5 className="sub-heading" >
            Your ultimate companion for exploring new destinations
          </h5>

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
      </div>

      <div id="Details">
        <div id="Details1">
          <div id='DetailsText'>
            <p style={{ color:'blue'}}>DETAILS</p>
            <p style={{ fontWeight: 'bold', fontSize:'30px'}}>Plan Your Perfect Trip</p>
            <h5>Our app allows you to create a personalized day-by-day itinerary, ensuring you make the most of your time.</h5>
          </div>
          <div id='img1'>
            <img src="https://images.unsplash.com/photo-1486927819089-e4d82c5e2444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3NHw&ixlib=rb-4.0.3&q=80&w=400" alt="Description" />
          </div>
        </div>
      </div>

      <div id='Features' style={{ background:'#efefef'}}>
        <div id='Features1'style={{ background:'#efefef'}} >
          <h5 style={{color:'blue', padding:'2em'}}>FEATURES</h5>
          <h2 style={{fontWeight:'bolder'}}>Explore the Exciting Features</h2>
          <h6 style={{ padding:'2em'}}>Discover how our travel guide app can enhance your travel experience</h6>
        </div>
        <div className='feature-box-container'>
          <div className='feature-box'>
            <FontAwesomeIcon icon={faCube} style={{ color: "blue", fontWeight: '100', fontSize: '30px' }} />
            <div style={{marginLeft:'50px'}}>
            <label style={{fontSize:'30px', fontWeight:'bolder'}}>Search Activities by map</label>
              <p>Easily find and explore activities and attractions on a map</p>
              </div>
          </div>
          <div className='feature-box'>
           <FontAwesomeIcon icon={faCube} style={{ color: "blue", fontWeight: '100', fontSize: '30px' }} />

            <div style={{marginLeft:'50px'}}>
            <label style={{fontSize:'30px', fontWeight:'bolder'}}>Recommendations based on user activity</label>
            <p>Receive personalized recommendations based on your previous activity and preferences</p>
            </div>
            </div>
          <div className='feature-box'>
             <FontAwesomeIcon icon={faCube} style={{ color: "blue", fontWeight: '100', fontSize: '30px' }} />

            <div style={{marginLeft:'50px'}}>
            <label style={{fontSize:'30px', fontWeight:'bolder'}}>Actual booking system for the activities/guides</label>
              <p>Book activities and guides directly through the app with a secure and convenient booking system</p>
              </div>
          </div>
          <div className='feature-box'>
             <FontAwesomeIcon icon={faCube} style={{ color: "blue", fontWeight: '100', fontSize: '30px' }} />

            <div style={{marginLeft:'50px'}}>
            <label style={{fontSize:'30px', fontWeight:'bolder'}}>Currency converter</label>
              <p>Convert currencies to easily understand and compare prices in different currencies</p>
              </div>
          </div>
        </div>
      </div>
    
        <div id="Gallery1">
          <p style={{fontWeight:'bolder', fontSize:'40px'}}>Explore the World</p>
          <h5>Discover amazing activities and destinations</h5>
          <div className="gallery-container">
          <div className="gallery-grid">
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="1" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1568323993144-20d546ba585d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="2" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="3" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="4" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="5" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1476900543704-4312b78632f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="6" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="7" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="8" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="9" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="10" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1520106212299-d99c443e4568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="11" /></div>
            <div className="gallery-photo-card"><img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDgwMDE3M3w&ixlib=rb-4.0.3&q=80&w=400" alt="12" /></div>
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
      <div id='FAQ' style={{paddingTop:'2em'}}>
        <div id='FAQ1' style={{ color: 'white'}}>
          <h1>FAQ</h1>
          <h2>Common Questions</h2>
          <p>Here are some of the most common questions that we get.</p>
        </div>
        <div id='FAQ2' style={{ color: 'white'}}>
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
