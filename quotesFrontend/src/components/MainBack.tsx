import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/back.jpg';
import civil from '../assets/civil.jpg'
import bunker from '../assets/bunker.jpg';
import gun from '../assets/gun.jpg';
import { useState } from 'react';
import './main.scss';

const MainBack: React.FC = () => {
      const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };
  return (
      <div>
          
     <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
      <Carousel.Item>
         <img
           className='image-fit'
            src={ExampleCarouselImage}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
             className='image-fit'
            src={civil}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
              className='image-fit'
            src={bunker}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default MainBack;
