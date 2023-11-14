import { motion } from "framer-motion";
import { Data } from "../../../data/CertificationData";
import "./index.scss";

export const Certification = () => {
  return (
    <div id="certification" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-1 max-w-[600px]  px-4 md:px-0">
        <div className="py-4 w-full justify-center text-center ">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.1 }}
            className="py-3 text-3xl w-full font-bold text-[#0a67e9] relative z-[1] drop-shadow-2xl"
          >
            <span className="text-[#20B486]">CHỨNG NHẬN VÀ GIẢI THƯỞNG</span>
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
            className="py-3 text-xl w-full font-bold text-[#0a67e9] relative z-[1] "
          >
            Chứng nhận và giải thưởng hàng đầu khu vực trong lĩnh vực phát triển
            chiều cao
          </motion.p>
        </div>
        <div className="flex grid-cols-2 justify-center">
          <div className="md:w-[1200px] justify-center items-center row-certification">
            {Data.map((items, i) => (
              <div
                key={i}
                className="md:max-w-[1100px] column-certification flex justify-center"
              >
                <motion.img
                  className=" rounded-2xl shadow-2xl h-full w-full md:w-[80%]"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
                  src={items.url}
                ></motion.img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
