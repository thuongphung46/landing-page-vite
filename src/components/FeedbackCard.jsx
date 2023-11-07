import React from "react";
import { motion } from "framer-motion";
import GetWidthScreen from "../hook/useGetWith";

const FeedbackCard = ({ url }) => {
  const { width } = GetWidthScreen();
  const SizeScreen = width < 600;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-center text-center max-w-[400px] max-h-[225px] ">
        <motion.iframe
          className={`bg-[#fff] rounded 
         
          `}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src={url}
        ></motion.iframe>
      </div>
    </div>
  );
};

export default FeedbackCard;
