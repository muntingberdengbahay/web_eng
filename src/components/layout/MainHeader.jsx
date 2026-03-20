import React from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Use an icon library like lucide-react

const MainHeader = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="bg-university-red shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo placeholder */}
        <div className="font-black text-xl tracking-tight">UNIVERSITY NAME</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium italic">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="hover:text-university-gold transition-colors cursor-pointer border-b-2 border-transparent hover:border-university-gold">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default MainHeader;