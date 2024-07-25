import React from "react";
import { history } from "../../utils/data/MyFoodRequest";
import Lottie from "react-lottie";
import image from "../../assets/lottie/task.json";
import { motion } from "framer-motion";
function MyFoodRequest() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const color = {
    failed: "#EB6B6B",
    success: "#ABD700",
    processing: "#F7BD2E",
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
            <div className="font-bold text-xl  ">
              Food Name :{" "}
              <span className="font-semibold text-black">{item.foodName}</span>
            </div>
            <div>
              Requested date : <span>{item.requestedDate}</span>
            </div>
            <div>
              Donar Name : <span>{item.donarName}</span>
            </div>
          </div>
          <div
            className={`bg-[${
              color[item.status]
            }] px-4 py-2 rounded-md font-medium capitalize`}
          >
            {item.status}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default MyFoodRequest;
