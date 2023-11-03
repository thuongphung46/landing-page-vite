import React, { useState } from 'react';
import { logo, lock, hamburgerMenu, close } from '../assets';
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle);
 const list_button =[
    {
        title:"Trang chủ",
        link:"/",
    },
    {
        title:"Giới thiệu",
        link:"/gioi-thieu",
    },
    {
        title:"Sản phẩm",
        link:"/san-pham",
    },
    {
        title:"Đánh giá",
        link:"/danh-gia",
    },
    {
        title:"Chuyên gia",
        link:"/chuyen-gia",
    },
    {
        title:"Phản hồi",
        link:"/phan-hoi",
    }
 ]

 const listItemsVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
    hover: { scale: 1.1 },
};

    return (
        <div className='fixed top-0 left-0 w-full  border-b z-10 bg-[#fff] shadow-md
        '>
            <div className='md:max-w-screen-xl max-w-screen-sm mx-auto w-full h-[80px] flex justify-between items-center md:px-0 px-4'>
                <img src={"https://w.ladicdn.com/s400x350/5e476fd054f5fa0a4cfbc867/layer-1-20230329074142-mnhwt.png"} className='h-6 ' alt='Logo' />
                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-4'>
                        {list_button.map((item,index)=>{
                            return(
                                <motion.div key={index}   whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}  className='hover:text-[#black] cursor-pointer whitespace-nowrap font-black' >{item.title}</motion.div>
                            )
                        })}
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <motion.button whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }} className='flex justify-between items-center bg-transparent px-6 gap-2 
                    '>
                        <img src={lock} alt='Lock' />
                        Liên hệ ngay
                    </motion.button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} alt='Menu' />
                </div>
            </div>

            <motion.nav variants={variant_nav} className={toggle ? 'block p-4 bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul>
                    {list_button.map((item,index)=>{
                            return(
                                <motion.li  variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }} key={index} className='hover:text-[#20B486] cursor-pointer p-4 hover:bg-gray-100 whitespace-nowrap'>{item.title}</motion.li>
                            )
                        })}
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
                            <img src={lock} alt='Lock' />
                            Liên hệ ngay
                        </button>
                    </div>
                </ul>
            </motion.nav>
        </div>
    );
};
const variant_nav = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  


const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
export default Navbar;
