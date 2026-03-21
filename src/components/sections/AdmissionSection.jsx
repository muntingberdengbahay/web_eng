import React from 'react';
import { Link } from 'react-router-dom'; 
import admissionIcon from "../../assets/images/admission.png";
import partnerIcon from "../../assets/images/partner.png";
import connectIcon from "../../assets/images/connect.png";

const AdmissionSection = () => {
  return (
    <div className="py-16">

      {/* Gear Background */}
    

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        {/* CARD */}
        <div className="flex flex-col items-center">
          <img src={admissionIcon} className="w-20 mb-5" />
          <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Enriqueta, serif' }}>BulSU Admission</h3>
          <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Discover how to apply, requirements, and scholarships at BulSU.
          </p>
          <Link 
            to="/admissions" 
            className="bg-[#800000] hover:bg-[#A52A2A] text-white px-8 py-2 text-sm rounded transition-colors font-bold"
          >
            Enroll Now!
          </Link>

        </div>

        <div className="flex flex-col items-center">
          <img src={partnerIcon} className="w-20 mb-5" />
          <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Enriqueta, serif' }}>Partner with Us</h3>
          <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Collaborate for training, research, and community development.
          </p>
          <Link 
            to="/careers" 
            className="bg-[#800000] hover:bg-[#A52A2A] text-white px-8 py-2 text-sm rounded transition-colors font-bold"
          >
            Be our Partner!
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <img src={connectIcon} className="w-20 mb-5" />
          <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Enriqueta, serif' }}>About COE</h3>
          <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Learn more about the College of Engineering's programs.
          </p>
          <Link 
            to="/college-engineering" 
            className="bg-[#800000] hover:bg-[#A52A2A] text-white px-8 py-2 text-sm rounded transition-colors font-bold"
          >
            Learn More!
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdmissionSection;