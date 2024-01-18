import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GuideCard, BackButton } from '../../components';
import { baseApi } from '../../utils/baseApi'
import { useLocation } from 'react-router-dom';
import './index.css'
import GuideActivities from './GuideActivities';
import GuideReviews from './GuideReviews';

const IndividualGuidePage = () => {
  const [guide, setGuide] = useState([]);
  const placeId = guide?.place_id
  const { id } = useParams();
const [placeName, setPlaceName] = useState('')

      const displayGuide = async () => {
      try {
        const { data } = await axios.get(`${baseApi}guides`);
        const guideData = data['all guides'].find(g => g.guide_id === Number(id));
        setGuide(guideData || []);
        if (guide) {
          fetchPlaceDeets(guideData.place_id)
        }
      } catch (error) {
        console.error('Error fetching guide:', error);
      }
  };

  const fetchPlaceDeets = async (placeId) => {
    await axios.get(`${baseApi}places/${placeId}`)
      .then(res => setPlaceName(res.data.data.name+ ", " + res.data.data.location))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    displayGuide();
  
 
  }, []);

  return (
    <div className='guidesPage'>
      <div style={{padding:'3em'}}>
      <BackButton />
      
      <h4 style={{paddingTop:'3em'}}><b>Guide Profile</b></h4>
   
        <GuideCard guide={guide} placeName={placeName} />
      </div>
      <section className="guide-activities">
        <b style={{paddingLeft:'3em'}}>Activities</b>
        <GuideActivities id={id}/>
      </section>
      <section className="guide-reviews">
        <b>Client reviews</b>
        <GuideReviews id={id}/>
      </section>
    </div>
  );
};

export default IndividualGuidePage;
