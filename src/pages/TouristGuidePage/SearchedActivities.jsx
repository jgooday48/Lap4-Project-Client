import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import { useLocation, useParams } from 'react-router'

const SearchedActivities = ({activities}) => {



  return (
      <>
      <h3>Activities</h3>
      {
        activities.map(a => 
          <div key={a.activity_id}> {a.name}</div>
        )
      }
    </>
  )
}

export default SearchedActivities