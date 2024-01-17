import React, { useState } from 'react'
import Filters from '../../components/Filters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import './GuideForm.css'
import axios from 'axios'


const GuideForm = ({ guide, place, selectedValues, setSelectedValues, updateGuide}) => {
  
const location = place?.name + ", " + place?.location

    return (
        <form onSubmit={updateGuide}>
            <h4><b>Profile details</b> </h4>
            <div className='col-6 form-input' style={{marginTop: '2em'}}>
                <b>Name: </b>
                <input type="text" className='form-control' value={guide?.name} disabled />
            </div>
            <div className='col-6 form-input'>
                <b>Username: </b>
                <input type="text" className='form-control' value={guide?.username} disabled />
            </div>
            <div className='col-6 form-input'>
                <b>Email:</b>
                <input type="text" className='form-control' value={guide?.email} disabled />
            </div>
            <div className='col-6 form-input'>
                <b>Location:</b>
                <input type="text" className='form-control' value={location} disabled />
            </div>

            <div className='col-10 form-input'>
                <b>Info:</b>
                <textarea type="text" className='form-control' rows='5' value={guide?.info} />
            </div>
            <div className='col-10 form-input'>
                <b>Tagline:</b>
                <input type="text" className='form-control' value={guide?.tagline} />
            </div>
            <div>
                <b>Filters:</b>
                <p><FontAwesomeIcon icon={faInfo} /> &nbsp; Expand your activity services by add more filters</p>
                <div className="guide-filters">
                    <Filters selectedValues={selectedValues} setSelectedValues={setSelectedValues} isGuide={true} />
                </div>
            </div>
            <button className="btn btn-secondary">Update Profile</button>

        </form>

    )
}

export default GuideForm
