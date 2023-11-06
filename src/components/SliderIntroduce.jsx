import React from "react";
import Slider from "react-slick";
import { dataCard } from "../constants/InforCardData";
import { CardInfor } from "../atoms/CardInfor";
import { motion } from "framer-motion";

const sliderInForTeam = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div id="sliderIntroduce" className="w-full bg-white py-24">
      <div className="md:max-w-[1000px] m-auto max-w-[600px]   px-4 md:px-0">
        <div className="text-center  py-2">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
            className="py-1 text-3xl font-bold text-[#f44025] uppercase drop-shadow-lg"
          >
            Đội ngũ chuyên viên
          </motion.h1>
          <div className="h-[20px]"></div>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="text-[#616161]"
          >
            Với đội ngũ chuyên viên giàu kinh nghiệm, chuyên nghiệp.
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
            className="text-[#616161]"
          >
            Khách hàng sẽ được tư vấn một cách chi tiết nhiệt tình và hiệu quả
            nhất!
          </motion.p>
        </div>
        <div className="h-[50px]"></div>
        <Slider {...settings}>
          {dataCard.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: index > 3 ? 0.3 : (index * 2) / 10,
              }}
            >
              <CardInfor
                image={item.image}
                introduce={item.introduce}
                name={item.name}
              ></CardInfor>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default sliderInForTeam;
