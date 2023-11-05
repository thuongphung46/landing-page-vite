import React from 'react'
import Slider from "react-slick";
import {dataCard}  from "../constants/InforCardData";
import {CardInfor} from "../atoms/CardInfor";

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
        slidesToShow:3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div id='sliderIntroduce' className='w-full bg-white '>
        <div className='md:max-w-[1000px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='text-center  py-4'>
              <h1 className='py-3 text-3xl font-bold text-[#f44025] uppercase drop-shadow-lg'>Đội ngũ chuyên viên</h1>
              <div className='h-[20px]'></div>
              <p className='text-[#616161]'> Với đội ngũ chuyên viên giàu kinh nghiệm, chuyên nghiệp.</p>
              <p className='text-[#616161]'> Khách hàng sẽ được tư vấn một cách chi tiết nhiệt tình và hiệu quả nhất!</p>
            </div>
            <div className='h-[50px]'></div>
            <Slider {...settings} >
            {dataCard.map((item, index)=> 
                <CardInfor   key={index} image={item.image} introduce={item.introduce} name={item.name} ></CardInfor>
                )}
            </Slider>
            
        </div>

    </div>
  )
}
export default sliderInForTeam;