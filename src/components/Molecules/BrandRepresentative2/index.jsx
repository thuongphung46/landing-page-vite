import UseGetWith from "../../../hook/useGetWith";
import { motion } from "framer-motion";
import { SlideBrandRepresentative } from "../../../atoms/BrandRepresentative";
import { ImgPrbongda2 } from "../../../assets";

export const BrandRepresentative2 = () => {
  const { width } = UseGetWith();
  const SizeWidth = width < 1424;

  const getWith = () => {
    if (SizeWidth) {
      return "360px";
    } else {
      return "540px";
    }
  };
  const getHeight = () => {
    if (SizeWidth) {
      return "320px";
    } else {
      return "480px";
    }
  };

  return (
    <div id="achievement" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div
          style={{
            marginBottom: "20px",
          }}
          className={`m-auto md:order-first  order-first rounded drop-shadow-xl`}
        >
          <div
            className="slide "
            style={{
              height: getHeight(),
              width: getWith(),
            }}
          >
            <motion.img
              className="object-cover rounded "
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "linear", delay: 0.8 }}
              style={{
                height: "100%",
              }}
              src={ImgPrbongda2}
            ></motion.img>
          </div>
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
            <span className={`text-[#20B486]`}>Đại diện nhãn hàng</span>
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="text-lg text-gray-600 text-justify"
          >
            Ông Lê Hoài Nam chia sẻ : là người đại diện của nhãn hàng Hito
            Canxi, Tôi luôn khát khao mang lại những sản phẩm tốt nhất, hiệu quả
            nhất với chi phí phù hợp nhất cho khách hàng, cảm ơn hàng triệu
            khách hàng trên khắp thế giới đã, đang và sắp tới sẽ đồng hành cùng
            sản phẩm Hito Canxi
          </motion.p>
          <p className="h-[30px]"></p>
        </div>
      </div>
    </div>
  );
};
