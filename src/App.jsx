import React from 'react';
import './App.css'; 
import { Routes, Route } from 'react-router-dom';

// 1. Layout Components
import TopHeader from './components/layout/TopHeader';
import MainHeader from './components/layout/MainHeader';
import Footer from './components/layout/Footer';

// 2. Section Components
import HeroCarousel from './components/sections/HeroCarousel';
import AdmissionSection from './components/sections/AdmissionSection';
import AboutSection from './components/sections/AboutSection';
import NewsSection from './components/sections/NewsSection';
import EnrollmentSection from './components/sections/EnrollmentSection';

// 3. Pages
import CollegePage from './pages/CollegePage';

// --- MOCK DATA ---
const mockNews = [
  { id: 1, title: "Fall Enrollment 2026", excerpt: "Applications are now open for BulSU.", image: "https://images.unsplash.com/photo-1523050335397-584a7a72dd8b?w=400" },
  { id: 2, title: "New Research Lab", excerpt: "Our new facility is now operational.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400" },
  { id: 3, title: "Campus Sports Fest", excerpt: "Join the annual tournament!", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400" }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Global Header (Shows on every page) */}
      <TopHeader />
      <MainHeader />

      {/* 2. Main Content Area */}
      <main className="flex-grow">
        <Routes>
          
          {/* HOME ROUTE: All your sections go inside this element */}
          <Route path="/" element={
            <>
              <HeroCarousel />
              <AdmissionSection />
              <AboutSection />
              <NewsSection newsData={mockNews} />
              <EnrollmentSection />
            </>
          } />

          {/* COLLEGE PAGE ROUTE */}
          <Route path="/college-engineering" element={<CollegePage />} />
          
        </Routes>
      </main>

      {/* 3. Global Footer (Shows on every page) */}
      <Footer />
    </div>
  );
}

export default App;