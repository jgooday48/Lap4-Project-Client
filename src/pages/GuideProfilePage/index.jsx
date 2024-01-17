import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseApi } from '../../utils/baseApi'
import { ImageCarousel } from '../../components'
import './index.css'
import GuideForm from './GuideForm'
import SearchedActivities from '../TouristGuidePage/SearchedActivities'
import { toast } from 'react-toastify'
import { filters } from '../../utils/filters'
import GuideReviews from '../IndividualGuidePage/GuideReviews'


const GuideProfilePage = () => {
  const guideId = sessionStorage.getItem("guide_id")
  const [guide, setGuide] = useState([])
  const [place, setPlace] = useState([])
  const [selectedValues, setSelectedValues] = useState([])
  const [activities, setActivities] = useState([])
  const [images, setImages] = useState([])
  console.log("guideId: ", guideId)

  const fetchGuide = async () => {

    await axios.get(baseApi + "guides/" + guideId)
      .then(res => {
 
        if (res.data[0]) {
          setGuide(res.data[0])
          setSelectedValues(res.data[0].filters)
            fetchPlace(res.data[0].place_id)
          fetchActivitesByGuide(res.data[0].guide_id)
          setImages(res.data[0].images)
        
        }
    

        // setSelectedValues(res.data?.data?.filters)
        // const g = res.data?.data
        // if (g) {
        //   fetchPlace(g.place_id)
        //   fetchActivitesByGuide(g.guide_id)
        //   setImages(g.images)
        // }

      })
      .catch(e => console.log(e))
  }

  console.log("guide: ", guide)

  const fetchPlace = async (id) => {
    await axios.get(baseApi + "places/" + id)
      .then(res => setPlace(res.data?.data))
      .catch(e => console.log(e))
  }

  const fetchActivitesByGuide = async (id) => {
    await axios.get(baseApi + "guides/guideId:" + id + "/activities")
      .then(res => setActivities(res.data))
      .then(e => console.log(e))
  }

  const updateGuide = async (e) => {
    e.preventDefault()
 
    const matchedValues = selectedValues.map(key => filters[key]);
    const body = {
      "filters": matchedValues
  
    }

    await axios.patch(baseApi + "guides/" + guideId, body)
      .then(() => fetchGuide())
      .then(() => toast.success('The profile has been updated', { autoClose: 3000 }))
      .catch(e => {
        console.log(e)
        toast.error('The profile cannot be updated', { autoClose: 3000 })
      })
  }

  useEffect(() => {
    fetchGuide()
    console.log("guideId: " + guideId)
  }, [guideId])

  return (
    <div>

      <div>
        <h1>Profile</h1>
      </div>
      <div className="guide-profile">
        <section style={{ width: '30%' }}>
          <ImageCarousel images={images} />
        </section>
        <section className="guide-info">
          <GuideForm guide={guide} place={place} selectedValues={selectedValues} setSelectedValues={setSelectedValues} updateGuide={updateGuide} />
  </section>
        <section className="guide-activities-in-guide">
          <SearchedActivities activities={activities} />
        </section> 
     
      </div>
           <section className="guide-reviews">
        <b>Client reviews</b>
        <GuideReviews id={guideId}/>
      </section>
    </div>
  )
}

export default GuideProfilePage

