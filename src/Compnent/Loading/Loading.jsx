import React from 'react';

const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-lg font-semibold text-gray-600">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;