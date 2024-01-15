import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const goTo = useNavigate();

    return(
        <button className="btn btn-secondary back-btn" onClick={() => goTo(-1)}>&larr; Go Back</button>
    )
}

export default BackButton
