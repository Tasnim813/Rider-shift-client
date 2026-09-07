import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
import { FaArrowCircleUp } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="mt-10">
             <Carousel
              autoPlay={true}
               infiniteLoop={true} >
                <div className="">
                    <img src={banner1} />
                    <div className="hidden sm:block text-start relative bottom-45 left-22">
                        <p className="">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br></br> packages to business shipments — we deliver on time, every time.
                        </p>
                        <div className="flex">
                            
                            <div className="flex items-center">
                                <button className="btn btn-primary rounded-4xl text-secondary font-bold">Track Your Parcel</button><FaArrowCircleUp className='w-8 h-8 rotate-50' />
                            </div>
                           <div>
                             <button className="btn  ml-5 text-black font-bold bg-white rounded-xl">Be A Rider</button>
                           </div>
                        </div>

                    </div>
                    
                </div>
                <div className="">
                    <img src={banner2} />
                    <div className=" hidden sm:block text-start relative bottom-45 left-22">
                        <p className="">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br></br> packages to business shipments — we deliver on time, every time.
                        </p>
                        <div className="flex">
                            
                            <div className="flex items-center">
                                <button className="btn btn-primary rounded-4xl text-secondary font-bold">Track Your Parcel</button><FaArrowCircleUp className='w-8 h-8 rotate-50' />
                            </div>
                           <div>
                             <button className="btn  ml-5 text-black font-bold bg-white rounded-xl">Be A Rider</button>
                           </div>
                        </div>

                    </div>
                    
                </div>
                <div className="">
                    <img src={banner3} />
                    <div className=" hidden sm:block text-start relative bottom-45 left-22">
                        <p className="">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br></br> packages to business shipments — we deliver on time, every time.
                        </p>
                        <div className="flex">
                            
                            <div className="flex items-center">
                                <button className="btn btn-primary rounded-4xl text-secondary font-bold">Track Your Parcel</button><FaArrowCircleUp className='w-8 h-8 rotate-50' />
                            </div>
                           <div>
                             <button className="btn  ml-5 text-black font-bold bg-white rounded-xl">Be A Rider</button>
                           </div>
                        </div>

                    </div>
                    
                </div>
               
            </Carousel>
            
        </div>
    );
};

export default Banner;