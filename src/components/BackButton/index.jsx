import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const BackButton = () => {

    const goTo = useNavigate();

    return (
        <div className="back-btn-container">
            <button className="btn btn-secondary btn-lg back-btn" style={{ width: '120px', borderRadius: '50px' }} onClick={() => goTo(-1)}>
            <div className="back-btn-icon">
                    <FontAwesomeIcon icon={faReply} /> 
                    </div>
                <b>Back</b></button>
    </div>
    )
}

export default BackButton
