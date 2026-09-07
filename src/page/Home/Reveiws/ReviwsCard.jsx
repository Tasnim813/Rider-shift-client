import React from 'react';

const ReviwsCard = ({ review }) => {
    const {user_photoURL,review_info,userName,user_email}=review
    return (
        <div>
             <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-sm border border-gray-100">
      
      {/* Quote Icon */}
      <div className="text-4xl font-bold text-teal-200 mb-2">
        “
      </div>

      {/* Review */}
      <p className="text-gray-600 text-sm leading-5">
      {review_info}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-400 my-4"></div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-teal-900 flex items-center  justify-center text-white font-semibold">
       <img className='rounded-full' src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-bold text-gray-800 text-sm">
        {userName}
          </h3>

          <p className="text-gray-500 text-xs">
           {user_email}
          </p>
        </div>

      </div>
    </div>
        </div>
    );
};

export default ReviwsCard;