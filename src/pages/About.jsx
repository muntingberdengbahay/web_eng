import React from 'react';
import historyImg from '../assets/images/history.png'; // Adjust path based on file location
import presImg from '../assets/images/pres.png';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* ===== HERO / TITLE SECTION ===== */}
      <div className="bg-red-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Enriqueta, serif' }}>
            About BulSU Section
          </h1>
        </div>
      </div>

      {/* ===== ABOUT BULACAN STATE UNIVERSITY SECTION ===== */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
              About Bulacan State University
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Bulacan State University (BulSU) is a premier institution of higher learning in the Philippines, committed to providing quality education, research, and extension services. Established with a vision to empower communities and foster innovation, BulSU offers a wide range of academic programs across various disciplines. Our university prides itself on nurturing holistic development, combining academic excellence with values formation and community engagement. Through our dedicated faculty, state-of-the-art facilities, and dynamic learning environment, we prepare students to become leaders and contributors to society.
            </p>
          </div>
        </div>
      </div>

      {/* ===== VISION & MISSION SECTION ===== */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-700 rounded-xl shadow-md p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'Enriqueta, serif', color: '#D4A017' }}>
                VISION
              </h3>
              <p className="text-lg leading-relaxed">
                Bulacan State University envisions itself as a leading university in the Asia-Pacific region, recognized for excellence in instruction, research, and extension services, and committed to the holistic development of individuals and communities.
              </p>
            </div>
            <div className="bg-red-700 rounded-xl shadow-md p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'Enriqueta, serif', color: '#D4A017' }}>
                MISSION
              </h3>
              <p className="text-lg leading-relaxed">
                Bulacan State University is committed to provide quality education through effective instruction, research, and extension services, and to produce graduates who are competent, socially responsible, and committed to the pursuit of truth and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== GOALS SECTION ===== */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
            GOALS
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4A017' }}>
                Academic Excellence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To maintain and enhance the quality of academic programs through continuous improvement of curriculum, teaching methodologies, and assessment practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4A017' }}>
                Research and Innovation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To promote a culture of research and innovation among faculty and students, contributing to knowledge creation and addressing societal challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4A017' }}>
                Community Engagement
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To strengthen partnerships with local and international communities through extension services, outreach programs, and collaborative initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4A017' }}>
                Sustainable Development
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To integrate sustainability principles into all university operations, promoting environmental stewardship and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BRIEF HISTORY SECTION ===== */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
            BulSU Brief History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Bulacan State University traces its roots back to 1904 when it was established as a provincial high school. Over the decades, it evolved into a comprehensive university offering diverse programs in education, engineering, business, and more. Through periods of growth and transformation, BulSU has remained dedicated to its mission of providing accessible, quality education to the people of Bulacan and beyond. Today, it stands as a beacon of academic excellence and community service in the region.
              </p>
            </div>
            <div>
              <img
                src={historyImg}
                alt="Old BulSU Building"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== UNIVERSITY PRESIDENT SECTION ===== */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
            The University President
          </h2>
          <div className="max-w-md mx-auto">
            <img
              src={presImg}
              alt="University President"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D4A017' }}>
              Dr. Teody Cruz San Andres
            </h3>
            <p className="text-gray-600 mb-4">
              University President
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Dr. Teody Cruz San Andres has been leading Bulacan State University with vision and dedication, guiding the institution towards greater heights in education, research, and community service.
            </p>
          </div>
        </div>
      </div>

      {/* ===== QUALITY POLICY SECTION ===== */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
            Quality Policy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Bulacan State University is committed to providing quality education and services that meet the highest standards of excellence. We continuously improve our processes, foster innovation, and ensure that all stakeholders receive value through our dedication to quality, integrity, and community impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;