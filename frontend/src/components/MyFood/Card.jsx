import React, { useEffect,useState } from 'react'
import axiosInstance from '../../utils/axiosInstance'
import { motion } from "framer-motion";
function Card(props) {
  const item=props.userDetails
  const [foodName,setFoodName] =useState('')
  console.log(item)
  const color = {
    expired: "#EB6B6B",
    active: "#ABD700",
    requested: "#F7BD2E",
    delivered:'#6B83FF'
  };
  const text={
    expired: "Expired",
    active: "Available",
    requested: "Confirm Request",
    delivered:'Delivered'
  }
  const handleFood=async()=>{
    const foodId=await axiosInstance.get(`/food/detail/${item.foodId}`)
    setFoodName(foodId.data.food.foodName)
    console.log(foodId)
  }
  useEffect(()=>{
    handleFood()
  },[])
  return (
        <motion.div
          className="w-11/12 flex flex-row justify-between items-center bg-[#E5E5E5] rounded-md py-4 px-4"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-col gap-y-8">
            <div className="font-bold text-xl  ">Food Name : <span className="font-semibold text-black">{foodName}</span></div>
            <div>Donated date : <span>{item.timestamp.substr(0,10)
            }</span></div>
          </div>
          <div className={`bg-[${
              color[item.status]
            }] px-4 py-2 rounded-md font-medium capitalize`}>{item.status}</div>
        </motion.div>
  )
}

export default Card