import React from 'react'

const GuideCard = ({ guide, place }) => {
  return (
    <div className='Guide'>
      <h2>Name: {guide.name}</h2>
      <h3>Email: {guide.email}</h3>
      <h4>Specialities: {guide.filters}</h4>
      <h4>Location: {place && place.name ? place.name : 'Unknown'}</h4>
    </div>
  )
}

export default GuideCard
