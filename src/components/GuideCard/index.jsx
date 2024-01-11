import React from 'react'

const GuideCard = ({ guide }) => {
  return (
    <div>
      <h2>{guide.name}</h2>
      <h3>{guide.email}</h3>
      <h4>{guide.filters}</h4>
    </div>
  )
}

export default GuideCard
