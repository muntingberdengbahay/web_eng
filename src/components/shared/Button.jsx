import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const styles = {
    primary: "bg-university-red text-white hover:bg-university-dark shadow-md",
    outline: "border-2 border-university-red text-university-red hover:bg-red-50",
    ghost: "text-university-red hover:bg-red-50",
    secondary: "bg-university-gold text-white hover:opacity-90 font-bold"
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