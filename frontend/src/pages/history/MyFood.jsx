import React from "react";
import { history } from "../../utils/data/MyFood";
import Lottie from "react-lottie";
import image from "../../assets/lottie/donation.json";
import { motion } from "framer-motion";
function MyFood() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const color = {
    expired: "#EB6B6B",
    available: "#ABD700",
    requested: "#F7BD2E",
    delivered:'#6B83FF'
  };
  return (
    <div className="bg-[#F5F5F5] pt-16 flex flex-col items-center gap-y-14 pb-20">
      <Lottie options={defaultOptions} height={400} width={400} />
      {history.map((item) => (
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
            <div className="font-bold text-xl  ">Food Name : <span className="font-semibold text-black">{item.foodName}</span></div>
            <div>Donated date : <span>{item.donatedDate}</span></div>
          </div>
          <div className={`bg-[${
              color[item.status]
            }] px-4 py-2 rounded-md font-medium capitalize`}>{item.status}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default MyFood;
