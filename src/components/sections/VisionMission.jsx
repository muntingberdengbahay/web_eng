import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="p-8 bg-blue-800 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-blue-400 text-4xl">“</span> Our Vision
          </h3>
          <p className="text-blue-100 italic">
            To be a leading global university recognized for excellence in teaching, 
            research, and innovation that transforms lives.
          </p>
        </div>
        <div className="p-8 bg-blue-800 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-blue-400 text-4xl">“</span> Our Mission
          </h3>
          <p className="text-blue-100 italic">
            To provide high-quality education that empowers students with the 
            knowledge and skills required to succeed in a rapidly changing world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;