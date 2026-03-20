import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ children, onNext, onPrev }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      {/* Content */}
      <div className="w-full h-full transition-all duration-500 ease-in-out">
        {children}
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button 
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="text-white" size={32} />
      </button>
    </div>
  );
};

export default Carousel;