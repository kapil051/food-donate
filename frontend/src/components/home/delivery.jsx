import React from 'react'
import image from "../../assets/lottie/delivery.json"
import Lottie from "react-lottie";
function Delivery() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='bg-[#FFFFFF] pt-16'>
        <div className="flex flex-col items-center "  >
      <p class="text-4xl font-bold leading-tight lg:text-5xl text-[#353535] ">DOOR PICKUP</p>
      <br/>
      <p  className="space-y-1 leading-tight text-center text-lg py-4 md:px-2 px-8">"Your donate will be immediately collected and sent to needy people "</p>
      <Lottie options={defaultOptions}  />

    </div>
    </div>
  )
}

export default Delivery