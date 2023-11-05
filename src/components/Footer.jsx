import React from "react";
import { logo } from "../assets";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  const List_icons = [
    {
      icon: <FaFacebookF size={25} style={{ color: "#4DC39E" }} />,
    },
    {
      icon: <FaDribbble size={25} style={{ color: "#4DC39E" }} />,
    },
    {
      icon: <FaLinkedinIn size={25} style={{ color: "#4DC39E" }} />,
    },
    {
      icon: <FaInstagram size={25} style={{ color: "#4DC39E" }} />,
    },
    {
      icon: <FaBehance size={25} style={{ color: "#4DC39E" }} />,
    },
  ];
  return (
    <div id="footer" className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <img
            src={
              "https://w.ladicdn.com/s350x350/5e476fd054f5fa0a4cfbc867/rbg/0001-3-1024x869-20230202071135--u5sn.png"
            }
            className="h-14"
          />
          <h3 className="text-2xl font-bold mt-10">LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <h3 className="py-2 text-[#6D737A]">Call : +123 400 123</h3>
          <h3 className="py-2 text-[#6D737A]">
            Praesent nulla massa, hendrerit <br></br> vestibulum gravida in,
            feugiat auctor felis.
          </h3>
          <h3 className="py-2 text-[#363A3D]">Email: example@mail.com</h3>
          <div className="flex gap-4 py-4">
            {List_icons.map((item, index) => (
              <div key={index} className="hover:text-[#20B486] cursor-pointer">
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>Course</li>
                    <li className='py-2'>Blog</li>
                    <li className='py-2'>Contact</li>

                </ul>
            </div> */}

        <div>
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Design</li>
            <li className="py-2">Development</li>
            <li className="py-2">Marketing</li>
            <li className="py-2">Business</li>
            <li className="py-2">Lifestyle</li>
            <li className="py-2">Photography</li>
            <li className="py-2">Music</li>
          </ul>
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <h3 className="py-2 text-[#6D737A]">
            Praesent nulla massa, hendrerit <br></br> vestibulum gravida in,
            feugiat auctor felis.
          </h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email here"
            />
            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
