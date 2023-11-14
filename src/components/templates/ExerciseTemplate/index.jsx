import React from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hook/useGetWith";
import FooterHeader from "../../../atoms/footerHeader";
import { ImgBaiTap4 } from "../../../assets";
const calculateFontSize = (width, height) => {
  const baseFontSize = 16;
  const minWidth = 500;
  const minHeight = 500;
  const fontSizeMultiplier = Math.min(width / minWidth, height / minHeight);
  const calculatedFontSize = baseFontSize * fontSizeMultiplier;
  return calculatedFontSize;
};

export const ExerciseTemplate = () => {
  const { height, width } = useWindowDimensions();
  const fontSize = calculateFontSize(width, height);

  const isSmallScreen = width < 580;

  return (
    <motion.div
      id="hero"
      initial="offscreen"
      whileInView="onscreen"
      className="w-full  pt-24 justify-around bg-gradient-[#053381, #42aed3] bg-gradient-to-t from-cyan-500 to-blue-500"
    >
      <div
        className={`md:max-w-[1480px] m-auto  grid md:grid-cols-2 items-center max-w-[600px]  ${
          isSmallScreen ? "text-center" : "px-8"
        }`}
      >
        <div className="flex flex-col justify-start  gap-4">
          <motion.div
            style={{
              animationName: "fadeInLeft",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
            }}
            // variants={createCardVariants(0, 5)}
            className={` text-[#fff] flex  font-bold ${
              isSmallScreen ? "text-xl justify-center" : "text-4xl"
            }`}
          >
            <p className="mr-[4px] text-[#03fff8] ">
              RÈN LUYỆN THỂ CHẤT MỖI NGÀY
            </p>
          </motion.div>
          <motion.p
            // variants={createCardVariants(0, 7)}
            style={{
              animationName: "fadeInLeft",
              animationDuration: "1.5s",
              animationTimingFunction: "ease-out",
            }}
            className={` text-[#fff] font-bold ${
              isSmallScreen ? "text-xl" : "text-4xl"
            }`}
          >
            TỪNG BƯỚC HIỆN THỰC HÓA
          </motion.p>
          <motion.p
            // variants={createCardVariants(0, 9)}
            style={{
              animationName: "fadeInLeft",
              animationDuration: "2s",
              animationTimingFunction: "ease-out",
            }}
            className={` text-[#fff] font-bold ${
              isSmallScreen ? "text-xl" : "text-4xl"
            }`}
          >
            ƯỚC MƠ CHIỀU CAO CỦA BẠN
          </motion.p>
          <motion.div
            // variants={createCardVariants(0, 12)}
            style={{
              animationName: "fadeInLeft",
              animationDuration: "2.5s",
              animationTimingFunction: "ease-out",
            }}
            className={`bold  text-[#fff] font-bold ${
              isSmallScreen ? "text-[10px]" : "text-xl"
            }`}
          >
            Chúng tôi tự hào là một trong những đơn vị tiên phong
          </motion.div>
          <motion.div
            // variants={createCardVariants(0, 14)}
            style={{
              animationName: "fadeInLeft",
              animationDuration: "3s",
              animationTimingFunction: "ease-out",
            }}
            className={`bold  text-[#fff] font-bold ${
              isSmallScreen ? "text-[10px]" : "text-xl"
            }`}
          >
            trong sứ mệnh nâng tầm vóc dáng người Việt
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              animationName: "fadeInLeft",
              animationDuration: "2s",
              animationTimingFunction: "ease-out",
            }}
            // variants={createCardVariants(0, 16)}
            className={`border-white border max-w-[200px] h-[48px] font-bold text-[#fff] ${
              isSmallScreen ? "" : ""
            }`}
          >
            Buy Now
          </motion.button>
        </div>
        <div className="w-full text-center justify-center order-first md:order-last flex">
          <motion.img
            // variants={createCardVariants(0, 18)}
            style={{
              animationName: "fadeInRight",
              animationDuration: "2s",
              animationTimingFunction: "ease-out",
            }}
            src={ImgBaiTap4}
            className={`rounded  ${isSmallScreen ? "max-h-[200px] " : ""} `}
          />
        </div>
      </div>
      <FooterHeader />
    </motion.div>
  );
};
