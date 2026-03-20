import React from 'react';
import Button from '../shared/Button';

const HeroCarousel = () => {
  return (
    <section className="relative h-[500px] bg-blue-900 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-40 bg-[url('/assets/images/campus-main.jpg')] bg-cover bg-center" />
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-bold max-w-2xl leading-tight">
          Shape Your Future at <span className="text-blue-400">Universe</span>
        </h1>
        <p className="mt-6 text-xl max-w-xl text-gray-200">
          Join a community of innovators, researchers, and leaders. Enrollment for Fall 2026 is now open.
        </p>
        <div className="mt-10 flex gap-4">
          <Button variant="primary">Apply Now</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
            Explore Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;