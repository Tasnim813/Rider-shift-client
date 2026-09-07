import React from 'react';
import car from '../../../assets/bookingIcon.png'
const Work = () => {
    return (
        <div className="items-center w-6xl mx-auto">
            <h1 className='text-3xl  font-bold mb-5'>How it Works</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                <div>
                    <div className=" rounded-2xl bg-base-100 p-5 shadow-md">
    {/* Icon */}
    <div className="mb-4">
      <img src={car} alt="Booking Icon" />
    </div>

    {/* Title */}
    <h3 className="mb-2 text-lg font-bold text-secondary ">
     Booking Pick & Drop
    </h3>

    {/* Description */}
    <p className="text-sm leading-5 text-gray-500">
        From personal packages to business shipments — we deliver
        on time, every time.
    </p>
</div>
                </div>
                <div>
                    <div className=" rounded-2xl bg-base-100 p-5 shadow-md">
    {/* Icon */}
    <div className="mb-4">
      <img src={car} alt="Booking Icon" />
    </div>

    {/* Title */}
    <h3 className="mb-2 text-lg font-bold text-secondary ">
        Cash On Delivery
    </h3>

    {/* Description */}
    <p className="text-sm leading-5 text-gray-500">
       From personal packages to business shipments — we deliver on time, every time.
    </p>
</div>
                </div>
                <div>
                    <div className=" rounded-2xl bg-base-100 p-5 shadow-md">
    {/* Icon */}
    <div className="mb-4">
      <img src={car} alt="Booking Icon" />
    </div>

    {/* Title */}
    <h3 className="mb-2 text-lg font-bold text-secondary ">
        Delivery Hub
    </h3>

    {/* Description */}
    <p className="text-sm leading-5 text-gray-500">
        From personal packages to business shipments — we deliver
        on time, every time.
    </p>
</div>
                </div>
                <div>
                    <div className=" rounded-2xl bg-base-100 p-5 shadow-md">
    {/* Icon */}
    <div className="mb-4">
      <img src={car} alt="Booking Icon" />
    </div>

    {/* Title */}
    <h3 className="mb-2 text-lg font-bold text-secondary ">
       Booking SME & Corporate
    </h3>

    {/* Description */}
    <p className="text-sm leading-5 text-gray-500">
        From personal packages to business shipments — we deliver
        on time, every time.
    </p>
</div>
                </div>
            </div>
        </div>
    );
};

export default Work;