import React, { useState } from "react";
import { lock, hamburgerMenu, close } from "../assets";
import { motion } from "framer-motion";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-scroll";
import {HiMenu} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import {
  list_button,
  variant_nav,
  variants,
  cardVariantsMore,
  cardVariants
} from "../constants/Navbar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className=" fixed top-0 left-0 w-full  border-b z-10 bg-[#0176b7] shadow-md">
      <div className="md:max-w-screen-xl max-w-screen-sm mx-auto w-full h-[80px] flex justify-between items-center md:px-0 px-4">
        <img
          src={
            "https://w.ladicdn.com/5ea10d9ec9b9d03ddf95197a/logo-20231018151836-fheo0.svg"
          }
          className="h-[80%]   "
          alt="Logo"
        />

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="hidden md:flex items-center"
        >
          <ul className="flex gap-4">
            {list_button.map((item, index) => {
              return (
                <motion.div initial="offscreen" whileInView="onscreen">
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    variants={cardVariants}
                    className="hover:text-[#fff] cursor-pointer whitespace-nowrap font-bold text-white"
                  >
                    <Link
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={handleSetActive}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </ul>
        </motion.div>

        <div className="hidden md:flex">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={cardVariantsMore}
            className="flex justify-between items-center bg-transparent px-6 gap-2 text-white"
          >
            <AiFillPhone className="text-white " />
            Liên hệ ngay
          </motion.button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
        {toggle ? <AiOutlineClose className="text-white text-3xl"/> : <HiMenu className="text-white text-3xl"/>}
        </div>
      </div>

      <motion.div variants={variant_nav}>
        <div
          className={
            toggle
              ? "block p-4 bg-[#124b9c] w-full px-8 md:hidden border-b text-white"
              : "hidden"
          }
        >
          <ul>
            {list_button.map((item, index) => {
              return (
                <motion.li
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  className="hover:text-[#000] cursor-pointer  hover:bg-gray-100 whitespace-nowrap"
                >
                  <Link
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    <div className="py-4 w-auto ">{item.title}</div>
                  </Link>
                </motion.li>
              );
            })}
            <div className="flex flex-col my-4 gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[white] text-white flex justify-center items-center bg-transparent px-6 gap-2 py-4"
              >
                <AiFillPhone className="text-white " />
                Liên hệ ngay
              </motion.button>
            </div>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
