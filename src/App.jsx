import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import BeABulSUan from "./pages/BeABulSUan";
import AboutBulSU from "./pages/AboutBulSU";
import Admissions from "./pages/Admissions";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/be-a-bulsuan" element={<BeABulSUan />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about-bulsu" element={<AboutBulSU />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );
}

export default App;