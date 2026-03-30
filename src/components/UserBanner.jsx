import React from 'react';

const UserBanner = () => {
  return (
    <div className="flex justify-center items-center text-white rounded-lg shadow-lg mx-auto h-[247px] w-[1600px] bg-gradient-to-r from-purple-900 via-purple-700 to-blue-500">
      {/* Stats Container */}
      <div className="flex items-center space-x-12">
        {/* Active Users */}
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold">50K+</div>
          <div className="text-xl mt-2">Active Users</div>
        </div>

        {/* Divider */}
        <div className="w-px h-24 bg-gray-400"></div>

        {/* Premium Tools */}
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold">200+</div>
          <div className="text-xl mt-2">Premium Tools</div>
        </div>

        {/* Divider */}
        <div className="w-px h-24 bg-gray-400"></div>

        {/* Rating */}
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold">4.9</div>
          <div className="text-xl mt-2">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;