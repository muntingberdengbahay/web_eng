import React from 'react';
import applyImg from '../assets/images/Work at BulSu.png';

const Careers = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Hero Image Container */}
      <div className="container mx-auto px-4 pt-8 max-w-5xl">
        <div className="w-full rounded-sm overflow-hidden shadow-sm border border-gray-100">
          {/* Ensure 'careers-banner.jpg' is in your /public folder */}
          <img 
            src={applyImg} 
            alt="BulSU is Hiring" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* 2. Content Sections - Narrow Column for Readability */}
      <div className="container mx-auto px-4 md:px-20 lg:px-48 py-12 space-y-10">
        
        {/* Work at BulSU */}
        <section>
          <h1 className="text-3xl font-serif font-bold text-[#800000] mb-1">Work at BulSU</h1>
          <p className="text-[#800000] font-bold italic mb-4 text-sm">
            Be part of the flame that shapes future leaders.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            At Bulacan State University, careers are more than just jobs—they are opportunities to inspire, lead, and create 
            meaningful impact. Driven by ALAB, we are looking for passionate individuals who are ready to contribute their 
            expertise and grow within a dynamic academic community.
          </p>
          <p className="text-[#FFB81C] font-bold mt-4 text-sm uppercase tracking-wide">
            Welcome to a workplace where your passion fuels progress.
          </p>
        </section>

        {/* Why Work at BulSU */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-4 underline decoration-[#FFB81C] decoration-2 underline-offset-8">
            Why Work at BulSU?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Joining Bulacan State University means entering a professional environment that values excellence, innovation, 
            collaboration, and purpose. Employees are encouraged to deliver quality service, explore new ideas, and work 
            alongside talented professionals who share the same goal of shaping future leaders.
          </p>
        </section>

        {/* Career Opportunities */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-4 underline decoration-[#FFB81C] decoration-2 underline-offset-8">
            Career Opportunities
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Bulacan State University offers a wide range of career opportunities for individuals with diverse expertise. From 
            academic roles such as professors, instructors, and lecturers, to administrative and support positions, the 
            university provides avenues for professional growth.
          </p>
        </section>

        {/* How to Apply */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-4 underline decoration-[#FFB81C] decoration-2 underline-offset-8">
            How to Apply?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Applying to Bulacan State University is a step toward a meaningful and fulfilling career. Interested applicants are 
            encouraged to prepare their updated resume or curriculum vitae along with the necessary documents, and 
            submit them through the university's official application channels.
          </p>
        </section>

        {/* Connect With Us & Apply Button */}
        <section className="pb-20 border-t pt-10">
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-4">Connect with Us</h2>
          <p className="text-gray-700 leading-relaxed text-sm mb-10">
            For inquiries regarding career opportunities, applicants may reach out to the Human Resources Office of Bulacan State University.
          </p>
          
          {/* Button aligned to the right like your screenshot */}
          <div className="flex justify-end">
            <button className="bg-[#800000] text-white px-10 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-[#FFB81C] hover:text-[#800000] transition-all shadow-md active:scale-95">
              Apply Now!
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Careers;