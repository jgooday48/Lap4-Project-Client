import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { GuideCard} from '../../components'
const GuidePage = () => {

    const [guide, setGuide] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const displayGuide = async () => {
            const { data } = await axios.get(`http://localhost:5000/guides/${id}`)
            setGuide(data)
        }
        displayGuide()
    }, [])
   return (
    <GuideCard guides={guide}/>
  )
}

export default GuidePage
