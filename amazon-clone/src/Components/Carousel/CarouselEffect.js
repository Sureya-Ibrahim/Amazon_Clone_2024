import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {/* {
        img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })
        } */}

        {
        img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`Item ${index + 1}`} />
        ))
        }

      </Carousel>
    </div>
  );
}

export default CarouselEffect;