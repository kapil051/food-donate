import React from 'react'
import image from "../../assets/background_img/delivery.gif"
function Delivery() {
  return (
    <div>
        <div className="flex flex-col items-center "  >
      <p class="my-3 text-3xl font-semibold underline text-[#15803D] underline-offset-4 ">DOOR PICKUP</p>
      <br/>
      <p  className="space-y-1 leading-tight text-center md:px-2 px-8">"Your donate will be immediately collected and sent to needy people "</p>
      <img src={image} alt="" />

    </div>
    </div>
  )
}

export default Delivery