import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import amazon from '../../../assets/brands/amazon.png';
import  casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import starPeople from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';
const brandLogo=[amazon,casio,moonstar,randstad,star,starPeople]

const Brands = () => {
    return (
      
            <div  className="mb-10">
           
            <h1 className="text-secondary text-xs sm:text-3xl font-bold text-center mt-10 mb-5">  We've helped thousands of sales teams</h1>
                <Swiper slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
        }}
        modules={[Autoplay]}
      
        >
          
           {
             brandLogo.map((logo, index)=>
                <SwiperSlide key={index}> <img src={logo} alt="" /> </SwiperSlide>

            )
           }
        
   
      </Swiper>
            </div>
       
    );
};

export default Brands;