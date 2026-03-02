import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Particles } from './components/ui/particles';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Membership from './pages/Membership';
import Trainers from './pages/Trainers';
import Transformations from './pages/Transformations';
import Contact from './pages/Contact';

// Page wrapper for animations and forced scroll behavior
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top on mount
    const handleForcedScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Execute immediately on mount
    handleForcedScroll();

    // Short secondary check to handle late layout shifts or browser restoration
    const timer = setTimeout(handleForcedScroll, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error: Routes does not accept key but AnimatePresence requires it */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/membership" element={<PageWrapper><Membership /></PageWrapper>} />
        <Route path="/trainers" element={<PageWrapper><Trainers /></PageWrapper>} />
        <Route path="/transformations" element={<PageWrapper><Transformations /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Disable browser's native scroll restoration to ensure our logic controls the positioning
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Particles
          className="fixed inset-0 z-0"
          quantity={150}
          ease={80}
          color="#ffce00"
          refresh
        />
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;