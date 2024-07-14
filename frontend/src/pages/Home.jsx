import React from 'react'
import Carousel from '../components/home/carousel';
import WebsiteFeatures from '../components/home/features';
import Contact from '../components/home/contact';
import About from '../components/home/about';
import Delivery from '../components/home/delivery';
function Home() {
  const images = [
    'https://st3.depositphotos.com/19129450/36983/i/450/depositphotos_369839526-stock-photo-banner-donation-food-supplies-crisis.jpg',
    'https://img.freepik.com/premium-vector/people-giving-donation-box-with-food-charity-solidarity_37925-5451.jpg',
    'https://previews.123rf.com/images/addtodsaporn/addtodsaporn1910/addtodsaporn191000119/132655197-the-hands-of-the-poor-receive-charity-food-service-from-volunteers-the-concept-of-poverty-and-hungry.jpg',
  ];
  return (
    <div>
         <Carousel images={images} />
         <WebsiteFeatures/>
         <Delivery/>
         <Contact/>
         <About/>
    </div>
  )
}

export default Home