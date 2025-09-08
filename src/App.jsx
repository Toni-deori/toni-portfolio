import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import LightRays from './components/LightRays.jsx'
import Hero from './sections/hero.jsx'
import Welcome from './sections/Welcome.jsx';
import Navbar from './components/Navbar.jsx';
import AnimCounter from './components/AnimCounter.jsx';
import About from './components/About.jsx';
import Contact from './sections/Contact.jsx';
import Portfolio from './sections/Portfolio.jsx';
function App() {
  
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <>
        <AnimatePresence mode="wait" onExitComplete={() => setShowWelcome(false)}>
        {showWelcome && (
          <Welcome key="welcome" onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>
      {!showWelcome && (
        <>
        <Navbar />
          <div style={{ width: '100%', height: '600px', position: 'fixed' }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
          <Hero key="hero"/>
          <About />
        <AnimCounter/>
          <Portfolio />
          <Contact />
        </>
      )}
    </>
  );
}

export default App
