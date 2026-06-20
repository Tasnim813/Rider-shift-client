import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;