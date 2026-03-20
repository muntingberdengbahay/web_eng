import React from 'react';
import Button from '../shared/Button';

const CareersSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between bg-blue-900 rounded-3xl p-10 text-white">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">Want to join our faculty?</h2>
          <p className="text-blue-200 mt-2">Explore open positions for professors, researchers, and staff.</p>
        </div>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
          View Careers
        </Button>
      </div>
    </section>
  );
};

export default CareersSection;