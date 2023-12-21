import UseGetWith from "../../../hook/useGetWith";
import { motion } from "framer-motion";
import { SlideBrandRepresentative } from "../../../components/atoms/BrandRepresentative";
import { ImgPrbongda, ImgPrbongda1 } from "../../../assets";

const Data = [
  {
    url: ImgPrbongda,
  },
  {
    url: ImgPrbongda1,
  },
];
export const BrandRepresentative = () => {
  const { width } = UseGetWith();
  const SizeWidth = width < 600;

  return (
    <div id="achievement" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div
          style={{
            marginBottom: "20px",
          }}
          className={`m-auto md:order-last  order-first rounded drop-shadow-xl`}
        >
          <SlideBrandRepresentative data={Data} delay={2500} />
        </div>
        <div className="flex flex-col justify-center ">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
            className={`py-4 md:leading-[72px]  font-bold ${
              SizeWidth ? `text-xl` : `text-3xl`
            }`}
          >
            <span className={`text-[#20B486]`}>
              Canxi Hito đồng hành cùng Học viện Bóng đá Hoàng Anh Gia Lai
            </span>
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="text-lg text-gray-600 text-justify"
          >
            Hito Canxi có nguồn gốc 100% từ xương cá tuyết quý hiếm, với thành
            phần canxi hữu cơ và bộ đôi Vitamin D3, K2 giúp hỗ trợ tăng trưởng
            chiều cao tối ưu, mang lại sức khoẻ, sự dẻo dai và phát triển toàn
            diện cho cơ thể. Đây là sản phẩm đồng hành cùng với CLB trẻ Hoàng
            Anh Gia Lai, nhận được sự tin tưởng và vượt qua các tiêu chuẩn khắt
            khe của Ban huấn luyện, đặc biệt là sự tin tưởng của các huấn luyện
            viên giàu kinh nghiệm.
          </motion.p>
          <p className="h-[30px]"></p>
        </div>
      </div>
    </div>
  );
};
