import React from 'react';

const GuideList = ({ guides }) => {
  return (
    <div>
      <h1>List of Guide Names</h1>
      <ul>
        {guides.map((guide) => (
          <li key={guide.guide_id}>{guide.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuideList;

