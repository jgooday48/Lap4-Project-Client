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
  const { id } = useParams();
   const location = useLocation()
  const placeName = location && location.state.searchRes


      const displayGuide = async () => {
      try {
        const { data } = await axios.get(`${baseApi}guides`);
        const guideData = data['all guides'].find(g => g.guide_id === Number(id));
        setGuide(guideData || {});
      } catch (error) {
        console.error('Error fetching guide:', error);
      }
  };

  useEffect(() => {
    displayGuide();

 
  }, []);

  return (
    <div className='guidesPage'>
      <h1>Guide Profile</h1>
          <BackButton />
      <GuideCard guide={guide} placeName={placeName} />
      <section className="guide-activities">
        <b>Activities</b>
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
