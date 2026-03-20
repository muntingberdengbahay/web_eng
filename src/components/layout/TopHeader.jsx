import React from 'react';
import { User, BookOpen } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-[#FFB81C] py-2"> {/* Slightly more padding for height */}
      <div className="container mx-auto px-4 flex justify-end items-center gap-10">
        
        {/* HEIMS Link */}
        <a href="#" className="flex items-center gap-3 text-black hover:opacity-80 transition-opacity">
          {/* Increased icon size to 28 (approx 7 in tailwind) */}
          <User size={28} strokeWidth={2.5} fill="black" /> 
          <span className="font-sans text-lg tracking-tight">HEIMS</span>
        </a>

        {/* E-LIBRARY Link */}
        <a href="#" className="flex items-center gap-3 text-black hover:opacity-80 transition-opacity">
          {/* Increased icon size to 28 */}
          <BookOpen size={28} strokeWidth={2.5} /> 
          <span className="font-sans text-lg tracking-tight">E-LIBRARY</span>
        </a>

      </div>
    </div>
  );
};

export default TopHeader;