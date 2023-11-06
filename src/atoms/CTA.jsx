import React from "react";
import { motion } from "framer-motion";

export const CTA = ({ name, image, detail, voice }) => {
  return (
    <div id="cta" className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "linear", delay: 0.2 }}
          src={image}
          className="w-[650px] mx-auto"
        />

        <div>
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="py-2  text-3xl font-semibold"
          >
            <span className="text-[#0a67e9]">{name}</span>
          </motion.h1>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="py-2 text-lg text-gray-600 font-bold"
          >
            {detail}
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="py-2 text-lg text-gray-600 text-justify "
          >
            "{voice}"
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#0a67e9] text-white font-bold"
          >
            Xem thêm
          </motion.button>
        </div>
      </div>
    </div>
  );
};
