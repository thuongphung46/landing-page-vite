import React from "react";
import { Card } from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import { FeedbackCard, FeedbackMessCard } from "../atoms/FeedbackCard";
import { DataEvaluate } from "../data/UrlVDFeedback";
import { DataMessImg } from "../data/UrlImages";
import { motion } from "framer-motion";

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="feedback" className="w-full bg-white py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4 text-center">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
            className="py-3 text-3xl font-bold"
          >
            PHẢN HỒI THỰC TẾ
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
            className="text-[#6D737A]"
          >
            Trăm nghe không bằng một thấy, hãy cùng xem những phản hồi từ khách
            hàng của Hito.
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.5 }}
            className="text-[#6D737A]"
          >
            Chúng tôi cam kết những phản hồi này là
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.6 }}
            className="text-[#6D737A]"
          >
            thực tế và không có biên dựng!
          </motion.p>
        </div>

        <Slider {...settings}>
          {DataEvaluate.map((items, i) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: (i * 2) / 10,
              }}
              key={i}
            >
              <FeedbackCard url={items.url} />
            </motion.div>
          ))}
        </Slider>

        <Slider {...settings}>
          {DataMessImg.map((items, i) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: (i * 2) / 10,
              }}
              key={i}
            >
              <FeedbackMessCard url={items.url} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
