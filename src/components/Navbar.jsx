import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { AiFillPhone } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll/modules";
import { Link as LinkRouter, useParams, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Navbar } from "@material-tailwind/react";
import { list_button } from "../constants/Navbar";

const NavbarMenu = () => {
  const { param } = useParams();
  const Navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const handleClick = () => setToggle(!toggle);
  const handleSetActive = (to) => {
    setActive(to);
  };

  const handleRouterClick = useCallback(() => {
    //nếu param khác / thì navigate về home
    if (param !== "/") {
      Navigate("/");
    }
  }, [param]);
  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#0176b7] shadow-md">
        <div className="md:max-w-screen-xl max-w-screen-sm mx-auto w-full h-[80px] flex justify-between items-center md:px-0 px-4">
          <img
            onClick={handleRouterClick}
            src={
              "https://w.ladicdn.com/5ea10d9ec9b9d03ddf95197a/logo-20231018151836-fheo0.svg"
            }
            className="h-16"
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
                  <motion.div
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5 * index,
                      ease: "linear",
                      delay: 0.1,
                      bounce: 0.1,
                      type: "spring",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="hover:text-[#fff] cursor-pointer whitespace-nowrap font-bold text-white "
                    >
                      {item.type === "link_router" ? (
                        <>
                          <LinkRouter to={item.link}>{item.title}</LinkRouter>
                        </>
                      ) : (
                        <>
                          <LinkScroll
                            activeClass={active}
                            activeStyle={{
                              fontWeight: "900",
                            }}
                            to={item.link}
                            spy={true}
                            smooth={true}
                            onClick={handleRouterClick}
                            offset={-100}
                            duration={500}
                            onSetActive={handleSetActive}
                          >
                            {item.title}
                          </LinkScroll>
                        </>
                      )}
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
              // variants={createCardVariants(0, 12)}
              style={{
                animationName: "bounceInUp",
                animationDelay: "0.7s",
                animationDuration: "1.2s",
              }}
              className="flex justify-between items-center bg-transparent px-6 gap-2 text-white"
            >
              <AiFillPhone className="text-white " />
              Liên hệ ngay
            </motion.button>
          </div>

          <div className="md:hidden" onClick={handleClick}>
            {toggle ? (
              <AiOutlineClose className="text-white text-3xl" />
            ) : (
              <HiMenu className="text-white text-3xl" />
            )}
          </div>
        </div>

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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  className="hover:text-[#000] m-w-[100%] cursor-pointer  hover:bg-gray-100 whitespace-nowrap"
                >
                  {item.type === "link_router" ? (
                    <>
                      <LinkRouter to={item.link}>
                        <div className="py-4 w-auto ">{item.title}</div>
                      </LinkRouter>
                    </>
                  ) : (
                    <>
                      <LinkScroll
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={handleRouterClick}
                        onSetActive={handleSetActive}
                      >
                        <div className="py-4 w-auto ">{item.title}</div>
                      </LinkScroll>
                    </>
                  )}
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
      </Navbar>
    </>
  );
};

export default NavbarMenu;
