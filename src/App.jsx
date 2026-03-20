import React from 'react';

// Layout Components
import TopHeader from './components/layout/TopHeader';
import MainHeader from './components/layout/MainHeader';
import Footer from './components/layout/Footer';

// Section Components
import HeroCarousel from './components/sections/HeroCarousel';
import AdmissionSection from './components/sections/AdmissionSection';
import AboutSection from './components/sections/AboutSection';
import NewsSection from './components/sections/NewsSection';
import EnrollmentSection from './components/sections/EnrollmentSection';

// Shared
import Container from './components/shared/Container';

// --- MOCK DATA (Temporary for testing) ---
const mockNews = [
  { id: 1, title: "Fall Enrollment 2026", excerpt: "Applications are now officially open for all undergraduate programs.", image: "https://images.unsplash.com/photo-1523050335397-584a7a72dd8b?w=400" },
  { id: 2, title: "New Research Lab", excerpt: "Our state-of-the-art AI research facility is now operational.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400" },
  { id: 3, title: "Campus Sports Fest", excerpt: "Join us this Friday for the annual inter-campus tournament.", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400" }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Global Layout Shell */}
      <TopHeader />
      <MainHeader />

      {/* 2. Main Content Area */}
      <main className="flex-grow">
        
        {/* Full-width Hero */}
        <HeroCarousel />

        {/* Floating Cards Section (overlaps hero slightly) */}
        <AdmissionSection />

        {/* Standard Content Sections */}
        <AboutSection />
        
        <NewsSection newsData={mockNews} />

        <EnrollmentSection />

      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}

export default App;