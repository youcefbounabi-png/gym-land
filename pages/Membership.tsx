import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PLANS } from '../constants';
import { useLanguage } from '../LanguageContext';

const planNames: Record<string, string> = {
  core: 'plan_core',
  titan: 'plan_titan',
  apex: 'plan_apex',
};

const featureKeys: Record<string, string> = {
  'Elite Equipment': 'feat_equipment',
  'Data Analytics': 'feat_analytics',
  'Digital Lockers': 'feat_lockers',
  'App Synchronization': 'feat_app',
  'Unlimited Zones': 'feat_zones',
  'Neuro-Conditioning': 'feat_conditioning',
  'Guest Protocols': 'feat_guest',
  'Nutrition Dashboard': 'feat_nutrition',
  'Individual Strategy': 'feat_strategy',
  'Recovery Lab Access': 'feat_recovery',
  'Priority Reservations': 'feat_priority',
  'Personalized Supplementation': 'feat_supplements',
};

const Membership: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 relative overflow-hidden bg-[#020202]">
      <section className="p-0 mt-16 sm:mt-24">
        <div className="app-container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-32">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8 block"
            >
              {t('membership_badge')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-heading font-black italic tracking-tighter mb-10 leading-none uppercase text-white"
            >
              {t('membership_title_1')} <br /> <span className="gold-gradient-text">{t('membership_title_2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
            >
              {t('membership_desc')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`relative group rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-12 flex flex-col transition-all duration-500 overflow-hidden h-full ${plan.isPopular
                  ? 'bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#ffce00]/50 shadow-[0_0_80px_rgba(255,206,0,0.15)] lg:scale-105 z-10'
                  : 'bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#ffce00]/20'
                  }`}
              >
                {plan.isPopular && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffce00] to-transparent"></div>
                    <div className="absolute top-8 right-8 bg-[#ffce00] text-black px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-[0_0_15px_rgba(255,206,0,0.3)]">
                      {t('membership_popular')}
                    </div>
                  </>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xs font-black tracking-[0.4em] uppercase text-gray-500 mb-2">{t((planNames[plan.id] || plan.name) as any)}</h3>
                  <div className="mb-10 flex items-baseline gap-2">
                    <span className={`text-5xl sm:text-6xl font-black italic tracking-tighter ${plan.isPopular ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'text-white/80'}`}>
                      {plan.price}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">
                      {t('membership_period')}
                    </span>
                  </div>

                  <ul className="space-y-5 mb-12 flex-grow">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-4 group/item">
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${plan.isPopular ? 'bg-[#ffce00] scale-150 shadow-[0_0_8px_#ffce00]' : 'bg-gray-700'}`}></div>
                        <span className="text-sm font-light text-gray-400 group-hover/item:text-white transition-colors">{t((featureKeys[feature] || feature) as any)}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className={`w-full py-5 text-center rounded-full font-black italic tracking-tighter text-xl transition-all duration-500 relative overflow-hidden group/btn btn-premium ${plan.isPopular ? 'bg-[#ffce00] text-black shadow-[0_0_30px_rgba(255,206,0,0.4)] hover:shadow-[0_0_50px_rgba(255,206,0,0.6)]' : 'bg-transparent border border-white/20 text-white hover:border-[#ffce00] hover:shadow-[0_0_20px_rgba(255,206,0,0.2)]'
                    }`}>
                    <span className="relative z-10 uppercase">{t('membership_cta')}</span>
                    <div className={`absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ${plan.isPopular ? '' : 'hidden'}`}></div>
                    <div className={`absolute inset-0 bg-[#ffce00] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ${plan.isPopular ? 'hidden' : ''}`}></div>
                  </Link>
                </div>

                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#ffce00]/10 to-transparent opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700"></div>
              </motion.div>
            ))}
          </div>

          {/* Corporate Section */}
          <div className="mt-24 sm:mt-32 p-10 sm:p-14 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between gap-10 hover:border-[#ffce00]/20 transition-all group">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-[1.5rem] bg-gradient-to-br from-[#ffce00] to-[#ff8c00] flex items-center justify-center text-2xl sm:text-3xl text-black shadow-xl shadow-[#ffce00]/20 group-hover:scale-110 transition-transform duration-500">
                <i className="fas fa-microchip"></i>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2 text-white">{t('membership_corp_title')}</h4>
                <p className="text-gray-500 text-sm font-light max-w-sm leading-relaxed">{t('membership_corp_desc')}</p>
              </div>
            </div>
            <Link to="/contact" className="w-full lg:w-auto px-10 py-5 rounded-full border border-[#ffce00]/30 text-[#ffce00] font-black italic tracking-tighter uppercase hover:bg-[#ffce00] hover:text-black transition-all text-sm tracking-widest text-center hover:shadow-[0_0_30px_rgba(255,206,0,0.2)]">
              {t('membership_corp_cta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;