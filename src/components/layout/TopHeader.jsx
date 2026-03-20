import React from 'react';

const TopHeader = () => {
  return (
    <div className="bg-university-gold text-white py-1.5 text-xs font-bold border-b border-black/5">
      <div className="container mx-auto px-4 flex justify-between items-center text-red-950">
        <div className="flex gap-4 uppercase tracking-wider">
          <a href="#" className="hover:opacity-80">HEIMS Portal</a>
          <span>|</span>
          <a href="#" className="hover:opacity-80">E-Library</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;