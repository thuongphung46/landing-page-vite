import React from 'react'
import {Card} from './Card'
import Slider from "react-slick";
import { courses } from '../data/Courses';
import FeedbackCard from './FeedbackCard';
import {DataEvaluate} from "../data/UrlVDFeedback"


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
        slidesToShow:2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
  };

  return (
    <div id='feedback' className='w-full bg-white py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4 text-center'>
              <h1 className='py-3 text-3xl font-bold'>PHẢN HỒI THỰC TẾ</h1>
              <p className='text-[#6D737A]'>Trăm nghe không bằng một thấy, hãy cùng xem những phản hồi từ khách hàng của Hito.</p>
              <p className='text-[#6D737A]'>Chúng tôi cam kết những phản hồi này là</p>
              <p className='text-[#6D737A]'>thực tế và không có biên dựng!</p>
            </div>
            
            <Slider {...settings} >
                {DataEvaluate.map((items,i)=>
                  <div key={i}>
                    <FeedbackCard url={items.url} />
                  </div> ) }
            </Slider>
            
        </div>

    </div>
  )
}

export default Feedback