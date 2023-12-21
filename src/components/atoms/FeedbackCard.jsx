import React from "react";
import { motion } from "framer-motion";
import GetWidthScreen from "../../hook/useGetWith";

export const FeedbackCard = ({ url }) => {
  const { width } = GetWidthScreen();
  const SizeScreen = width < 600;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-center text-center max-w-[400px] max-h-[225px] ">
        <motion.iframe
          className={`bg-[#fff] rounded `}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src={url}
        ></motion.iframe>
      </div>
    </div>
  );
};

export const FeedbackMessCard = ({ url }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-center text-center h-[520px]  ">
        <img
          className=" bg-[#000] rounded object-cover max-h-[520px]"
          src={url}
        ></img>
      </div>
    </div>
  );
};
