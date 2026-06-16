import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReveiwCard from './ReveiwCard';

const Reveiws = ({reveiwsPromise}) => {
    const reveiws= use(reveiwsPromise);
    console.log(reveiws)
    return (
    
      <Swiper
      loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >

        {
            reveiws.map(reveiw=> <SwiperSlide key={reveiw.id} >
          <ReveiwCard reveiw={reveiw}></ReveiwCard>
        </SwiperSlide>)
        }
        
       
      </Swiper>
   
    );
};

export default Reveiws;