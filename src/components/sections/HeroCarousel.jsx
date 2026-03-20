import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import hero1 from "../../assets/images/hero-1.jpg";
import hero2 from "../../assets/images/hero-2.jpg";
import hero3 from "../../assets/images/hero-3.jpg";
import hero4 from "../../assets/images/hero-4.jpg";
import hero5 from "../../assets/images/hero-5.jpg";
import hero6 from "../../assets/images/hero-6.jpg";
import hero7 from "../../assets/images/hero-7.jpg";
import hero8 from "../../assets/images/hero-8.png";

const HeroCarousel = () => {
  const slides = [
    { image: hero1, title: "Welcome to Campus Life", subtitle: "Explore academics, culture, and community." },
    { image: hero2, title: "Research & Innovation", subtitle: "Where ideas become real-world solutions." },
    { image: hero3, title: "Student Success", subtitle: "Support and services for every learner." },
    { image: hero4, title: "Global Opportunities", subtitle: "Study abroad, exchange, and international programs." },
    { image: hero5, title: "Vibrant Campus", subtitle: "A safe, connected, and active university home." },
    { image: hero6, title: "Career-Ready", subtitle: "Skills, internships, and career pathways." },
    { image: hero7, title: "Arts & Athletics", subtitle: "Creativity, performance, and healthy living." },
    { image: hero8, title: "Your Future Starts Here", subtitle: "Join our community and discover your potential." },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length, paused]);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div
      style={{ position: "relative", width: "100%", minHeight: "380px", overflow: "hidden" }}
      className="hero-carousel-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center" }}>
        <img
          src={slides[current].image}
          alt={slides[current].title}
          style={{ width: "100%", height: "auto", maxHeight: "760px", objectFit: "contain", display: "block" }}
        />
      </div>
      <button onClick={prevSlide} className="carousel-arrow" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", background: "white", color: "black", border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", display: "grid", placeItems: "center" }}>
        <IoIosArrowBack size={20} color="#000" />
      </button>
      <button onClick={nextSlide} className="carousel-arrow" style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "white", color: "black", border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", display: "grid", placeItems: "center" }}>
        <IoIosArrowForward size={20} color="#000" />
      </button>
      <style>{`
        .hero-carousel-container .carousel-arrow { opacity: 0; transition: opacity .25s ease; }
        .hero-carousel-container:hover .carousel-arrow { opacity: 1; }
      `}</style>
    </div>
  );
};

export default HeroCarousel;