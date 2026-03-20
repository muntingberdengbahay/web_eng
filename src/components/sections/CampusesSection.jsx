import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const CampusesSection = ({ campuses }) => {
  return (
    <section className="py-20 bg-university-dark text-white">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-white">Our Campuses</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {campuses?.map((campus) => (
            <div key={campus.id} className="group relative overflow-hidden rounded-2xl h-64">
              <img src={campus.image} alt={campus.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold">{campus.name}</h3>
                <p className="text-gray-300 text-sm">{campus.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusesSection;