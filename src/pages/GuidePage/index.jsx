// GuidePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GuideCard } from '../../components';

const GuidePage = () => {
  const [guide, setGuide] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const displayGuide = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/guides`);
        const guideData = data['all guides'].find(g => g.guide_id === Number(id));
        setGuide(guideData || {});
      } catch (error) {
        console.error('Error fetching guide:', error);
      }
    };
    displayGuide();
  }, [id]);

  return (
    <>
      <h1>Guide page</h1>
      <GuideCard guide={guide} />
    </>
  );
};

export default GuidePage;
