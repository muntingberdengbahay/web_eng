import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";
import hero4 from "../assets/images/hero-4.jpg";
import hero5 from "../assets/images/hero-5.jpg";
import hero6 from "../assets/images/hero-6.jpg";
import hero7 from "../assets/images/hero-7.jpg";
import hero8 from "../assets/images/hero-8.png";
import tenStepEnrollment from "../assets/images/10-Step-Enrollment-Web.png";

const Admissions = () => {
  const slides = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7,
    hero8,
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  return (
    <div>
      {/* ===== HERO / INTRO SECTION ===== */}
      <div className="py-12 px-4 max-w-[1450px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
        
        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
          Want to be a BulSUan?
        </h1>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Enriqueta, serif', color: '#D4A017' }}>
          Feel the ALAB. Become the spark.
        </h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          At Bulacan State University, being a BulSUan means more than earning a degree—it means becoming part of a community fueled by passion, resilience, and purpose. Here, you don't just study—you grow, lead, and ignite your potential.
From dynamic classrooms to vibrant campus life, BulSU empowers you to: Pursue excellence in your chosen field; Discover your strengths and passions; Build lifelong connections and experiences.
        </p>
        <p className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Enriqueta, serif', color: '#D4A017' }}>
          Your journey starts here. Be one of us. Be a BulSUan.
        </p>
      </div>

      {/* ===== STUDENT ORGANIZATIONS SECTION ===== */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
            Student Organizations
          </h2>
          <p className="text-gray-700 mb-1">
            At Bulacan State University, student life is alive with opportunities. Whether you are academically driven, creatively inspired, or socially motivated, there is a place for you.
          </p>
          <p className="text-gray-700 mb-1">
            Explore a wide range of organizations:
          </p>

          {/* Bullet List */}
          <div className="grid grid-cols-1 gap-0 max-w-2xl py-4">
            <div className="flex items-start">
              <span className="text-red-700 text-xl mr-2 font-bold">•</span>
              <p className="text-gray-800 text-base">Academic & Co-Curricular Organizations</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-700 text-xl mr-2 font-bold">•</span>
              <p className="text-gray-800 text-base">Socio-Civic and Community Groups</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-700 text-xl mr-2 font-bold">•</span>
              <p className="text-gray-800 text-base">Religious Organizations</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-700 text-xl mr-2 font-bold">•</span>
              <p className="text-gray-800 text-base">Special Interest Groups</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-700 text-xl mr-2 font-bold">•</span>
              <p className="text-gray-800 text-base">Publication and Media Organizations</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-700 text-xl mr-2 font-bold">•</span>
              <p className="text-gray-800 text-base">Student Governing Bodies</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
           All student organizations are guided and supported by the Office of Student Organizations (OSOA), ensuring that every BulSUan has a platform to lead, serve, and shine.
          </p>
          
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
          OSOA Approved Events
        </h2>
        {/* Carousel */}
        <div className="relative w-full max-w-2xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
          >
            <IoIosArrowBack size={20} />
          </button>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={slides[current]}
              alt={`OSOA Event ${current + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === current ? 'bg-red-700' : 'bg-gray-400'}`}
            />
          ))}
        </div>

        </div>
      </div>

      {/* ===== ENROLLMENT SECTION ===== */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
            Enrollment Process
          </h2>
          <p className="text-red-700 text-lg mb-0 text-center leading-relaxed">
            Ready to ignite your future at Bulacan State University?
          </p>
          <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
            Ignite your journey at Bulacan State University in 10 easy steps.
          </p>

          {/* Centered Responsive Image */}
          <div className="text-center">
            <img
              src={tenStepEnrollment}
              alt="10-Step Enrollment Process"
              className="max-w-3xl h-auto shadow-lg rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* ===== ADMISSION SECTION ===== */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Enriqueta, serif', color: '#B91C3C' }}>
            Contact the Admissions Now
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Our admissions team is ready to answer your questions, provide guidance, and support you through your journey to becoming a proud BulSUan. 
            Reach out today to explore how Bulacan State University can help you achieve your academic and professional goals.
          </p>
          <div className="flex justify-end">
            <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 text-sm rounded">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;