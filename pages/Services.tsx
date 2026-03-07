
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, CLASSES_DATA, WOMEN_ZONE_DATA, FACILITIES_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const features = [t('services_features' as any)].flat();
  // Fallback features
  const featureList = Array.isArray(features) && features.length > 1
    ? features
    : ['Quality Equipment', 'Expert Supervision', 'Clean Environment', 'Personal Coaching'];

  return (
    <div className="pt-32 pb-16 overflow-hidden">
      <section className="p-0 mt-16 sm:mt-24">
        <div className="app-container">
          <div className="max-w-4xl mb-20 sm:mb-32">
            <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8">{t('services_badge')}</h3>
            <h1 className="hero-heading font-black italic tracking-tighter mb-10 leading-none uppercase text-white">{t('services_title_1')} <br /> <span className="gold-gradient-text">{t('services_title_2')}</span></h1>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
              {t('services_desc')}
            </p>
          </div>

          <div className="space-y-24 sm:space-y-48">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
              >
                <motion.div
                  className="w-full lg:w-1/2"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#ffce00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-[60px] pointer-events-none"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative z-10 w-full aspect-video object-cover rounded-[2.5rem] shadow-2xl border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:border-[#ffce00]/30"
                    />
                  </div>
                </motion.div>
                <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
                  <h2 className="section-heading font-black italic leading-[0.85] uppercase text-white">
                    <span className="text-[#ffce00]">{service.title}</span> <br /> {service.subtitle}
                  </h2>
                  <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featureList.map(f => (
                      <li key={f} className="flex items-center space-x-3 text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">
                        <i className="fas fa-check-circle text-[#ffce00] shadow-[0_0_10px_rgba(255,206,0,0.2)]"></i> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 sm:pt-8">
                    <Link to="/contact" className="inline-block w-full sm:w-auto bg-white text-black px-10 lg:px-12 py-4 lg:py-5 rounded-full font-black italic tracking-tighter text-lg hover:bg-[#ffce00] transition-all hover:scale-105 text-center shadow-[0_0_0px_rgba(255,206,0,0)] hover:shadow-[0_0_30px_rgba(255,206,0,0.4)]">
                      {t('services_cta')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Women-Only Sanctuary Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-40 sm:mt-64 relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] bg-[#080808] border border-white/5"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 p-12 lg:p-24 space-y-8">
                <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase">{WOMEN_ZONE_DATA.subtitle}</h3>
                <h2 className="section-heading font-black italic leading-[0.9] uppercase text-white">{WOMEN_ZONE_DATA.title}</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">{WOMEN_ZONE_DATA.description}</p>
                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ffce00]">
                      <i className="fas fa-shield-heart text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-white uppercase">{t('services_women_private')}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ffce00]">
                      <i className="fas fa-door-closed text-xl"></i>
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-white uppercase">{t('services_women_dedicated')}</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-[400px] lg:h-[700px]">
                <img src={WOMEN_ZONE_DATA.image} className="w-full h-full object-cover grayscale brightness-50 contrast-125" alt="Sanctuary" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffce00]/5 blur-[150px] pointer-events-none"></div>
          </motion.div>

          {/* Group Classes Section */}
          <div className="mt-40 sm:mt-64">
            <div className="text-center mb-20 sm:mb-32">
              <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8">{t('classes_badge')}</h3>
              <h2 className="section-heading font-black italic tracking-tighter uppercase text-white mb-10">{t('classes_title_1')} <span className="gold-gradient-text">{t('classes_title_2')}</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">{t('classes_desc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {CLASSES_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="glass-card p-10 rounded-[2.5rem] border-white/5 group hover:border-[#ffce00]/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#ffce00]/10 transition-colors">
                    <i className={`fas ${item.icon} text-2xl text-[#ffce00]`}></i>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase text-white mb-4 group-hover:text-[#ffce00] transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">{item.description}</p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 mb-1">{t('classes_impact')}</p>
                    <p className="text-white text-xs font-bold uppercase italic tracking-tighter">{item.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extras & Perks Section */}
          <div className="mt-40 sm:mt-64 pb-20">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
              <div className="max-w-2xl">
                <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8">{t('extras_badge')}</h3>
                <h2 className="section-heading font-black italic tracking-tighter uppercase text-white">{t('extras_title_1')} <span className="gold-gradient-text">{t('extras_title_2')}</span></h2>
              </div>
              <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
                {t('extras_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {FACILITIES_DATA.map((facility, idx) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#ffce00]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <i className={`fas ${facility.icon} text-xl text-[#ffce00]`}></i>
                  </div>
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase text-white mb-4">{facility.title}</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{facility.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link to="/contact" className="inline-block border border-white/20 text-white px-12 py-5 rounded-full font-black italic tracking-tighter text-xl hover:bg-white hover:text-black transition-all">
                {t('extras_cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
