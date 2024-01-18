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
  const [activities, setActivities] = useState([])
  const [activitiesNotSelected, setActivitiesNotSelected] = useState([])
  const [guidesNotSelected, setGuidesNotSelected] = useState([])
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
        setGuides(filteredData)
        const guidesUnSelected = res.data.filter(guide => !filteredData.includes(guide))
        setGuidesNotSelected(guidesUnSelected)
        console.log("not selected guides: ", guidesNotSelected)
      })
      .catch(e => console.log(e))
  };
  const fetchActivities = async (id, filters) => {
    await axios.get(`${baseApi}activities/placeId:${id}`)
      .then(res => {
        const filteredData = res.data.filter(activity => {
          if (filters.length > 0) {
            return filters.some(filter => activity.filters.includes(filter));
          } else {
            return res.data
          }
        });
        setActivities(filteredData)
        const activitiesUnSelected = res.data.filter(activity => !filteredData.includes(activity));
        setActivitiesNotSelected(activitiesUnSelected);
        console.log("not AC: ", activitiesNotSelected)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    fetchGuides(id, filters);
    fetchActivities(id, filters)
  }, []);

  return (
    <div className="your-guides">
      <div style={{marginLeft:'2em'}}>
        <h4><b>See the world like a local</b></h4>
      </div>
      <SearchForm guides={guides} fetchGuides={fetchGuides} fetchActivities={fetchActivities} />
      <div className="results">
        <div className="two-thirds">
          <section className="guides">
            <SearchedGuides searchRes={searchRes} guides={guides} />
          </section>
        </div>

        <section className="activities">
          <SearchedActivities activities={activities} />
        </section>

      </div>

    </div>
  );
};


export default TouristGuidePage
