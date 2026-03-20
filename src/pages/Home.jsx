import HeroCarousel from '../components/sections/HeroCarousel';
import AdmissionSection from '../components/sections/AdmissionSection';
import Container from '../components/shared/Container';

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Container className="py-10">
         <AdmissionSection />
      </Container>
    </>
  );
};