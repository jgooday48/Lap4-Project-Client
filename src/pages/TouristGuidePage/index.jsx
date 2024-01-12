import React, { useState, useEffect} from 'react'

import axios from 'axios';
import { GuidesList } from '../../components';  // Adjust the import path based on your project structure
import { useLocation, useParams } from 'react-router';
import { baseApi } from '../../utils/baseApi';
import SearchForm from './SearchForm';

const TouristGuidePage = () => {
  const [guides, setGuides] = useState([]);
  const location = useLocation()
  const filters = location.state && location.state.selectedFilters
  const {id} = useParams()


  const fetchGuides = async () => {
    // await axios.get("http://127.0.0.1:5000/guides/placeId:2")
    await axios.get(`${baseApi}guides/placeId:${id}` )
      .then(res => {
        console.log(res.data)
        setGuides(res.data)
      })
      .catch(e => console.log(e))
    };


  useEffect(() => {
    fetchGuides();
  }, []);

  return (
    <div className="your-guides">
      <div>
        <h4>See the world like the local</h4>
      </div>
      <SearchForm guides={guides} />


    
    </div>
  );
};




// const TouristGuidePage = () => {

  
//   return (
//     <div>
//       <h2>TouristGuidePage</h2>
//       <GuidePanel />

//       </div>
//   )
// }

export default TouristGuidePage
