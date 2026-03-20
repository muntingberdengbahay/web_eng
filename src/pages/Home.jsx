import HeroCarousel from "../components/sections/HeroCarousel";
import AdmissionSection from "../components/sections/AdmissionSection";
import NewsSection from "../components/sections/NewsSection";
import gearBg from "../assets/images/gear-background.png";
import CalendarSection from "../components/sections/CalendarSection";

const Home = () => {
  return (
    <div>
      <HeroCarousel />

      <div className="my-20 relative overflow-hidden">
        {/* GEAR BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src={gearBg} alt="gear" className="w-full h-full object-contain scale-110" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <AdmissionSection />
          <NewsSection />
          <CalendarSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
