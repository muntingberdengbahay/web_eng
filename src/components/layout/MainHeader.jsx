import React from 'react';
import { Menu } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About BulSU', path: '/about' },
    { name: 'BulSU COE', path: '/college-engineering' },
    { name: 'Be a BulSUan', path: '/admissions' },
    { name: 'Work at BulSU', path: '/careers' },
  ];

  return (
    /* Using BulSU Maroon Hex #800000 */
    <nav className="bg-[#800000] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img src="/bulsu-logo.png" alt="Bulacan State University Logo" className="h-20 w-auto object-contain" />
          <h1 className="font-serif text-xl tracking-tight leading-tight">
    Bulacan State University
  </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="flex gap-6 font-sans font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="hover:text-[#FFB81C] transition-colors whitespace-nowrap">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default MainHeader;