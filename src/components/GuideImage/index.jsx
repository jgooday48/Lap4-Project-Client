import React from 'react'

const GuideImage = ({ guide }) => {
  return (
    <div className='guideImage'>

        <img src={guide.images} alt={guide.name} />
    </div>
  )
}

export default GuideImage
