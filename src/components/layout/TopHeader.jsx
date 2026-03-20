import React from 'react';

const TopHeader = () => {
  return (
    <div className="bg-blue-900 text-white py-2 text-sm border-b border-blue-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">HEIMS Portal</a>
          <span className="text-blue-400">|</span>
          <a href="#" className="hover:underline">E-Library</a>
        </div>
        <div className="hidden md:block">
          <span>Contact: +1 (800) UNIVERSITY</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;