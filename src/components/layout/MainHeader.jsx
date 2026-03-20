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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo placeholder */}
        <div className="font-black text-2xl tracking-tighter text-blue-900">
          UNI<span className="text-blue-600">VERSE</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="md:hidden text-gray-700">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default MainHeader;