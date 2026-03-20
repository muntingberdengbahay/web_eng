import React from 'react';

const SectionTitle = ({ children, className = "" }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-university-red tracking-tight">
        {children}
      </h2>
      <div className="w-20 h-1.5 bg-university-gold mt-3 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;