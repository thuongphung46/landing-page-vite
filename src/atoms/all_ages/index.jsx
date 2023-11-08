import { motion } from "framer-motion";
import { ImgDoTuoi } from "../../assets";
export const AllAges = () => {
  return (
    <div id="AllAges" className="w-full bg-[#43afd8] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-1 max-w-[600px]  px-4 md:px-0">
        <div className="py-4 w-full justify-center text-center ">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.1 }}
            className="py-3 text-3xl w-full font-bold text-[#0a67e9] relative z-[1] drop-shadow-3xl"
          >
            PHÙ HỢP VỚI<span className="text-[#03fff8]"> MỌI LỨA TUỔI</span>
          </motion.h1>
        </div>
        <div className="flex grid-cols-2 justify-center">
          <div className="sm flex flex-col justify-center bg-cover max-w-[80%] rounded">
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
              style={{
                // animationName: "bounceInUp",
                // animationDelay: "0.5s",
                // animationDuration: "1.2s",
                height: "100%",
                width: "100%",
              }}
              src={ImgDoTuoi}
            ></motion.img>
          </div>
        </div>
        <div className="py-4 w-full justify-center text-center flex">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
            className="py-3 text-xl max-w-[1200px] font-bold text-[#fff] relative z-[1]  "
          >
            Hito Canxi cung cấp đa dạng các dòng sản phẩm bổ sung canxi hỗ trợ
            tăng chiều cao tự thân, thúc đẩy phát triển chiều cao tối ưu. Các
            thành phần chuyên biệt có trong Hito giúp kiến thiết hệ xương chắc
            khoẻ, dẻo dai, nâng tầm chất lượng cuộc sống.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
