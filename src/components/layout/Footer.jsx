import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">About Us</h4>
          <p className="text-sm leading-relaxed">
            Empowering students through innovative education and a commitment to excellence since 1998.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-white">Campus Map</a></li>
            <li><a href="#" className="hover:text-white">Student Life</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Admissions</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">How to Apply</a></li>
            <li><a href="#" className="hover:text-white">Scholarships</a></li>
            <li><a href="#" className="hover:text-white">Tuition Fees</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
          <p className="text-sm">123 Education Lane, Knowledge City</p>
          <p className="text-sm mt-2 font-semibold">Email: info@university.edu</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;