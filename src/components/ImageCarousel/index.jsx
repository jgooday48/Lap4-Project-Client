import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';

const ImageCarousel = ({ images }) => {

  console.log(images)
  return (
    <div className="carousel">
      {images.length < 10 ? (
        <Carousel interval={null}>
          {images?.map((image, idx) => (
            <Carousel.Item key={idx} className="carousel-item" style={{ width: '500px', height: '600px' }}>
              {image && <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={`image-${idx}`} />}
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
             <Carousel interval={2000}>
          {images?.map((image, idx) => (
            <Carousel.Item key={idx} className="carousel-item" style={{ width: '500px', height: '600px' }}>
              {image && <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={`image-${idx}`} />}
            </Carousel.Item>
          ))}
        </Carousel>
          
          
        )}
    </div>
  );
};

export default ImageCarousel;
