import React from 'react';

// Display information about a guide
// Props: name, username, email, specialisation

const GuidePanel = ({name, username, email, specialisation}) => {


  return (
    <div>
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Location: {location}</p>
      <p>Specialisation: {specialisation}</p>
    </div>
  );
}

export default GuidePanel;
