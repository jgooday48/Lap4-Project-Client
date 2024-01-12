import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { GuidesList } from '../../components';  // Adjust the import path based on your project structure
import { useLocation, useParams } from 'react-router';
import { baseApi } from '../../utils/baseApi';
import SearchForm from './SearchForm';

const TouristGuidePage = () => {
  const [guides, setGuides] = useState([]);
  const location = useLocation()
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
    </div>
  );
};


export default TouristGuidePage
