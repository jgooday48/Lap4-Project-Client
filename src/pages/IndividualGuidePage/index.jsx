import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GuideCard, BackButton } from '../../components';
import { baseApi } from '../../utils/baseApi'
const IndividualGuidePage = () => {
  const [guide, setGuide] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const displayGuide = async () => {
      try {
        const { data } = await axios.get(`${baseApi}/guides`);
        const guideData = data['all guides'].find(g => g.guide_id === Number(id));
        setGuide(guideData || {});
      } catch (error) {
        console.error('Error fetching guide:', error);
      }
    };
    displayGuide();
  }, [id]);

  return (
    <div className='guidesPage'>
      <h1>Guide page</h1>
      <GuideCard guide={guide} />
      <BackButton />
    </div>
  );
};

export default IndividualGuidePage;
