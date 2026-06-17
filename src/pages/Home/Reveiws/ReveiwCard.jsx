import React from 'react';

const ReveiwCard = ({reveiw}) => {
    const {review,userName,delivery_email,user_photoURL}=reveiw;
    return (
        <div className="flex justify-center items-center min-h-[500px] bg-gray-100">
      <div className="w-[380px] bg-white rounded-3xl p-8 shadow-md">

        {/* Quote Icon */}
        <div className="text-5xl text-teal-200 mb-5">
          ❝
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-7 text-[16px]">
          {review}
        </p>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-gray-300 my-6"></div>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <img src={user_photoURL} alt={userName} className="w-12 h-12 rounded-full" />

          <div>
            <h2 className="text-xl font-bold text-teal-900">
              {userName}
            </h2>
            <p className="text-gray-500 text-sm">
              {delivery_email}
            </p>
          </div>
        </div>

      </div>
    </div>
    );
};

export default ReveiwCard;