import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import CeramicCoating from './components/Services/CeramicCoating';
import PaintCorrection from './components/Services/PaintCorrection';
import PaintProtectionFilm from './components/Services/PaintProtectionFilm';
import EssentialDetail from './components/Services/EssentialDetail';
import './index.css';

/**
 * Placeholder Components
 * These will be replaced with full implementations later
 * Each component follows the same layout pattern for consistency
 */
const Booking = () => (
  <div className="min-h-[calc(100vh-80px)] flex items-center justify-center font-heading text-2xl text-text-secondary">
    Booking Page Coming Soon
  </div>
);

const Gallery = () => (
  <div className="min-h-[calc(100vh-80px)] flex items-center justify-center font-heading text-2xl text-text-secondary">
    Gallery Page Coming Soon
  </div>
);

const About = () => (
  <div className="min-h-[calc(100vh-80px)] flex items-center justify-center font-heading text-2xl text-text-secondary">
    About Page Coming Soon
  </div>
);

const Contact = () => (
  <div className="min-h-[calc(100vh-80px)] flex items-center justify-center font-heading text-2xl text-text-secondary">
    Contact Page Coming Soon
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary font-body text-text">
        <Header />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
            <Route path="/services/paint-correction" element={<PaintCorrection />} />
            <Route path="/services/paint-protection-film" element={<PaintProtectionFilm />} />
            <Route path="/services/essential-detail" element={<EssentialDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
