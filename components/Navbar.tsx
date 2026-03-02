import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, LOGO_URL, LOGO_V2_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    // Logic to force viewport to top of target section (page top)
    // Even if path is same, we trigger smooth scroll
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/95 backdrop-blur-3xl py-3 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
        : 'bg-transparent py-4 md:py-8'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" onClick={() => handleLinkClick('/')} className="relative z-50 flex items-center group">
          <img
            src={LOGO_URL}
            alt="Gymland Logo"
            className={`transition-all duration-500 object-contain logo-glow ${isScrolled ? 'h-8 md:h-12' : 'h-10 md:h-16 lg:h-20'}`}
          />
          <div className="absolute -inset-6 bg-gradient-to-r from-[#ffce00]/20 via-[#ff8c00]/20 to-[#ffce00]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl duration-500"></div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-[10px] font-black tracking-[0.3em] uppercase hover:text-[#ffce00] transition-all relative group ${location.pathname === item.path ? 'text-[#ffce00]' : 'text-white/60'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-[#ffce00] to-[#ff8c00] transition-all duration-500 rounded-full ${location.pathname === item.path ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                  }`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            to="/membership"
            onClick={() => handleLinkClick('/membership')}
            className="relative overflow-hidden group px-8 py-3 rounded-full font-black text-[10px] tracking-widest text-black transition-all inline-block"
          >
            <div className="absolute inset-0 bg-[#ffce00] transition-transform group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">INITIALIZE ACCESS</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-md border border-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed inset-0 min-h-screen w-full bg-[#000000] z-[9999] flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffce00] blur-[150px]"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff8c00] blur-[150px]"></div>
            </div>

            <div className="space-y-6 text-center relative z-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className="block text-4xl font-black italic tracking-tighter text-white hover:text-[#ffce00] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/membership"
                onClick={() => handleLinkClick('/membership')}
                className="inline-block mt-8 bg-[#ffce00] text-black px-10 py-4 rounded-full font-black text-xl italic tracking-tighter hover:scale-105 transition-transform"
              >
                JOIN THE MONARCHY
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full border border-white/10"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 absolute"></span>
              <span className="block w-6 h-0.5 bg-white -rotate-45 absolute"></span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;