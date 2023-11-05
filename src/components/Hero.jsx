import React from "react";
import { motion } from "framer-motion";
import { createCardVariants } from "../constants/function";
import useWindowDimensions from "../hook/useGetWith";
import { Color } from "../constants/color";
import FooterHeader from "../atoms/footerHeader";
const calculateFontSize = (width, height) => {
  const baseFontSize = 16;
  const minWidth = 500;
  const minHeight = 500;
  const fontSizeMultiplier = Math.min(width / minWidth, height / minHeight);
  const calculatedFontSize = baseFontSize * fontSizeMultiplier;
  return calculatedFontSize;
};

const Hero = () => {
  const { height, width } = useWindowDimensions();
  const fontSize = calculateFontSize(width, height);

  const isSmallScreen = width < 580;

  return (
    <motion.div
      id="hero"
      initial="offscreen"
      whileInView="onscreen"
      className="w-full  pt-24 justify-around bg-gradient-[#053381, #42aed3] bg-gradient-to-t from-cyan-500 to-blue-500">
      <div
        className={`md:max-w-[1480px] m-auto  grid md:grid-cols-2 items-center max-w-[600px]  ${
          isSmallScreen ? "text-center" : "px-8"
        }`}>
        <div className="flex flex-col justify-start  gap-4">
          <motion.div
            variants={createCardVariants(0, 5)}
            className={` text-[#fff] flex  font-bold ${
              isSmallScreen ? "text-xl justify-center" : "text-4xl"
            }`}>
            <p className="mr-[4px] text-[#03fff8] ">HITO </p>SỰ LỰA CHỌN
          </motion.div>
          <motion.p
            variants={createCardVariants(0, 7)}
            className={` text-[#fff] font-bold ${
              isSmallScreen ? "text-xl" : "text-4xl"
            }`}>
            HÀNG ĐẦU
          </motion.p>
          <motion.p
            variants={createCardVariants(0, 9)}
            className={` text-[#fff] font-bold ${
              isSmallScreen ? "text-xl" : "text-4xl"
            }`}>
            CHO NGƯỜI THẤP LÙN
          </motion.p>
          <motion.div
            variants={createCardVariants(0, 12)}
            className={`bold  text-[#fff] font-bold ${
              isSmallScreen ? "text-[10px]" : "text-xl"
            }`}>
            Chúng tôi tự hào là một trong những đơn vị tiên phong
          </motion.div>
          <motion.div
            variants={createCardVariants(0, 14)}
            className={`bold  text-[#fff] font-bold ${
              isSmallScreen ? "text-[10px]" : "text-xl"
            }`}>
            trong sứ mệnh nâng tầm vóc dáng người việt
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={createCardVariants(0, 16)}
            className={`border-white border max-w-[200px] h-[48px] font-bold text-[#fff] ${
              isSmallScreen ? "" : ""
            }`}>
            Buy Now
          </motion.button>
        </div>
        <div className="w-full text-center justify-center order-first md:order-last flex">
          {" "}
          <motion.img
            variants={createCardVariants(0, 18)}
            src={
              "https://w.ladicdn.com/s650x650/5e476fd054f5fa0a4cfbc867/comsd-20230330114528-y9jz0.png"
            }
            className={`  ${isSmallScreen ? "max-h-[200px] " : ""} `}
          />
        </div>
      </div>
      <FooterHeader />
    </motion.div>
  );
};

export default Hero;
