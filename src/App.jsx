import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import CustomCursor from './components/CustomCursor';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Diploma from './pages/Diploma';

function LocationProvider({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="diploma" element={<Diploma />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="noise-overlay" />
      <CustomCursor />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" />
        ) : (
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
