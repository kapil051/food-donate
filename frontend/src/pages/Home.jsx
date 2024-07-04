import React from 'react'
import Carousel from '../components/home/carousel';
function Home() {
  const images = [
    'https://via.placeholder.com/800x400.png?text=Slide+1',
    'https://via.placeholder.com/800x400.png?text=Slide+2',
    'https://via.placeholder.com/800x400.png?text=Slide+3',
  ];
  return (
    <div>
         <Carousel images={images} />
    </div>
  )
}

export default Home