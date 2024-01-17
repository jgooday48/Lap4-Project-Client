import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';

const ImageCarousel = ({ guide }) => {

  console.log(guide)
  return (
    <div className="carousel">
      <Carousel interval={null}>
        {guide.map((image, idx) => (
          <Carousel.Item key={idx} className="carousel-item" style={{ width: '500px', height: '600px' }}>
            {image && <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={`image-${idx}`} />}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
