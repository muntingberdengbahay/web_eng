import React from 'react';

const SectionTitle = ({ children, className = "" }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
        {children}
      </h2>
      <div className="w-20 h-1.5 bg-blue-600 mt-3 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;