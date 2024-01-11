import React from 'react';
import { Link } from 'react-router-dom'
const GuideList = ({ guides }) => {
  return (
    <div>


        {guides.map((guide) => (
          <Link to={`${guide.guide_id}`} key={guide.guide_id}>
            {guide.name}
          </Link>
        ))}

    </div>
  );
};

export default GuideList;

