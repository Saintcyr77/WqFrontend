import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/back.jpg';
import civil from '../assets/civil.jpg'
import bunker from '../assets/bunker.jpg';
import gun from '../assets/gun.jpg';
import dday from '../assets/dday.jpg';
import zuikaku from '../assets/zuikaku.jpg'
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
            src={dday}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3 className='description'>D Day Landings</h3>
          <p className='description'>Operation Overload.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
             className='image-fit'
            src={zuikaku}
            alt="Second slide"
          />
        <Carousel.Caption>
<h3 className='description'>Japanese career Zuikaku sinking</h3>
<p className='description'>Sailors lowering the Rising Sun flag in one final salute as they go down with the ship.</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
              className='image-fit'
            src={bunker}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3 className='description'>USS Bunker Hill</h3>
          <p className='description'>
        Only through the unparalleled courage of hundreds of men at the risk of their lives was the Bunker Hill saved from sinking. Yet the carnage was staggering. The kamikaze attack––the single most destructive suicide mission of the war––took 393 American lives and wounded more than 250 others.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default MainBack;
