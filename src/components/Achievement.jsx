import UseGetWith from "../hook/useGetWith";
import { motion } from "framer-motion";
import { Slideshow } from "../atoms/slider";

const Achievement = () => {
  const { width } = UseGetWith();
  const SizeWidth = width < 600;

  return (
    <div id="achievement" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-center ">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
            className={`py-4 md:leading-[72px]  font-bold ${
              SizeWidth ? `text-xl` : `text-3xl`
            }`}
          >
            <span className={`text-[#20B486]`}>GIỚI THIỆU VỀ HITO CANXI</span>
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="text-lg text-gray-600 text-justify"
          >
            Hito Việt Nam mang nguồn cảm hứng từ Nhật Bản - đất nước mặt trời
            mọc để tạo nên hệ thống các sản phẩm bổ sung canxi từ nguyên liệu
            bột xương cá tuyết và tảo biển đỏ nhập khẩu 100% từ Nhật Bản. Sở hữu
            hàm lượng cao canxi hữu cơ cùng 72 vitamin, khoáng chất quý giúp hỗ
            trợ tăng trưởng chiều cao ở mọi lứa tuổi, phát triển thể chất toàn
            diện giúp kiến tạo thế hệ vàng cho tương lai đất nước.
          </motion.p>
          <p className="h-[30px]"></p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.6 }}
            className="text-lg text-gray-600 text-justify"
          >
            Với chất lượng và hiệu quả vượt trội, Canxi Hito tự hào giành được
            hàng loạt giải thưởng uy tín khu vực Đông Nam Á, Châu Á với hơn 5
            triệu khách hàng tin tưởng sử dụng từ khắp nơi trên thế giới.
          </motion.p>
        </div>
        <div
          style={{
            marginBottom: "20px",
          }}
          className={`m-auto md:order-last  order-first rounded drop-shadow-xl`}
        >
          <Slideshow />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
