import React from "react";
import { Card } from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import { motion } from "framer-motion";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="courses" className="w-full bg-[#E9F8F3B2] py-32 relative">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4 w-full justify-center text-center">
          <h1 className="py-3 text-3xl w-full font-bold text-[#0a67e9] relative z-[1]">
            SẢN PHẨM NỔI BẬT{" "}
          </h1>
          <p className="text-[#6D737A] w-full">
            Bộ 4 sản phẩm với công thức vượt chội dành cho nhiều lứa tuổi
          </p>
        </div>

        <Slider {...settings} className="px-5">
          {courses.map((course, i) => (
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
              <Card course={course} />
            </motion.div>
          ))}
        </Slider>
        <img
          className="absolute top-4 right-9 "
          src={
            "https://w.ladicdn.com/5ea10d9ec9b9d03ddf95197a/group-61-20231018155356-uzxwn.svg"
          }
        ></img>
        <img
          className="w-full absolute  -z-10 left-0 "
          src={
            "https://w.ladicdn.com/5ea10d9ec9b9d03ddf95197a/mask-group-20231018154708-b95qv.svg"
          }
        ></img>
      </div>
    </div>
  );
};

export default Courses;
