import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <SectionTitle>About Our University</SectionTitle>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded on the principles of excellence and accessibility, our institution 
            has been at the forefront of higher education for over two decades. 
            We provide a vibrant environment where students can thrive academically 
            and personally.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our faculty consists of industry experts and world-class researchers 
            dedicated to mentoring the next generation of global citizens.
          </p>
        </div>
        <div className="md:w-1/2 w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/assets/images/about-campus.jpg" 
            alt="Campus Life" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;