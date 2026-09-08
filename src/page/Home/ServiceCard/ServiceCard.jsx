import React from 'react';
import apple from '../../../assets/service.png';

const ServiceCard = () => {
    return (
        <div className='bg-secondary mt-10 p-5 sm:p-20  rounded-2xl'>
  <h1 className='text-3xl font-bold text-center text-white '>Our Services</h1>
            <p className=' text-gray-300 text-center mb-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 '>
          
        <div className="text-center bg-gray-200 p-10 rounded-4xl hover:bg-primary ">

            <div className="flex justify-center">
                <img src={apple} alt="" />
            </div>

            <h1 className="text-xl font-bold text-secondary">
                Express & Standard Delivery
            </h1>

            <p className="text-gray-400 text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
            </p>

        </div>
        <div className="text-center bg-gray-200 p-10 rounded-4xl hover:bg-primary">

            <div className="flex justify-center">
                <img src={apple} alt="" />
            </div>

            <h1 className="text-xl font-bold text-secondary">
                Express & Standard Delivery
            </h1>

            <p className="text-gray-400 text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
            </p>

        </div>
        <div className="text-center bg-gray-200 p-10 rounded-4xl hover:bg-primary">

            <div className="flex justify-center">
                <img src={apple} alt="" />
            </div>

            <h1 className="text-xl font-bold text-secondary">
                Express & Standard Delivery
            </h1>

            <p className="text-gray-400 text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
            </p>

        </div>
        <div className="text-center bg-gray-200 p-10 rounded-4xl hover:bg-primary">

            <div className="flex justify-center">
                <img src={apple} alt="" />
            </div>

            <h1 className="text-xl font-bold text-secondary">
                Express & Standard Delivery
            </h1>

            <p className="text-gray-400 text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
            </p>

        </div>
        <div className="text-center bg-gray-200 p-10 rounded-4xl hover:bg-primary">

            <div className="flex justify-center">
                <img src={apple} alt="" />
            </div>

            <h1 className="text-xl font-bold text-secondary">
                Express & Standard Delivery
            </h1>

            <p className="text-gray-400 text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
            </p>

        </div>
        <div className="text-center bg-gray-200 p-10 rounded-4xl hover:bg-primary">

            <div className="flex justify-center">
                <img src={apple} alt="" />
            </div>

            <h1 className="text-xl font-bold text-secondary">
                Express & Standard Delivery
            </h1>

            <p className="text-gray-400 text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
            </p>

        </div>
        </div>
        </div>
    );
};

export default ServiceCard;