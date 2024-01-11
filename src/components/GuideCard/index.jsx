import React from 'react'

const GuideCard = ({ guides }) => {
  return (
    <div>
      <h2>{guides.name}</h2>
      <h3>{guides.location}</h3>
    </div>
  )
}

export default GuideCard
