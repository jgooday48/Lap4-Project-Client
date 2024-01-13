import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { useLocation, useParams } from 'react-router';
import { baseApi } from '../../utils/baseApi';
import SearchForm from './SearchForm';
import SearchedGuides from './SearchedGuides';
import './index.css'
import SearchedActivities from './SearchedActivities';

const TouristGuidePage = () => {
  const [guides, setGuides] = useState([]);
  const location = useLocation()
  const searchRes = location.state && location.state.search

  const filters = (location.state && location.state.selectedFilters) || []
  const { id } = useParams()


  const fetchGuides = async (id, filters) => {
    await axios.get(`${baseApi}guides/placeId:${id}`)
      .then(res => {
        const filteredData = res.data.filter(place => {
          if (filters.length > 0) {
            return filters.some(filter => place.filters.includes(filter));
          } else {
            return res.data
          }
        });
        console.log(filteredData);
        setGuides(filteredData)
      })
      .catch(e => console.log(e))
  };


  useEffect(() => {
    fetchGuides(id, filters);
  }, []);

  return (
    <div className="your-guides">
      <div>
        <h4>See the world like the local</h4>
      </div>
      <SearchForm guides={guides} fetchGuides={fetchGuides} />
      <div className="results">
        <section className="guides">
          <SearchedGuides searchRes={searchRes} />
        </section>
        <section className="activities">
          <SearchedActivities />
        </section>
      </div>
    </div>
  );
};


export default TouristGuidePage
