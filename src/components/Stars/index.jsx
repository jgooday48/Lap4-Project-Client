import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Stars = ({ num }) => {

  const roundedNum = Math.round(num * 2) / 2;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index + 0.5 === roundedNum) {
      return <FontAwesomeIcon key={index} icon={faStarHalf} style={{ color: 'gold' }} />;
    }
    if (index + 1 <= roundedNum) {
      return <FontAwesomeIcon key={index} icon={faStar} style={{ color: 'gold' }} />;
    }
    return <FontAwesomeIcon key={index} icon={faStar} style={{ color: 'gainsboro' }} />;
  });

  return <div>{stars}</div>;
};

export default Stars