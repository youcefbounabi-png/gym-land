
import React from 'react';
import { motion } from 'framer-motion';
import { COMPARISON_DATA, REPUTATION_STATS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 overflow-hidden">
      {/* Structural Refinement: Image Left, Content Right */}
      <section className="p-0 mt-16 lg:mt-24">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Column 1: High-Performance Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-10 bg-[#ffce00]/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5 aspect-[4/5] lg:h-[700px]">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1200" 
                  alt="Elite Performance Athlete" 
                  className="w-full h-full object-cover grayscale brightness-[0.4] transition-all duration-700 hover:grayscale-0 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 glass-card p-6 lg:p-10 rounded-[2rem] border-white/10">
                   <p className="text-xs font-black tracking-widest text-white/40 mb-2 uppercase">Core Node</p>
                   <h5 className="text-2xl lg:text-3xl font-black italic tracking-tighter uppercase text-[#ffce00]">BIOMECHANICAL HUB</h5>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Content Heading & DNA Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-12 order-1 lg:order-2 lg:pt-8"
            >
              <div className="relative">
                <span className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8 block">THE CORE STACK</span>
                <h1 className="hero-heading font-black italic tracking-tighter leading-[0.8] mb-8 uppercase text-white">
                  BIOLOGY <br /> <span className="gold-gradient-text">ENHANCED.</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#ffce00] to-transparent mb-10"></div>
                
                <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed">
                  The Gymland isn't just a physical space; it's a high-performance operating system for the human body. 
                  Located in the heart of Algiers, we've built the capital's largest biomechanical laboratory where elite coaching meets cutting-edge technology.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 lg:gap-12">
                {[
                  { label: 'Surface Area', val: '1.6K M²' },
                  { label: 'Assets Deployed', val: '120+' },
                  { label: 'System Uptime', val: '99.9%' },
                  { label: 'Protocols', val: 'Proprietary' },
                ].map((item, i) => (
                  <div key={i} className="group cursor-default border-l border-white/5 pl-6 hover:border-[#ffce00] transition-colors duration-500">
                    <h4 className="text-3xl lg:text-4xl font-black italic tracking-tighter mb-2 uppercase text-white">{item.val}</h4>
                    <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                 <p className="text-gray-500 text-sm italic font-light max-w-sm">
                   Our methodology focuses on neural mind-muscle connection, metabolic flexibility, and biomechanical safety.
                 </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Comparison & Reputation Section */}
      <section className="bg-black py-32 relative">
        <div className="app-container">
          <div className="text-center mb-24">
            <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8">System Analysis</h3>
            <h2 className="section-heading font-black italic tracking-tighter uppercase text-white mb-10">THE <span className="gold-gradient-text">DIFFERENTIAL.</span></h2>
            
            {/* Reputation Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center bg-white/5 border border-[#ffce00]/20 rounded-3xl p-8 backdrop-blur-md mb-16 shadow-[0_0_50px_rgba(255,206,0,0.05)]"
            >
              <div className="flex space-x-2 mb-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <i key={star} className="fas fa-star text-[#ffce00] text-xl glow-text"></i>
                ))}
              </div>
              <h4 className="text-2xl font-black text-white italic tracking-tighter">{REPUTATION_STATS.rating}.0 SYSTEM RATING</h4>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#ffce00]/60 mt-1">{REPUTATION_STATS.reviews}</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Status Quo Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] border border-white/5 rounded-[3rem] p-12 lg:p-16"
            >
              <h4 className="text-xl font-black italic tracking-tighter text-gray-500 mb-12 uppercase">TYPICAL FACILITIES</h4>
              <div className="space-y-10">
                {COMPARISON_DATA.typical.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-gray-600 text-[10px] font-black tracking-[0.2em] uppercase">{item.label}</span>
                    <span className="text-gray-400 text-sm font-light italic">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Monarchy Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#080808] border border-[#ffce00]/30 rounded-[3rem] p-12 lg:p-16 shadow-[0_0_80px_rgba(255,206,0,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                 <i className="fas fa-crown text-3xl text-[#ffce00]/10"></i>
              </div>
              <h4 className="text-2xl font-black italic tracking-tighter text-[#ffce00] mb-12 uppercase">THE GYMLAND MONARCHY</h4>
              <div className="space-y-10">
                {COMPARISON_DATA.gymland.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-[#ffce00]/60 text-[10px] font-black tracking-[0.2em] uppercase">{item.label}</span>
                    <span className="text-white text-base font-black italic tracking-tighter uppercase">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-16 pt-10 border-t border-white/5">
                 <p className="text-gray-500 text-xs font-light leading-relaxed">
                   While smaller gyms suffer from spatial saturation and limited mechanics, The Gym Land is engineered for absolute high-volume output and biomechanical superiority.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DNA Manifesto Section */}
      <section className="bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] sm:text-[40rem] font-black text-white/[0.01] pointer-events-none select-none italic">
          DNA
        </div>
        <div className="app-container relative z-10 text-center">
          <h2 className="section-heading font-black italic tracking-tighter mb-16 sm:mb-24 uppercase text-white">CORE <span className="text-[#ffce00]">PROTOCOLS.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {[
              { title: 'Longevity', icon: 'fa-heart-pulse', desc: 'Sustainable biological maintenance. We build athletes for the long-game, ensuring joints and CNS health.' },
              { title: 'Raw Power', icon: 'fa-fire-alt', desc: 'Removing the limiters. Pure force production engineered through precise movement and mechanics.' },
              { title: 'Connectivity', icon: 'fa-network-wired', desc: 'The Monarchy. A social high-performance environment where success is a shared state.' },
            ].map((p, idx) => (
              <div key={idx} className="space-y-6 lg:space-y-8 group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(255,206,0,0.1)] group-hover:border-[#ffce00] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(255,206,0,0.2)]">
                  <i className={`fas ${p.icon} text-3xl sm:text-4xl text-[#ffce00]`}></i>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase text-white">{p.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
