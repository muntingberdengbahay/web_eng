import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const styles = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 shadow-md",
    outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-50",
    ghost: "text-blue-700 hover:bg-blue-50",
    dark: "bg-gray-900 text-white hover:bg-black"
  };

  return (
    <button 
      className={`px-6 py-3 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;