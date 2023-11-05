import React from "react";
import {createCardVariants} from "../constants/function";
import { motion } from "framer-motion";

export const CardInfor = ({ name, image, introduce }) => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen">
      <motion.div
        variants={createCardVariants(0, 5)}
        className="ml-4 mr-4 max-w-sm bg-[#f4f4f4] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <motion.div className="w-full justify-center  flex p-5">
          <div className="h-[280px] w-[100%]">
            <img
              className="w-full h-full object-cover  rounded"
              src={image}
              alt=""
            />
          </div>
        </motion.div>
        <div className="p-5">
          <div className="flex justify-between">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="w-[39px] h-[39px]">
              {" "}
              <img
                className="w-ful h-full"
                src="https://w.ladicdn.com/s350x350/5e476fd054f5fa0a4cfbc867/stars-1-20230731174043-k3j6h.png"
              ></img>
            </div>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
            {introduce}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
