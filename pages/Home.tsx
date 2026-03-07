

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, EQUIPMENT_PARTNERS, LOGO_V2_URL } from '../constants';
import { ShadowOverlay } from '../components/ui/ShadowOverlay';
import { useLanguage } from '../LanguageContext';

// --- Components ---

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacityIndicator = useTransform(scrollY, [0, 200], [1, 0]);
  const { t } = useLanguage();

  // Materials Slider State
  const [materialIndex, setMaterialIndex] = useState(0);

  const nextMaterial = () => {
    setMaterialIndex((prev) => (prev + 1) % EQUIPMENT_PARTNERS.length);
  };

  const prevMaterial = () => {
    setMaterialIndex((prev) => (prev - 1 + EQUIPMENT_PARTNERS.length) % EQUIPMENT_PARTNERS.length);
  };

  return (
    <div className="overflow-hidden bg-[#020202]">
      {/* Fractured Ambient Shapes */}
      <div className="fractured-accent top-[15%] left-[-5%] rotate-[-15deg]"></div>
      <div className="fractured-accent bottom-[10%] right-[-5%] rotate-[165deg]"></div>

      {/* Cinematic Hero */}
      <section className="relative w-full min-h-screen flex justify-center overflow-hidden p-0 m-0 pb-24">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero_video_poster.png"
            className="w-full h-full object-cover grayscale brightness-[0.4]"
          >
            <source src="/hero_optimized.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffce00]/[0.02] to-black/80"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ffce00]/3 blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff8c00]/2 blur-[120px] animate-float"></div>
        </motion.div>

        <div className="app-container relative z-10 w-full" style={{ paddingTop: '100px' }}>
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <img
                src={LOGO_V2_URL}
                alt="Gymland Arms Logo"
                className="h-24 md:h-32 lg:h-40 mx-auto logo-glow brand-pulse"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12"
            >
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.5em] text-[#ffce00] uppercase bg-white/5 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(255,206,0,0.1)] inline-block">
                {t('hero_badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic hero-heading font-black tracking-tighter mb-8 text-white uppercase"
            >
              {t('hero_title_1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffce00] to-[#ff8c00] glow-text">{t('hero_title_2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/membership"
                className="w-full sm:w-auto btn-premium group relative px-10 py-5 rounded-full overflow-hidden bg-[#ffce00] text-black font-black italic tracking-tighter text-lg hover:scale-105 hover:shadow-[0_0_50px_rgba(255,206,0,0.4)] active:scale-95 transition-all"
              >
                <span className="relative z-10">{t('hero_cta_primary')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto btn-premium group px-10 py-5 rounded-full border border-white/20 text-white font-black italic tracking-tighter text-lg hover:border-[#ff8c00] hover:shadow-[0_0_30px_rgba(255,140,0,0.2)] active:scale-95 transition-all relative overflow-hidden"
              >
                <span className="relative z-10">{t('hero_cta_secondary')}</span>
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
            </motion.div>

            <motion.a
              href="#stats-section"
              style={{ opacity: opacityIndicator }}
              className="mt-10 inline-flex flex-col items-center cursor-pointer group transition-opacity duration-300"
            >
              <p className="text-[10px] font-bold tracking-[0.4em] text-white/40 mb-4 uppercase group-hover:text-[#ffce00] transition-colors">{t('hero_scroll')}</p>
              <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#ffce00] to-transparent animate-pulse group-hover:scale-y-110 transition-transform origin-top"></div>
            </motion.a>
          </div>
        </div>
      </section>

      <div className="h-[50px] w-full"></div>

      {/* Stats */}
      <section id="stats-section" className="relative">
        <div className="app-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: t('stat_surface'), val: 1600, suffix: ' M²', icon: 'fa-vector-square' },
              { label: t('stat_equipment'), val: 120, suffix: '+', icon: 'fa-dumbbell' },
              { label: t('stat_uptime'), val: 24, suffix: '/7', icon: 'fa-bolt' },
              { label: t('stat_members'), val: 3000, suffix: '+', icon: 'fa-users' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2rem] text-center border-white/5 group h-full flex flex-col items-center justify-center hover-scale"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#ffce00] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,206,0,0)] group-hover:shadow-[0_0_30px_rgba(255,206,0,0.3)]">
                  <i className={`fas ${stat.icon} text-2xl group-hover:text-black transition-colors`}></i>
                </div>
                <h4 className="text-3xl lg:text-4xl font-black italic tracking-tighter mb-1 uppercase text-white">
                  <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                </h4>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="app-container mt-20">
          <div className="brand-divider"></div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-black/30 relative py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#ffce00]/2 blur-[120px] pointer-events-none"></div>

        <div className="app-container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
            <div className="max-w-2xl">
              <span className="text-[#ffce00] font-black tracking-widest text-[10px] mb-4 block uppercase">{t('home_services_badge')}</span>
              <h2 className="section-heading font-black italic leading-[0.9] uppercase text-white">
                {t('home_services_title_1')} <br /> <span className="gold-gradient-text">{t('home_services_title_2')}</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg font-light max-w-sm leading-relaxed">
              {t('home_services_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden neon-border hover-scale"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2, transition: { type: "spring", stiffness: 300 } }}
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-[0.5]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 lg:p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#ffce00] text-[10px] font-black tracking-[0.3em] mb-4 block">{t('home_protocol_label')} 0{idx + 1}</span>
                  <h3 className="text-2xl lg:text-3xl font-black italic tracking-tighter mb-2 uppercase text-white">
                    {service.title} <br /> <span className="text-gray-500 text-lg">{service.subtitle}</span>
                  </h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center space-x-3 text-[10px] font-black tracking-widest uppercase text-white hover:text-[#ffce00] transition-colors">
                    <span>{t('home_service_link')}</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Women-Only Area */}
      <section className="relative py-24 bg-[#050505]">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-[3rem] overflow-hidden h-[500px] border border-white/5 order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200" alt="Women Only Zone" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="w-20 h-1 bg-[#ffce00] mb-6"></div>
                <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">{t('women_title_1')} <br /> {t('women_title_2')}</h3>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#ffce00] font-black tracking-widest text-[10px] mb-4 block uppercase">{t('women_badge')}</span>
              <h2 className="text-4xl lg:text-5xl font-black italic text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                {t('women_title_1')} <br /><span className="text-gray-600">{t('women_title_2')}</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                {t('women_desc')}
              </p>
              <Link to="/services" className="px-8 py-4 border border-white/20 rounded-full text-white font-black italic uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all">
                {t('women_cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 relative overflow-hidden">
        <div className="app-container">
          <div className="text-center mb-16">
            <span className="text-[#ffce00] font-black tracking-widest text-[10px] mb-4 block uppercase">{t('perks_badge')}</span>
            <h2 className="text-4xl lg:text-5xl font-black italic text-white uppercase tracking-tighter">
              {t('perks_title_1')} <span className="text-gray-600">{t('perks_title_2')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('perk_snack_title'), desc: t('perk_snack_desc'), icon: 'fa-utensils' },
              { title: t('perk_library_title'), desc: t('perk_library_desc'), icon: 'fa-book' },
              { title: t('perk_hygiene_title'), desc: t('perk_hygiene_desc'), icon: 'fa-shield-virus' }
            ].map((perk, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-[#ffce00]/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-[#ffce00]/10 flex items-center justify-center text-[#ffce00] text-2xl mb-8 group-hover:bg-[#ffce00] group-hover:text-black transition-all duration-500">
                  <i className={`fas ${perk.icon}`}></i>
                </div>
                <h3 className="text-xl font-black italic text-white uppercase tracking-tighter mb-4">{perk.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#ffce00] font-black tracking-widest text-[10px] mb-4 block uppercase">{t('comp_badge')}</span>
              <h2 className="text-4xl lg:text-5xl font-black italic text-white uppercase tracking-tighter mb-10 leading-[0.9]">
                {t('comp_title_1')} <br /><span className="text-gray-600">{t('comp_title_2')}</span>
              </h2>

              <div className="space-y-6">
                {[
                  { label: t('comp_space_label'), bad: t('comp_space_bad'), good: t('comp_space_good') },
                  { label: t('comp_equip_label'), bad: t('comp_equip_bad'), good: t('comp_equip_good') },
                  { label: t('comp_env_label'), bad: t('comp_env_bad'), good: t('comp_env_good') },
                  { label: t('comp_coach_label'), bad: t('comp_coach_bad'), good: t('comp_coach_good') }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-2 gap-4 pb-6 border-b border-white/5">
                    <div>
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">{row.label}</p>
                      <p className="text-gray-500 text-sm font-medium line-through decoration-red-500/50">{row.bad}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#ffce00] uppercase tracking-widest mb-1">{t('comp_gymland')}</p>
                      <p className="text-white text-sm font-bold uppercase">{row.good}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#ffce00] rounded-[3rem] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className="text-6xl font-black italic tracking-tighter text-black">5.0</div>
                  <div className="pt-2">
                    <div className="flex gap-1 text-black text-sm mb-1">
                      {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star"></i>)}
                    </div>
                    <p className="text-black font-bold uppercase tracking-widest text-xs">{t('comp_rating_source')}</p>
                  </div>
                </div>
                <blockquote className="text-2xl lg:text-3xl font-black italic leading-tight text-black uppercase mb-8">
                  {t('comp_review_quote')}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ffce00]/20">
                    <img
                      src="/assets/review0.png"
                      alt={t('comp_reviewer')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold uppercase text-sm">{t('comp_reviewer')}</p>
                    <p className="text-black/60 text-xs font-bold uppercase tracking-widest">{t('comp_review_badge')}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-[#ffce00] py-32 relative overflow-hidden">
        <div className="app-container relative z-10">
          <div className="text-center mb-16">
            <h4 className="font-display font-black text-black tracking-tighter text-sm mb-4">{t('equip_badge')}</h4>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black italic tracking-tighter leading-[0.9] uppercase">
              {t('equip_title')}
            </h2>
            <p className="mt-8 text-black/70 max-w-4xl mx-auto font-bold text-sm sm:text-base leading-relaxed uppercase">
              {t('equip_desc')}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center justify-between absolute inset-y-0 -left-12 -right-12 z-20 pointer-events-none">
              <button
                onClick={prevMaterial}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center text-black hover:scale-125 transition-transform"
              >
                <i className="fas fa-chevron-left text-2xl"></i>
              </button>
              <button
                onClick={nextMaterial}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center text-black hover:scale-125 transition-transform"
              >
                <i className="fas fa-chevron-right text-2xl"></i>
              </button>
            </div>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={materialIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl mb-12 w-full max-w-2xl hover-scale hover:shadow-[0_20px_80px_rgba(255,206,0,0.15)] transition-all duration-500">
                    <img
                      src={EQUIPMENT_PARTNERS[materialIndex].logo}
                      alt={EQUIPMENT_PARTNERS[materialIndex].name}
                      className="h-24 sm:h-32 object-contain mx-auto"
                    />
                  </div>
                  <div className="max-w-2xl mx-auto px-4">
                    <p className="text-black font-bold text-sm sm:text-lg leading-relaxed uppercase tracking-tight">
                      {EQUIPMENT_PARTNERS[materialIndex].description}
                    </p>
                    <div className="flex justify-center mt-10 space-x-3">
                      {EQUIPMENT_PARTNERS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setMaterialIndex(i)}
                          className={`w-3 h-3 transition-all duration-300 border-2 border-black ${materialIndex === i ? 'bg-black w-8' : 'bg-transparent'}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://thegymland.club/wp-content/uploads/Gunge-wall-noir2.jpg')] bg-cover mix-blend-overlay"></div>
      </section>

      {/* Final CTA */}
      <section className="relative">
        <div className="app-container">
          <div className="relative overflow-hidden rounded-[3rem] sm:rounded-[4rem] bg-[#0a0a0a] border border-white/5 p-12 sm:p-24 lg:p-32 text-center">
            <div className="absolute inset-0 rounded-[3rem] sm:rounded-[4rem] overflow-hidden">
              <ShadowOverlay
                color="rgba(255, 206, 0, 0.4)"
                animation={{ scale: 60, speed: 90 }}
                noise={{ opacity: 30, scale: 1.2 }}
                sizing="fill"
              />
            </div>

            <div className="absolute inset-0 opacity-10 bg-[url('https://thegymland.club/wp-content/uploads/Gunge-wall-noir2.jpg')] bg-cover mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ffce00]/5 blur-[120px] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="section-heading font-black italic tracking-tighter leading-none mb-10 uppercase text-white">
                {t('cta_title_1')} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffce00] to-[#ff8c00] glow-text">{t('cta_title_2')}</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                {t('cta_desc')}
              </p>
              <Link
                to="/membership"
                className="btn-premium inline-block bg-[#ffce00] text-black px-12 lg:px-16 py-5 lg:py-7 rounded-full font-black italic tracking-tighter text-xl lg:text-2xl hover:scale-105 hover:shadow-[0_0_80px_rgba(255,206,0,0.6)] active:scale-95 transition-all shadow-[0_0_60px_rgba(255,206,0,0.4)] relative group overflow-hidden"
              >
                <span className="relative z-10">{t('cta_button')}</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
