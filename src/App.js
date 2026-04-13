import './App.css';
import React from 'react';
import NavBar from './Components/Nav';
import Section from './Components/Section';
import GrainDefs from './shared/GrainDefs';

import Hero from './sections/Hero/Hero';
import Music from './sections/Music/Music';
import Tour from './sections/Tour/Tour';
import About from './sections/About/About';
import MailingList from './sections/MailingList/MailingList';
import Merch from './sections/Merch/Merch';
import Contact from './sections/Contact/Contact';

// Gallery is below the fold — lazy-load to keep the initial bundle lean
const Gallery = React.lazy(() => import('./sections/Gallery/Gallery'));

function App() {
  return (
    <div className="App">
      {/* SVG grain filter — mounted once, referenced via CSS */}
      <GrainDefs />

      {/* Sticky navigation */}
      <NavBar />

      {/* Page sections — IDs used by NavBar's IntersectionObserver */}
      <Section id="section-hero"         content={<Hero />} />
      <Section id="section-music"        content={<Music />}        className="section--alt" />
      <Section id="section-tour"         content={<Tour />} />
      <Section id="section-about"        content={<About />}        className="section--alt" />
      <Section id="section-gallery"      content={<React.Suspense fallback={<div style={{ minHeight: '100vh' }} />}><Gallery /></React.Suspense>} />
      <Section id="section-mailing-list" content={<MailingList />}  className="section--alt" />
      <Section id="section-merch"        content={<Merch />} />
      <Section id="section-contact"      content={<Contact />}      className="section--alt" />
    </div>
  );
}

export default App;
