import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 pb-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img  
    src="/bulsu-logo.png" 
    alt="BulSU Logo" 
    className="h-44 w-auto object-contain transition-transform hover:scale-105 duration-300" 
          />
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-[#FFB81C] font-bold text-xl uppercase tracking-wider mb-1">
            Contact Us
          </h4>
          {/* The Red Underline */}
          <div className="h-1 w-32 bg-[#800000] mb-6"></div>
          
          <div className="space-y-4 text-sm font-light leading-relaxed">
            <p>Guinhawa, City of Malolos, Bulacan</p>
            <p>(044) 919-7800</p>
            <p className="hover:text-[#FFB81C] cursor-pointer">officeofthepresident@bulsu.edu.ph</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-[#FFB81C] font-bold text-xl uppercase tracking-wider mb-1">
            Quick Links
          </h4>
          <div className="h-1 w-32 bg-[#800000] mb-6"></div>
          
          <ul className="space-y-4 text-sm font-light">
            <li><a href="/about" className="hover:text-[#FFB81C]">About BulSU</a></li>
            <li><a href="/careers" className="hover:text-[#FFB81C]">Work at BulSU</a></li>
            <li><a href="/college-engineering" className="hover:text-[#FFB81C]">BulSU COE</a></li>
          </ul>
        </div>

        {/* Student Services Section */}
        <div>
          <h4 className="text-[#FFB81C] font-bold text-xl uppercase tracking-wider mb-1">
            Student Services
          </h4>
          <div className="h-1 w-32 bg-[#800000] mb-6"></div>
          
          <ul className="space-y-4 text-sm font-light">
            <li><a href="/admissions" className="hover:text-[#FFB81C]">Be a BulSUan</a></li>
            <li><a href="https://www.bulsu.edu.ph/library" className="hover:text-[#FFB81C]">E-Library</a></li>
            <li><a href="https://bulsu.heims.ph/" className="hover:text-[#FFB81C]">HEIMS</a></li>
          </ul>
        </div>

      </div>

      {/* Optional: Bottom Copyright bar */}
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Bulacan State University. All rights reserved.</p>
        <p>Ipapo, Marc Danielle | Isidro, Philip Aaron | Maclang, Clark Danniel | Buñing, Christine Mae</p>
      </div>
    </footer>
  );
};

export default Footer;