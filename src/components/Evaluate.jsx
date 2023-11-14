import React from "react";
import { CTA } from "../atoms/CTA";
import { DataEvaluate } from "../data/EvaluateData";
import { motion } from "framer-motion";
import GetWidthHeight from "../hook/useGetWith";

const Evaluate = () => {
  const { width } = GetWidthHeight();
  const SizeWidth = width < 600;
  return (
    <div id="Evaluate" className="w-full bg-[#E9F8F3] py-24">
      <div className="py-4 w-full justify-center text-center">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
          className={`py-3 ${
            SizeWidth ? "text-xl" : "text-3xl"
          } w-full font-bold text-[#0a67e9] relative z-[1] drop-shadow-2xl `}
        >
          ĐÁNH GIÁ CỦA BÁC SĨ – CHUYÊN GIA
        </motion.h1>
      </div>
      {DataEvaluate.map((item, i) => (
        <CTA
          key={i}
          left={i % 2 === 0}
          name={item.name}
          image={item.image}
          detail={item.dettail}
          voice={item.voice}
        />
      ))}
    </div>
  );
};

export default Evaluate;
