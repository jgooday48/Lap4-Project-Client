import React from 'react'

const GuideImage = ({ guide }) => {
  return (
    <div>

        <img src={guide.images} alt={guide.name} />
    </div>
  )
}

export default GuideImage
