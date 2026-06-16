import React from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import casio from '../../../assets/brands/casio.png'
import amazon from '../../../assets/brands/amazon_vector.png'
import moonstar from '../../../assets/brands/moonstar.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import randstar from '../../../assets/brands/randstad.png'
import { Autoplay } from 'swiper/modules';

const brandsLogos=[casio,amazon,moonstar,star,starPeople,randstar]
const Brand = () => {
    return (
        <Swiper
        loop={true}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        
        >
               
       {
        brandsLogos.map((logo,index)=> <SwiperSlide key={index} ><img src={logo} alt="Brand Logo" /></SwiperSlide>)
       }

        </Swiper>
    );
};

export default Brand;