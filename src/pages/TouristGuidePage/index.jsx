import React, { useState, useEffect} from 'react'

import axios from 'axios';
import { GuidesList } from '../../components';  // Adjust the import path based on your project structure
import { useLocation } from 'react-router';

const TouristGuidePage = () => {
  const [guides, setGuides] = useState([]);
  const location = useLocation()
  const filters = location.state && location.state.filters


     const fetchGuides = async () => {
      // try {
      //   const { data } = await axios.get('http://localhost:5000/guides');  // Update the API endpoint
      //   setGuides(data['all guides']);
      // } catch (error) {
      //   console.error('Error fetching guides:', error);
      //   setGuides([]); // Set guides to an empty array in case of an error
      // }
    };


  useEffect(() => {
    console.log(filters)
 
    fetchGuides();
  }, []);

  return (
    <div>
      <h1>List of Guides</h1>
      <GuidesList guides={guides} />
      <h2>List of Activities </h2>
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
