import React from 'react'
import { useParams } from 'react-router'

const GuideEachPlanPage = () => {
    const{id} = useParams()
  return (
      <div>GuideEachPlanPage
          

          <div>{id}</div>
      </div>
      
  )
}

export default GuideEachPlanPage