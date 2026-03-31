import React from "react";

const UserBanner = () => {
  return (
    <div className="w-full flex justify-center items-center text-white shadow-lg px-4 py-10 bg-gradient-to-r from-purple-900 via-purple-700 to-blue-500">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full">
        
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-bold">50K+</div>
          <div className="text-base md:text-xl mt-2">Active Users</div>
        </div>

        <div className="hidden md:block w-px h-24 bg-white/40"></div>

        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-bold">200+</div>
          <div className="text-base md:text-xl mt-2">Premium Tools</div>
        </div>

        <div className="hidden md:block w-px h-24 bg-white/40"></div>

        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-bold">4.9</div>
          <div className="text-base md:text-xl mt-2">Rating</div>
        </div>

      </div>
    </div>
  );
};

export default UserBanner;