import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviwsCard from './ReviwsCard';



const Reveiws = ({reviewsPromise}) => {
    const reviews= use(reviewsPromise)
    console.log(reviews)
    return (
        <div>
            <Swiper
             effect={'coverflow'}
            
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0.25,
          depth: 100,
          modifier: 1,
        
          slideShadows: true,
        }}
         loop={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
        
            >
                {
                    reviews.map(review=><SwiperSlide key={review.id}>
          <ReviwsCard review={review}></ReviwsCard>
        </SwiperSlide>)
                }
                   

            </Swiper>
            
        </div>
    );
};

export default Reveiws;